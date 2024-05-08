import React from 'react';

const SingleBlog = ({ blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <div className="group relative overflow-hidden rounded-sm shadow-one duration-300 bg-[#1D2430] hover:shadow-gray-[#1D2430] rounded-lg ">
      <a href="/blogdetails" className="relative block aspect-[37/22] w-full">
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {tags[0]}
        </span>
        <img src={image} alt="image" />
      </a>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <a href="/blogdetails" className="mb-4 block font-bold hover:text-primary text-white hover:text-primary sm:text-2xl">
            {title}
          </a>
        </h3>
        <p className="mb-6 border-b border-body-color  pb-6 text-base font-medium text-body-color border-white border-opacity-10">
          {paragraph}
        </p>
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color  pr-5 border-white border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <img src={author.image} alt="author" />
              </div>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-white">
                By {author.name}
              </h4>
              <p className="text-xs text-body-color">{author.designation}</p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-white">
              Date
            </h4>
            <p className="text-xs text-body-color">{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
