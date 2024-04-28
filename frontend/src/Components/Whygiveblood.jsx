import React from 'react';

export default function WhyGiveBlood() {
  return (
    <>
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 ">Why Give Blood</h1>
        <p className="text-lg mb-8 p-3">Giving blood saves lives. <br />The blood you give is a lifeline in an emergency and for people who need long-term treatments.We need new blood donors from all backgrounds to ensure there is the right blood available for patients who need it.</p>
        <p className="text-xl font-bold mb-2 pt-4">Benefits of Donating Blood:</p>
        <ul className="list-disc pl-4 mb-8">
          <li>Your blood donation can be a lifeline in emergencies, helping save lives in critical situations.</li>
          <li>Patients undergoing long-term treatments often rely on blood transfusions to manage their conditions.</li>
          <li>Ethnically matched blood is crucial for sickle cell patients who need regular transfusions.</li>
          <li>Encouraging young people to donate ensures a sustainable blood supply for the future.</li>
        </ul>

        <p className="text-xl font-bold mb-2 pt-4">Why do we need you to give blood?</p>
        <ul className="list-disc pl-4 text-lg mb-8">
          <li>4,300 blood donations every day on average to meet the needs of our hospitals</li>
          <li>Over 140,000 people to donate blood for the first time this year</li>
          <li>12,000 new Black heritage donors, to meet the growing demand for ethnically matched blood for sickle cell patients who need regular transfusions to stay alive</li>
          <li>More young people aged 17-35 to donate, to ensure we have enough blood for the future</li>
        </ul>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="p-4 shadow-md bg-gray-200 hover:scale-105 transform transition duration-300 cursor-pointer">
            <img src="https://media.istockphoto.com/id/1338750217/photo/nurse-preparing-patient-to-do-a-blood-analysis.jpg?s=612x612&w=0&k=20&c=HhqYNGE4GhNVegUysfyWjce08QO_fS3t0lqeCnn54cM=" alt="Emergency" className="w-50 mb-2" />
            <h2 className="text-xl font-semibold mb-2">Emergency Situations</h2>
            <p className="text-gray-700">Your blood donation can be a lifeline in emergencies, helping save lives in critical situations.</p>
          </div>

          <div className="p-4 shadow-md bg-gray-200 hover:scale-105 transform transition duration-300 cursor-pointer">
            <img src="https://media.istockphoto.com/id/1338750217/photo/nurse-preparing-patient-to-do-a-blood-analysis.jpg?s=612x612&w=0&k=20&c=HhqYNGE4GhNVegUysfyWjce08QO_fS3t0lqeCnn54cM=" alt="Sickle Cell" className="w-50 mb-2" />
            <h2 className="text-xl font-semibold mb-2">Sickle Cell Patients</h2>
            <p className="text-gray-700">Ethnically matched blood is crucial for sickle cell patients who need regular transfusions.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="p-4 shadow-md bg-gray-200 hover:scale-105 transform transition duration-300 cursor-pointer">
            <img src="https://media.istockphoto.com/id/1338750217/photo/nurse-preparing-patient-to-do-a-blood-analysis.jpg?s=612x612&w=0&k=20&c=HhqYNGE4GhNVegUysfyWjce08QO_fS3t0lqeCnn54cM=" alt="Future" className="w-50 mb-2" />
            <h2 className="text-xl font-semibold mb-2">Future Generations</h2>
            <p className="text-gray-700">Encouraging young people to donate ensures a sustainable blood supply for the future.</p>
          </div>
          
          <div className="p-4  shadow-md bg-red-800">
              <img src="https://media.istockphoto.com/id/1338750217/photo/nurse-preparing-patient-to-do-a-blood-analysis.jpg?s=612x612&w=0&k=20&c=HhqYNGE4GhNVegUysfyWjce08QO_fS3t0lqeCnn54cM=" alt="Future" className="w-50 mb-2" />
              <h2 className="text-2xl font-semibold mb-2 text-white">Become a Blood Donor</h2>
              <p className="text-white pb-3">Encouraging young people to donate ensures a sustainable blood supply for the future.</p>
              <button className="border border-white text-white px-4 py-3  shadow-md hover:bg-white hover:text-black">Sign Up to Donate</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
