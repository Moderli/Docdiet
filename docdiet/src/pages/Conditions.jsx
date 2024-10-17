import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const conditionsList = [
  'Diabetes',
  'Hypertension',
  'Obesity',
  'Heart Disease',
  'Arthritis',
  'Asthma',
  'Chronic Kidney Disease'
];

const Conditions = ({ setSelectedConditions }) => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (condition) => {
    setSelected((prev) =>
      prev.includes(condition)
        ? prev.filter((item) => item !== condition)
        : [...prev, condition]
    );
  };

  const handleSubmit = () => {
    setSelectedConditions(selected);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">What are you suffering from?</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          {conditionsList.map((condition) => (
            <button
              key={condition}
              onClick={() => handleSelect(condition)}
              className={`px-4 py-2 rounded-lg border ${
                selected.includes(condition) ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              {condition}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Conditions;
