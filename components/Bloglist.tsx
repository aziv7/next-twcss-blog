import Image from 'next/image';
import React from 'react';
import { Post } from '../typings';
import { ArrowUpRightIcon } from '@heroicons/react/solid';

type Props = { posts: Post[] };
const Bloglist = ({ posts }: Props) => {
  return (
    <div>
      <hr className='border-btnTextOrange mb-10' />
      <div className='grid grid-cols-1 md:grid-cols-2 px-10  gap-10 gap-y-16 pb-24 '>
        {posts.map((post) => (
          <div
            className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-all duration-300 ease-out group flex flex-col cursor-pointer'
            key={post._id}>
            <div>
              <Image
                alt='Aziz '
                src={''}
                fill
                className='object-cover lg:object-center object-left'
              />
              <div className='absolute bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between bottom-0 w-full'>
                <div>
                  <p className='font-bold'>{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>{' '}
                </div>
                <div className='flex flex-col md:flex-row md:gap-x-3 items-center gap-y-3'>
                  {post.categories.map((category) => (
                    <div className='bg-btnTextOrange text-center text-black px-3 rounded-full text-sm font-semibold'>
                      <p>{category.title} </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='mt-5 flex-1'>
              <p className='underline text-lg font-bold'>{post.title}</p>
              <p className='text-gray-500 line-clamp-2'>{post.description} </p>
            </div>
            <p className='mt-5 font-bold flex items-center group-hover:underline'>
              View Post <ArrowUpRightIcon className='ml-2 h-4 w-4' />{' '}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloglist;
