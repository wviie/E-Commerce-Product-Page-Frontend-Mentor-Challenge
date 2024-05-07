const Navbar = () => {
  return (
    <nav className="h-full flex items-center max-md:hidden">
      <ul className="h-full flex items-center gap-7 text-slate-500">
        <li className="h-full flex items-center hover:border-b-4 border-orange-500 hover:text-slate-800"><a href="/collections" className="h-full flex items-center">Collections</a></li>
        <li className="h-full flex items-center hover:border-b-4 border-orange-500 hover:text-slate-800"><a href="/men" className="h-full flex items-center">Men</a></li>
        <li className="h-full flex items-center hover:border-b-4 border-orange-500 hover:text-slate-800"><a href="/women" className="h-full flex items-center">Women</a></li>
        <li className="h-full flex items-center hover:border-b-4 border-orange-500 hover:text-slate-800"><a href="/about" className="h-full flex items-center">About</a></li>
        <li className="h-full flex items-center hover:border-b-4 border-orange-500 hover:text-slate-800"><a href="/contact" className="h-full flex items-center">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar