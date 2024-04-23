import React, { useEffect } from 'react';
import '../App.css'; // Import Tailwind CSS from App.css

function Home() {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".main-navigation-wrap a");

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const clickedLink = this;
        navLinks.forEach(item => {
          item.classList.remove("underline");
          item.style.color = "white"; // Reset all links to white color
          item.style.backgroundColor = ""; // Reset background color
        });
        // Add floating underline and background to the clicked link
        clickedLink.classList.add("underline");
        clickedLink.style.color = "black"; // Set clicked link color to black
        clickedLink.style.backgroundColor = "white"; // Set background color to white
      });
    });

    // Add hover effect for each item
    navLinks.forEach(link => {
      link.addEventListener("mouseover", function () {
        this.style.backgroundColor = "white";
        this.style.color = "black";
      });
      link.addEventListener("mouseout", function () {
        if (!this.classList.contains("underline")) {
          this.style.backgroundColor = "";
          this.style.color = "white";
        }
      });
    });
  }, []); // Empty array means this effect runs only once after initial render

  return (
    <>
      <nav className="main-navigation main-navigation--red js-main-navigation bg-red-400">
        <div className="container main-navigation-wrap">
          <ul className="flex justify-between items-center py-5 lg:py-8 px-4 lg:px-7 lg:w-[60%]">
            <div className="flex items-center">
              <img
                src="https://t3.ftcdn.net/jpg/02/22/82/30/360_F_222823036_n9ocpis9ILjK6KuOMV4v7urh4dlHCvSq.jpg"
                alt="Logo"
                className="h-20 lg:h-15 mr-2"
                style={{  borderRadius: '50%',cursor:'pointer' }} 
              />
              {/* Navigation links */}
              <li>
                <a href="/" className="text-white last:p-2 text-lg lg:text-xl transition-colors duration-300 hover:text-black">Home</a>
              </li>
              <li>
                <a href="/who-can-give-blood/" className="text-white p-2 text-lg lg:text-xl transition-colors duration-300 hover:text-black">Who Can Give Blood</a>
              </li>
              <li>
                <a href="/why-give-blood/" className="text-white p-2 text-lg lg:text-xl transition-colors duration-300 hover:text-black">Why Give Blood</a>
              </li>
              <li>
                <a href="/the-donation-process/" className="text-white  p-2 text-lg lg:text-xl transition-colors duration-300 hover:text-black">The Donation Process</a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Home;
