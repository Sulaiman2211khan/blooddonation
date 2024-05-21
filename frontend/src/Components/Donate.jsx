import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const statesAndCities = {
  Punjab: ["Lahore", "Faisalabad", "Rawalpindi", "Gujranwala", "Multan"],
  Sindh: ["Karachi", "Hyderabad", "Sukkur", "Larkana", "Mirpur Khas"],
  KPK: ["Peshawar", "Mardan", "Mingora", "Abbottabad", "Kohat"],
  Balochistan: ["Quetta", "Khuzdar", "Turbat", "Chaman", "Gwadar"],
  Islamabad: ["Islamabad"],
};

const Donate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dob: '',
    bloodGroup: '',
    lastDonation: '',
    address: '',
    phoneNo: '',
    city: '',
    state: '',
    medicalIllness: '',
    donationDate: '', // Add donationDate field
  });


  const [cities, setCities] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [hospitalsData, setHospitalsData] = useState([]);


  const [hospitalRecommendation, setHospitalRecommendation] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  useEffect(() => {
    if (formData.state) {
      setCities(statesAndCities[formData.state] || []);
    } else {
      setCities([]);
    }
  }, [formData.state]);

  useEffect(() => {
    if (formData.city && formData.state) {
      const getHospitalRecommendation = (city, state) => {
        return `Recommended hospital in ${city}, ${state}.`;
      };
      const recommendation = getHospitalRecommendation(formData.city, formData.state);
      setHospitalRecommendation(recommendation);
    } else {
      setHospitalRecommendation('');
    }
  }, [formData.city, formData.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);

    // Fetch hospitals data based on the selected city
    const cityHospitals = hospitals[formData.city] || [];
    setHospitalsData(cityHospitals);
  };


  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10 mb-2">
        <h2 className="text-2xl font-bold mb-6 text-center">Donor Registration</h2>
        <p className="text-red-500 mb-4">All fields must be filled.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Blood Group:</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Blood Group</option>
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Last Time Blood Donated:</label>
            <select
              name="lastDonation"
              value={formData.lastDonation}
              onChange={handleChange}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Not donated ever</option>
              <option value="less_than_3_months">Less than 3 months ago</option>
              <option value="3_to_6_months">3 to 6 months ago</option>
              <option value="more_than_6_months">More than 6 months ago</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date of Blood Donation:</label>
            <input
              type="date"
              name="donationDate"
              value={formData.donationDate}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Medical Illness (If any):</label>
            <textarea
              name="medicalIllness"
              value={formData.medicalIllness}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">State:</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select State</option>
              {Object.keys(statesAndCities).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">City:</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          {hospitalRecommendation && (
            <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded">
              {hospitalRecommendation}
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>

        {submitted && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Hospitals in {formData.city}</h2>
            <MapContainer center={[formData.lat, formData.lon]} zoom={12} style={{ height: "400px", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {hospitalsData.map((hospital, index) => (
                <Marker key={index} position={[hospital.lat, hospital.lon]}>
                  <Popup>{hospital.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        )}

      </div>
    </>
  );
};

export default Donate;
