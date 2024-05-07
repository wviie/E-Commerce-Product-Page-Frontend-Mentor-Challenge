import { useState } from 'react'
import logo from '../../public/images/logo.svg'
import avatar from '../../public/images/image-avatar.png'
import Navbar from './Navbar'
import SideMenuMobile from './MobileSideMenu'
import CartDropDown from './CartDropDown'

const Header = ({products, orders, setOrders, addCents}) => {
  // sum of quantities
  const sumQuantities = () => {
    return orders.reduce((total, order) => total + order.quantity, 0);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartDropDown, setIsCartDropDown] = useState(false);

  return (
    <header className="header h-28 max-md:h-16 mb-20 max-md:mb-0 max-md:px-6 flex items-center justify-between border-b">
      <div className="menu-container h-full flex items-center gap-10 max-md:gap-4">
        <button aria-label="open-menu" className="hidden max-md:block" onClick={() => setIsMenuOpen((prevState) => !prevState)}>
          <svg width={16} height={15} xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" />
          </svg>
        </button>
        { isMenuOpen &&
          <div className="menu-overlay overlay md:hidden">
            <SideMenuMobile setIsMenuOpen = { setIsMenuOpen } />
          </div>
        }
        <div className="logo min-w-32">
          <a href="#"><img src={ logo } alt="Logo" /></a>
        </div> 
        <Navbar />
      </div>
      <div className="h-full flex items-center lg:gap-8 md:gap-4 gap-6">
        <div className="cart-container h-full md:relative flex items-center">
          <button aria-label="cart drop down" className='relative' onClick={() => setIsCartDropDown((prevState) => !prevState)}>
            <div className="absolute -top-2 -right-3 bg-orange-500 rounded-full min-w-6 text-xs text-white font-bold px-1">{orders.length > 0 ? sumQuantities() : ''}</div>
            <svg className="fill-current text-[#69707D] hover:text-black" width={ 22} height={20} xmlns="http://www.w3.org/2000/svg">
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero" />
            </svg>
          </button>
          { isCartDropDown &&
            <CartDropDown 
            products = {products}
            orders = {orders}
            setOrders = {setOrders}
            addCents = {addCents} />
          }
        </div>
        <a href="/profile" className="profile rounded-full ml-2 hover:outline outline-2 outline-orange-500 min-w-6">
          <img src={ avatar } alt="avatar" className="w-12 max-md:w-6" />
        </a>
      </div>
    </header>
  )
}

export default Header