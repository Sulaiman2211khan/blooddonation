import React from 'react';

const BloodRequest = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-10 mb-2 shadow-lg shadow-cyan-500/100">
      <h2 className="text-2xl font-bold mb-6 text-center">Blood Recipient</h2>
      <p className="text-green-600 mb-4">All fields must be filled.</p>
      <form className="space-y-4">

        <div>
          <label htmlFor="date-of-birth" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
          <input type="date" id="date-of-birth" required className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>

        <div>
          <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
          <select id="gender" required className="border border-gray-300 rounded-md px-3 py-2 w-full">
            <option selected hidden disabled value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone-number" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
          <input type="tel" id="phone-number" placeholder='Enter Your Phone/Contact Nu' required className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="email-address" className="block text-gray-700 text-sm font-bold mb-2">Full Address:</label>
          <input type="email" id="email-address" required placeholder="Enter Your Full Address" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="blood-type" className="block text-gray-700 text-sm font-bold mb-2">Blood Type:</label>
          <select id="blood-type" required className="border border-gray-300 rounded-md px-3 py-2 w-full">
            <option disabled hidden selected value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div>
          <label htmlFor="blood-packet" className="block text-gray-700 text-sm font-bold mb-2">Blood Packet Quantity:</label>
          <input type="number" id="blood-packet" required placeholder='Enter Blood Packet Quanity' className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="critical-need" className="block text-gray-700 text-sm font-bold mb-2">Select Your Blood Need:</label>
          <select id="critical-need" required className="border border-gray-300 rounded-md px-3 py-2 w-full">
            <option value="" disabled hidden selected>Select Blood Need</option>
            <option value="critical">Critical</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Date of Blood Request:</label>
          <input
            type="date"
            name=""
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>


        <div>
          <label htmlFor="request-duration-time" className="block text-gray-700 text-sm font-bold mb-2block text-gray-700 text-sm font-bold mb-2">Request Duration (Time):</label>
          <input type="time" id="request-duration-time" required className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="hospitalized" className="block text-gray-700 text-sm font-bold mb-2">Hospitalized:</label>
          <select id="hospitalized" required className="border border-gray-300 rounded-md px-3 py-2 w-full">
            <option value="" disabled hidden selected>Select Hospitalization Status</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div>
          <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BloodRequest;
