import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ title, imageUrl, content }) => {
  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <img
                src={imageUrl}
                alt="blog post"
                className="my-8 w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="prose lg:prose-lg dark:prose-dark">
              <h1 className="mt-4 mb-4 text-[20px] text-yellow-200">{title}</h1>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BlogPost;
