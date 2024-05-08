import React from 'react';
import blogimg from '/assets/images/about.jpg';
import Toursabout from './Blogi';
import Blogb from './Blogb';

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
              <img
                  src={blogimg}
                  alt="blog post"
                  className="my-8 w-full h-auto rounded-lg shadow-md"
  />
              </div>
              <div className="prose lg:prose-lg dark:prose-dark">
             {/* <img
                  src={blogimg}
                  alt="blog post"
                  className="my-8 w-full h-auto rounded-lg shadow-md"
  />*/}
                
                <h1 className='mt-4 mb-4 text-[20px] text-yellow-200'>Tis the season of evergreen</h1>
                <p>
                For a few months of the year, the Western Cape transforms into an ethereal wonderland of
mossy greens and grassy slopes. Cape Town isn’t immune from the transformation and there’s
a reason why the city is world-renowned for its striking flora, especially during the rainy season.
The best way to experience the kaleidoscope of colours is on the slopes of Table Mountain or
Kirstenbosch Botanical Gardens when the first downfall hits the parched earth, re-imagining it
as a real-life version of a David Attenborough nature documentary.
Take with a few hiking buddies, join a tour group, lace up your hiking shoes, and go exploring
the beautiful outdoors on some of Cape Town’s breathtaking hiking trails. Oh, and don’t forget
your raincoat.
                </p>
            

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
