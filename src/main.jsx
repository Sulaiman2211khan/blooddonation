import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Components/HomePage.jsx"
import About from "./Components/About.jsx"
import Contact from "./Components/Contact.jsx"
import Location from "./Components/Location.jsx"
import Login from "./Components/Login.jsx"
import AdminPage from "./Components/AdminPage.jsx"
import Whygiveblood from './Components/Whygiveblood.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='' element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="whygiveblood" element={<Whygiveblood />} />
          <Route path="contact" element={<Contact />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
