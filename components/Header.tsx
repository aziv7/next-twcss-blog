import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href={'/'}>
          <Image
            className='rounded-full'
            src='https://i.imgur.com/a8ccvyU.png'
            width={50}
            height={50}
            alt='logo'
          />
        </Link>
        <h1>EL Blog</h1>
      </div>
      <div>
        <Link
          className='px-5 py-3 text-sm md:text-base bg-gray-900 hover:bg-transparent  border-2 hover:border-black  transition-colors duration-300 ease-in-out  text-btnTextOrange flex items-center rounded-full text-center'
          href={'/'}>
          Sign uo to the Universe of Code
        </Link>
      </div>
    </div>
  );
};

export default Header;
