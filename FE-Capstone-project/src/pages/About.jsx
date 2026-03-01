function About() {
  return (
    <div className="min-h-screen bg-[#ced1d3] py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10">
          About This Project
        </h1>

        {/* Project Description */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🌤️ Weather Dashboard</h2>
          <p className="text-gray-700 leading-relaxed">
            This Weather Dashboard is a capstone project built as part of my
            journey in the ALX Frontend Development Program. The application
            allows users to search for cities worldwide and view real-time
            weather data, including temperature, humidity, wind speed, and a
            multi-day forecast.
          </p>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">✨ Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✔️ Search weather by city</li>
            <li>✔️ 5-day forecast</li>
            <li>✔️ Dark/Light mode</li>
            <li>✔️ Responsive design</li>
            <li>✔️ Popular cities quick access</li>
            <li>✔️ Real-time API integration</li>
          </ul>
        </section>

        {/* Technologies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🛠️ Technologies Used</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>⚛️ React.js</li>
            <li>🎨 Tailwind CSS</li>
            <li>☁️ OpenWeatherMap API</li>
            <li>⚡ Vite</li>
            <li>🚀 Netlify Deployment</li>
          </ul>
        </section>

        {/* About Me */}
        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">👨‍💻 About the Developer</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            My name is <span className="font-semibold">Segni Mideksa</span>.
            I am a frontend developer and an ALX learner passionate about
            building modern, responsive, and user-friendly web applications.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This project represents my growth in React, API integration,
            responsive design, and frontend architecture. I am currently open
            to internship and junior developer opportunities.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:segnim21@gmail.com"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              📧 Email
            </a>

            <a
              href="https://linkedin.com/in/segni-mideksa21"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/segnim21"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
            >
              GitHub
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;