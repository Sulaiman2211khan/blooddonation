import React from 'react';

const BloodRequest = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10 mb-2">
      <h2 className="text-2xl font-bold mb-6 text-center">Blood Recipient</h2>
      <p className="text-red-500 mb-4">All fields must be filled.</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="full-name" className="block font-medium">Full Name:</label>
          <input type="text" id="full-name" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="date-of-birth" className="block font-medium">Date of Birth:</label>
          <input type="date" id="date-of-birth" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="age" className="block font-medium">Age:</label>
          <input type="number" id="age" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="gender" className="block font-medium">Gender:</label>
          <select id="gender" className="border border-gray-300 rounded-md px-3 py-2 w-full">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone-number" className="block font-medium">Phone Number:</label>
          <input type="tel" id="phone-number" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="email-address" className="block font-medium">Full Address:</label>
          <input type="email" id="email-address" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>

        <div>
          <label htmlFor="blood-type" className="block font-medium">Blood Type:</label>
          <select id="blood-type" className="border border-gray-300 rounded-md px-3 py-2 w-full">
            <option value="">Select Blood Type</option>
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
          <label htmlFor="critical-need" className="block font-medium">Critical Need:</label>
          <select id="critical-need" className="border border-gray-300 rounded-md px-3 py-2 w-full">
            <option value="" disabled hidden selected>Select Critical Need</option>
            <option value="urgent">Urgent</option>
            <option value="critical">Critical</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="hospitalized" className="block font-medium">Hospitalized:</label>
          <select id="hospitalized" className="border border-gray-300 rounded-md px-3 py-2 w-full">
            <option value="" disabled hidden selected>Select Hospitalization Status</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div>
  <label htmlFor="blood-packet" className="block font-medium">Blood Packet Quantity:</label>
  <input type="number" id="blood-packet" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
</div>

     
      
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BloodRequest;