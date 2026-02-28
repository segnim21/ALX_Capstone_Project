function About() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-4xl font-bold text-center text-primary-dark mb-8">
        📖 About Our Website
      </h1>

      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">🌤️ Welcome to WeatherDashboard</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide accurate and real-time weather information for cities
          around the world. Built with modern web technologies to ensure a fast and smooth
          user experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="card">
          <h3 className="text-xl font-bold mb-4">✨ Features We Offer</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-2xl">🔍</span>
              <span>City Search - Find any city worldwide</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">🌡️</span>
              <span>Current Temperature - °C or °F</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">💧</span>
              <span>Humidity Levels - Stay informed</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">💨</span>
              <span>Wind Speed - Plan your day</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <span>Clean UI Design - Easy to use</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">📱</span>
              <span>Mobile Friendly - Use on any device</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold mb-4">🛠️ Technologies Used</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-2xl">⚛️</span>
              <span>React.js - Frontend library</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <span>Tailwind CSS - Styling</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">☁️</span>
              <span>OpenWeatherMap API - Weather data</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">📦</span>
              <span>Vite - Build tool</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span>Netlify - Hosting</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Developer Section - Updated with your information */}
      <div className="card mb-8 border-2 border-primary-light">
        <h3 className="text-2xl font-bold mb-6 text-primary-dark">👨‍💻 About the Developer</h3>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-sky rounded-full flex items-center justify-center text-5xl text-white shadow-lg">
            👤
          </div>
          <div className="flex-1">
            <h4 className="text-2xl font-bold mb-2">Segni Mideksa</h4>
            <p className="text-gray-600 mb-4">Frontend Developer | UI Design Enthusiast</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 leading-relaxed">
                This Weather Dashboard is a learning project from <span className="font-bold text-primary">ALX Frontend Development Program</span>. 
                I'm passionate about creating intuitive and visually appealing web applications 
                that provide real value to users.
              </p>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎨</span>
                <span className="text-gray-700"><span className="font-semibold">UI Design Skills:</span> Figma, Adobe XD, Prototyping, Wireframing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <span className="text-gray-700"><span className="font-semibold">Frontend Skills:</span> React, Tailwind CSS, JavaScript, HTML5, CSS3</span>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🌟</span>
                <div>
                  <p className="font-bold text-green-700">Open for International Internship Opportunities!</p>
                  <p className="text-green-600 text-sm">Looking for remote or on-site internship positions to grow and contribute</p>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-3">
              <a 
                href="mailto:your.email@example.com" 
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition flex items-center gap-2"
              >
                <span>📧</span> Email Me
              </a>
              <a 
                href="#" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2"
              >
                <span>🔗</span> LinkedIn
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition flex items-center gap-2"
              >
                <span>💻</span> GitHub
              </a>
              <a 
                href="#" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2"
              >
                <span>🎨</span> Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Journey Section */}
      <div className="card bg-gradient-to-r from-yellow-50 to-orange-50">
        <h3 className="text-xl font-bold mb-4">📚 My Learning Journey with ALX</h3>
        <div className="flex items-start gap-4">
          <span className="text-4xl">🚀</span>
          <div>
            <p className="text-gray-700 mb-3">
              This project is part of my frontend development capstone at <span className="font-bold">ALX</span>. 
              Through this program, I'm gaining hands-on experience in:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Modern React development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> API integration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Responsive design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> UI/UX best practices
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> State management
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Deployment workflows
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;