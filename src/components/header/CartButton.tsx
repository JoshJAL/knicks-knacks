'use client';

import { FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from '@/stores/cartStore';

export default function CartButton() {
  const { cartModalOpen, setCartModalOpen } = useCartStore();

  function handleClick() {
    setCartModalOpen(!cartModalOpen);
  }

  return (
    <button
      onClick={handleClick}
      type='button'
      className='hover:scale-125 transition-all duration-200 ease-in-out flex flex-col gap-2 items-center justify-center'
    >
      <FaShoppingCart className='w-7 h-7 md:w-9 md:h-9' />
      <p className='md:text-sm text-xs'>Cart</p>
    </button>
  );
}
