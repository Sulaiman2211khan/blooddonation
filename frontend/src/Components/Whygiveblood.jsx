import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Donate from './Donate';

export default function WhyGiveBlood() {
  const Thedonationprocess = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (index) => {
      setOpenIndex(index === openIndex ? null : index);
    };

    return (
      <>
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-6  p-4 border  shadow-lg shadow-cyan-500/100 mb-2">
            <h1 className="text-4xl font-semibold mb-4 ">Why Give Blood</h1>
            <p className="text-lg mb-8 p-3 space-y-1">
              Giving blood saves lives. <br />
              The blood you give is a lifeline in an emergency and for people who need long-term treatments.
              We need new blood donors from all backgrounds to ensure there is the right blood available for patients who need it.
            </p>
            <p className="text-xl font-semibold mb-2 pt-4 ">Benefits of Donating Blood:</p>
            <ul className="list-disc pl-4 mb-8 space-y-1">
              <li>Your blood donation can be a lifeline in emergencies, helping save lives in critical situations.</li>
              <li>Patients undergoing long-term treatments often rely on blood transfusions to manage their conditions.</li>
              <li>Ethnically matched blood is crucial for sickle cell patients who need regular transfusions.</li>
              <li>Encouraging young people to donate ensures a sustainable blood supply for the future.</li>
            </ul>
            <p className="text-xl font-semibold mb-2 pt-4">Why do we need you to give blood?</p>
            <ul className="list-disc pl-4 text-lg mb-8 space-y-1">
              <li>4,300 blood donations every day on average to meet the needs of our hospitals</li>
              <li>Over 140,000 people to donate blood for the first time this year</li>
              <li>12,000 new Black heritage donors, to meet the growing demand for ethnically matched blood for sickle cell patients who need regular transfusions to stay alive</li>
              <li>More young people aged 17-35 to donate, to ensure we have enough blood for the future</li>
            </ul>

            <div className="flex justify-center mb-8">
              <iframe
                width="800"
                height="400"
                src={`https://www.youtube.com/embed/ku0zMBVjjAs?autoplay=1&mute=1`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
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
                <a href="./donate">
                  <button
                    className="border border-white text-white px-4 py-2 shadow-md hover:bg-white hover:text-black"
                    href="./donate"
                  >
                    Donate Now
                  </button>
                </a>
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
                  <span className="flex text-lg font-semibold text-black">Who is eligible to donate blood?</span>
                  {openIndex === 0 ? <ChevronUp className="h-5 w-5 bg-blue-100" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </button>
                {openIndex === 0 && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-500">
                      Most healthy adults can donate blood. To be eligible, you must
                      Be at least 17 years old (16 with parental consent in some states)
                      Weigh at least 110 pounds
                      Be in good health and feel well on the day of donation
                      Not have donated blood within the last 56 days.

                    </p>
                  </div>
                )}
              </div>

              <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                  onClick={() => handleToggle(1)}
                >
                  <span className="flex text-lg font-semibold text-black">How often can I donate blood?</span>
                  {openIndex === 1 ? <ChevronUp className="h-5 w-5 bg-blue-100" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </button>
                {openIndex === 1 && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-500">
                      Whole blood donation: Every 56 days (about 8 weeks)
                      Platelet donation: Every 7 days, up to 24 times a year
                      Plasma donation: Every 28 days, up to 13 times a year
                      Double red cell donation: Every 112 days (about 16 weeks).
                    </p>
                  </div>
                )}
              </div>

              <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                  onClick={() => handleToggle(2)}
                >
                  <span className="flex text-lg font-semibold text-black">What should I do before and after donating blood?</span>
                  {openIndex === 2 ? <ChevronUp className="h-5 w-5 bg-blue-100" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </button>
                {openIndex === 2 && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-500">   Eat a healthy meal rich in iron before your donation
                      Stay hydrated by drinking plenty of fluids
                      Get a good night's sleep
                      Avoid alcohol and caffeine.</p>
                  </div>
                )}
              </div>

            </div>
            <p className="textbase mt-6 text-center text-gray-600">
              Can&apos;t find what you&apos;re looking for?{' '}
              <a href="/contact" title="" className="font-semibold text-black hover:underline">
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
