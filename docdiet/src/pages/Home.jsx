import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="bg-gray-50 min-h-screen">
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">ChronicCare</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/signup" className="hover:text-blue-500">Signup</Link></li>
            <li><Link to="/login" className="hover:text-blue-500">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>

    <section className="bg-blue-100 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Personalized Diet Plans for Chronic Conditions</h2>
        <p className="text-lg text-gray-700 mb-8">
          Get 30-day meal plans tailored to your condition and lifestyle.
        </p>
        <Link to="/signup">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  </div>
);

export default Home;
