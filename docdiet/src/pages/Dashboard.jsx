import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dietPlans from '../data/dietPlans.json';

const Dashboard = ({ selectedConditions }) => {
  const navigate = useNavigate();
  const [dietPlan, setDietPlan] = useState([]);

  useEffect(() => {
    const plan = selectedConditions.flatMap(
      (condition) => dietPlans[condition] || []
    );
    setDietPlan(plan);
  }, [selectedConditions]);

  const handleLogout = () => {
    navigate('/login'); // Logout logic
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Your Dashboard</h1>

      {selectedConditions.length > 0 ? (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Conditions:</h2>
          <ul className="list-disc pl-6 mb-6">
            {selectedConditions.map((condition) => (
              <li key={condition} className="text-lg">{condition}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">30-Day Diet Plan:</h2>
          <ul className="list-disc pl-6">
            {dietPlan.map((day, index) => (
              <li key={index} className="mb-4">
                <strong>Day {day.day}:</strong> 
                <ul className="list-disc pl-6">
                  <li><strong>Breakfast:</strong> {day.breakfast}</li>
                  <li><strong>Lunch:</strong> {day.lunch}</li>
                  <li><strong>Dinner:</strong> {day.dinner}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-700 mt-8">
          No conditions selected. Please <a href="/conditions" className="text-blue-600 underline">select your conditions</a>.
        </p>
      )}

      <div className="text-center mt-8">
        <button 
          onClick={handleLogout} 
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
