import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
              🌤️ WeatherDashboard
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              A modern weather dashboard built with React and Tailwind CSS.
              This project is part of my ALX Frontend Development capstone.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4 text-xl">
              <a
                href="https://github.com/segnim21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                💻
              </a>

              <a
                href="https://linkedin.com/in/segni-mideksa21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                🔗
              </a>

              <a
                href="mailto:segni.mideksa@example.com"
                className="hover:text-white transition"
              >
                📧
              </a>
            </div>

            <p className="mt-4 text-sm">
              Open for internships & junior frontend opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {currentYear} WeatherDashboard : Built by Segni Mideksa | ALX Frontend Capstone Project
        </div>

      </div>
    </footer>
  );
}

export default Footer;