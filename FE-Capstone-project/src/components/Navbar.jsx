import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Weather Dashboard</h1>

        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;