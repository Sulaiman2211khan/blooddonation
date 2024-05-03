import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function WhyGiveBlood() {
  const Thedonationprocess = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (index) => {
      setOpenIndex(index === openIndex ? null : index);
    };

    return (
      <>
        <div className="min-h-screen border border-black  ">
          <div className="max-w-7xl mx-auto px-4 shadow-lg shadow-cyan-500/100 p-4 border border-black">
            <h1 className="text-4xl font-semibold mb-4 ">Why Give Blood</h1>
            <p className="text-lg mb-8 p-3">
              Giving blood saves lives. <br />
              The blood you give is a lifeline in an emergency and for people who need long-term treatments.
              We need new blood donors from all backgrounds to ensure there is the right blood available for patients who need it.
            </p>
            <p className="text-xl font-semibold mb-2 pt-4">Benefits of Donating Blood:</p>
            <ul className="list-disc pl-4 mb-8">
              <li>Your blood donation can be a lifeline in emergencies, helping save lives in critical situations.</li>
              <li>Patients undergoing long-term treatments often rely on blood transfusions to manage their conditions.</li>
              <li>Ethnically matched blood is crucial for sickle cell patients who need regular transfusions.</li>
              <li>Encouraging young people to donate ensures a sustainable blood supply for the future.</li>
            </ul>
            <p className="text-xl font-semibold mb-2 pt-4">Why do we need you to give blood?</p>
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
              <div className="p-4 shadow-md bg-red-800">
                <img src="https://media.istockphoto.com/id/1338750217/photo/nurse-preparing-patient-to-do-a-blood-analysis.jpg?s=612x612&w=0&k=20&c=HhqYNGE4GhNVegUysfyWjce08QO_fS3t0lqeCnn54cM=" alt="Future" className="w-50 mb-2" />
                <h2 className="text-2xl font-semibold mb-2 text-white">Become a Blood Donor</h2>
                <p className="text-white pb-3">Encouraging young people to donate ensures a sustainable blood supply for the future.</p>
                <button className="border border-white text-white px-4 py-2 shadow-md hover:bg-white hover:text-black">Sign Up to Donate</button>
              </div>
            </div>
          </div>

          {/* FAQs Section*/}
          
            <div className=" max-w-7xl mx-auto lg:text-center mt-10 p-5">
              <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
              </p>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
              <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg ">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                  onClick={() => handleToggle(0)}
                >
                  <span className="flex text-lg font-semibold text-black">How do I get started?</span>
                  {openIndex === 0 ? <ChevronUp className="h-5 w-5 bg-blue-100" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </button>
                {openIndex === 0 && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-500">
                    To get started with blood donation, you can visit your local blood donation center or blood drive. They will guide you through the process and provide you with all the necessary information.

                    </p>
                  </div>
                )}
              </div>
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i + 1}
                  className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
                >
                  <button
                    type="button"
                    className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                    onClick={() => handleToggle(i + 1)}
                  >
                    <span className="flex text-start text-lg font-semibold text-black">
                      What is the difference between a free and paid account?
                    </span>
                    {openIndex === i + 1 ? <ChevronUp className="h-5 w-5 bg-blue-100 md:block" /> : <ChevronDown className="h-5 w-5 text-gray-500 md:block" />}
                  </button>
                  {openIndex === i + 1 && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                      <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                        iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="textbase mt-6 text-center text-gray-600">
              Can&apos;t find what you&apos;re looking for?{' '}
              <a href="#" title="" className="font-semibold text-black hover:underline">
                Contact our support
              </a>
            </p>
          </div>
          </div>

      </>
    );
  };

  return <Thedonationprocess />;
}
