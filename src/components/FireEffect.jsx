import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const FireEffect = () => {
  const canvasRef = useRef(null);
  const [params, setParams] = useState({
    fireTime: 0.35,
    fireTimeAddition: 0
  });
  let gl, st, uniforms;

  useEffect(() => {
    // Function to initialize WebGL
    const initShader = () => {
      const vsSource = `
        precision mediump float;
        varying vec2 vUv;
        attribute vec2 a_position;

        void main() {
          vUv = a_position;
          gl_Position = vec4(a_position, 0.0, 1.0);
        }
      `;

      const fsSource = `
        precision mediump float;
        varying vec2 vUv;
        uniform vec2 u_resolution;
        uniform float u_progress;
        uniform float u_time;

        // Your fragment shader code here
        // ...
      `;

      // WebGL initialization logic
      // ...

      return gl;
    };

    // Function to resize canvas
    const resizeCanvas = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.u_resolution, canvas.width, canvas.height);
      render();
    };

    // Function to render scene
    const render = () => {
      const currentTime = performance.now();
      gl.uniform1f(uniforms.u_time, currentTime);

      if (st.scrollTrigger.isActive && st.scrollTrigger.direction === 1) {
        setParams(prevParams => ({
          ...prevParams,
          fireTimeAddition: prevParams.fireTimeAddition + 0.001
        }));
      }

      gl.uniform1f(uniforms.u_progress, params.fireTime + params.fireTimeAddition);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      requestAnimationFrame(render);
    };

    // Initialize WebGL
    gl = initShader();

    // Setup GSAP ScrollTrigger
    st = gsap.timeline({
      scrollTrigger: {
        trigger: ".page",
        start: "0% 0%",
        end: "100% 100%",
        scrub: true,
        onLeaveBack: () => {
          setParams(prevParams => ({
            ...prevParams,
            fireTimeAddition: Math.min(prevParams.fireTimeAddition, 0.3)
          }));
          gsap.to(params, { duration: 0.75, fireTimeAddition: 0 });
        },
      },
    }).to(".scroll-msg", { duration: 0.1, opacity: 0 }, 0).to(params, { fireTime: 0.63 }, 0);

    // Resize canvas on window resize
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      // Additional cleanup if necessary
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <>
      <canvas ref={canvasRef} id="fire-overlay"></canvas>
      <div className="scroll-msg">
        <div>Hello 👋</div>
        <div>scroll me</div>
        <div className="arrow-animated">&darr;</div>
      </div>
    </>
  );
};

export default FireEffect;
