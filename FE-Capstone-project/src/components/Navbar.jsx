import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a1a1f] hover:bg-blue-500 shadow-md z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-white" >Weather Dashboard</h1>
    <div className="flex gap-4 ">
      <a href="/" className="text-white">Home</a>
      <a href="/about" className="text-white">About</a>
      <a href="/contact" className="text-white">Contact</a>
    </div>
  </div>
</nav>
  );
}

export default Navbar;