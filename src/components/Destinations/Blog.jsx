import React from "react";
import { Link } from "react-router-dom";
import blog1 from "./images/blogs/blog1.jpg";
import blog2 from "./images/blogs/blog2.jpg";
import blog3 from "./images/blogs/blog3.jpg";

const Blog = () => {
  const data = [
    {
      title: "Discovering Zimbabwe: Expedition Reports",
      desc: `Embark on a journey of discovery through Zimbabwe's captivating landscapes and vibrant culture. Our expedition reports offer insights into unforgettable adventures awaiting you in this enchanting destination.`,
      img: blog1,
      path: "/blog1",
    },
    {
      title: "Exploring Zimbabwe: Articles",
      desc: `Delve deeper into Zimbabwe's rich history and natural wonders with our collection of articles. From the majestic Victoria Falls to the ancient ruins of Great Zimbabwe, there's so much to explore and uncover.`,
      img: blog2,
      path: "/blog/exploring-zimbabwe",
    },
    {
      title: "Zimbabwean Adventures: Blog",
      desc: `Join us as we share stories and experiences from our Zimbabwean adventures. From thrilling safaris in Hwange National Park to cultural encounters in Harare, our blog captures the essence of exploring Zimbabwe.`,
      img: blog3,
      path: "/blog/zimbabwean-adventures",
    },
  ];
  return (
    <section className="w-full h-full bg-blogBg bg-no-repeat bg-cover flex items-center justify-center text-white py-[8rem]">
      <div className="w-[90%] lg:w-[85%] mx-auto flex flex-wrap gap-5">
        {data.map((blog, i) => (
          <Link key={i} to={blog.path} className="flex-[100%] md:flex-[25%] md:even:mt-[3rem] shadow-lg rounded-lg overflow-hidden">
            <img className="w-full" src={blog.img} alt="blogImg" />
            <div className="mt-5 p-4">
              <h1 className="text-2xl 2xl:text-4xl pb-3 font-medium capitalize">
                {blog.title}
              </h1>
              <p className="text-sm 2xl:text-xl capitalize">{blog.desc}</p>
              <button className="mt-4 rounded-lg bg-slate-600 w-full md:w-auto py-2 px-3 2xl:py-3 2xl:px-4 cursor-pointer text-sm hover:bg-slate-400">
                Read More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
