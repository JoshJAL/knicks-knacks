import CartButton from './CartButton';
import HeaderLink from './HeaderLink';

import { FaStore, FaGrinStars } from 'react-icons/fa';
import { GiJewelCrown } from 'react-icons/gi';

export default function Header() {
  return (
    <header className='w-full fixed md:top-0 bottom-0 p-3 z-50 h-fit'>
      <nav className='max-w-7xl w-fit md:w-full mx-auto rounded-full bg-colombia-blue px-10 py-5 flex justify-center md:justify-start items-center gap-10'>
        <HeaderLink href='/'>
          <GiJewelCrown className='w-7 h-7 md:w-9 md:h-9' />
          <p className='text-xs md:text-sm'>Home</p>
        </HeaderLink>
        <div className='hidden md:inline-flex flex-1' />
        <HeaderLink href='/about'>
          <FaGrinStars className='w-7 h-7 md:w-9 md:h-9' />
          <p className='text-xs md:text-sm'>About Us</p>
        </HeaderLink>
        <HeaderLink href='/shop'>
          <FaStore className='w-7 h-7 md:w-9 md:h-9' />
          <p className='text-xs md:text-sm'>Shop</p>
        </HeaderLink>
        <CartButton />
      </nav>
    </header>
  );
}
