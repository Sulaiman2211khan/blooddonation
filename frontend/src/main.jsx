import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Components/HomePage.jsx"
import About from "./Components/About.jsx"
import Contact from "./Components/Contact.jsx"
import Donate from "./Components/Donate.jsx"
import AdminPage from "./Components/AdminPage.jsx"
import Whygiveblood from './Components/Whygiveblood.jsx';
import Login from "./Components/Login.jsx"
import Signup from './Components/Signup.jsx'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='' element={<HomePage />} />
          <Route path="whygiveblood" element={<Whygiveblood />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
        </Route>
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
