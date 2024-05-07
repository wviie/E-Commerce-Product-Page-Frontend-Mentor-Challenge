const SideMenuMobile = ({ setIsMenuOpen }) => {
  return (
    <section className="mobile-menu h-screen w-64 p-6 fixed -left-1 top-0 bg-white animate-[slideIn_700ms_ease-in-out]">
      <div className="h-16">
        <button aria-label="close menu" onClick={() => setIsMenuOpen((prevState) => !prevState)}>
          <svg width={14} height={15} xmlns="http://www.w3.org/2000/svg">
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" />
          </svg>
        </button>
      </div>
      <nav className="menu-navigation grid">
        <ul className="nav-list h-full grid gap-5 text-slate-900 font-bold text-lg">
          <li><a href="/collections" className="h-full flex items-center">Collections</a></li>
          <li><a href="/men" className="h-full flex items-center">Men</a></li>
          <li><a href="/women" className="h-full flex items-center">Women</a></li>
          <li><a href="/about" className="h-full flex items-center">About</a></li>
          <li><a href="/contact" className="h-full flex items-center">Contact</a></li>
        </ul>
      </nav>
    </section>
  )
}

export default SideMenuMobile