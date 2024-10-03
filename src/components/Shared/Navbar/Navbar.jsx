import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-600">Test Store</Link>
        <ul className="flex space-x-6 text-lg font-medium text-black">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/products" className="hover:text-blue-600">Products</Link></li>
          <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
