import React from 'react';
import '../App.css';

function Donor() {
    return (
        <>
            <div className="w-[100%] h-screen overflow-hidden   relative">
                {/* Set the image to cover the entire container */}
                <img
                    src="https://wallpapercave.com/wp/wp4323461.png"
                    className="absolute top-0 left-0 w-full  h-full object-cover object-right sm:object-cover lg:w-100 lg:h-100"
                    alt=""
                />
                <div className="relative md:bottom-7 md:left-10 z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
                    <div className="col-span-12 lg:col-span-6 text-center lg:text-left"> {/* Center text for small screens and align left for large screens */}
                        <span className="uppercase text-white text-xs font-bold mb-2 block">WE ARE HERE FOR YOU</span>
                        <h1 className="text-white font-extrabold text-5xl mb-8">Donate Blood, Save Lives</h1>
                        <p className="text-stone-100 text-base">
                            Your blood donation can help patients in need and make a significant impact on their lives. Join us today.
                        </p>
                        <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">Sign Up Now</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-[80%]  md:max-w-screen-lg mx-auto mt-8">
                {/* Explore being a donor */}
                 <div className="bg-gray-100 p-4 rounded-lg col-span-3 md:col-span-1 mb-10 flex  flex-col transition duration-300 ease-in-out transform hover:bg-gray-300 hover:text-black cursor-pointer">
                    <img src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/16909/blood-donor_wedc.jpg?anchor=center&mode=crop&width=600&height=255&rnd=132121518250000000&quality=70" alt="" className="h-40 w-full object-cover rounded-lg mb-3" />
                    <h2 className="text-xl font-bold mt-2 mb-3">Contact us</h2>
                    <p>If you've got a question, get in touch. You can do this here online or by calling 0300 123 23 23.</p>
                </div>

                {/* Who can give blood? */}
                <div className="bg-gray-100 p-4 rounded-lg col-span-3 md:col-span-1 mb-10 flex  flex-col transition duration-300 ease-in-out transform hover:bg-gray-300 hover:text-black cursor-pointer">
                    <img src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/16909/blood-donor_wedc.jpg?anchor=center&mode=crop&width=600&height=255&rnd=132121518250000000&quality=70" alt="" className="h-40 w-full object-cover rounded-lg mb-3" />
                    <h2 className="text-xl font-bold mt-2 mb-3">Contact us</h2>
                    <p>If you've got a question, get in touch. You can do this here online or by calling 0300 123 23 23.</p>
                </div>

                {/* Get the NHS Give Blood app */}
                <div className="bg-gray-100 p-4 rounded-lg col-span-3 md:col-span-1 mb-10 flex  flex-col transition duration-300 ease-in-out transform hover:bg-gray-300 hover:text-black cursor-pointer">
                    <img src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/16909/blood-donor_wedc.jpg?anchor=center&mode=crop&width=600&height=255&rnd=132121518250000000&quality=70" alt="" className="h-40 w-full object-cover rounded-lg mb-3" />
                    <h2 className="text-xl font-bold mt-2 mb-3">Contact us</h2>
                    <p>If you've got a question, get in touch. You can do this here online or by calling 0300 123 23 23.</p>
                </div>

                {/* Contact us */}
                <div className="bg-gray-100 p-4 rounded-lg col-span-3 md:col-span-1 mb-10 flex  flex-col transition duration-300 ease-in-out transform hover:bg-gray-300 hover:text-black cursor-pointer">
                    <img src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/16909/blood-donor_wedc.jpg?anchor=center&mode=crop&width=600&height=255&rnd=132121518250000000&quality=70" alt="" className="h-40 w-full object-cover rounded-lg mb-3" />
                    <h2 className="text-xl font-bold mt-2 mb-3">Contact us</h2>
                    <p>If you've got a question, get in touch. You can do this here online or by calling 0300 123 23 23.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg col-span-3 md:col-span-1 mb-10 flex  flex-col transition duration-300 ease-in-out transform hover:bg-gray-300 hover:text-black cursor-pointer">
                    <img src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/16909/blood-donor_wedc.jpg?anchor=center&mode=crop&width=600&height=255&rnd=132121518250000000&quality=70" alt="" className="h-40 w-full object-cover rounded-lg mb-3" />
                    <h2 className="text-xl font-bold mt-2 mb-3">Contact us</h2>
                    <p>If you've got a question, get in touch. You can do this here online or by calling 0300 123 23 23.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg col-span-3 md:col-span-1 mb-10 flex  flex-col transition duration-300 ease-in-out transform hover:bg-gray-300 hover:text-black cursor-pointer">
                    <img src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/16909/blood-donor_wedc.jpg?anchor=center&mode=crop&width=600&height=255&rnd=132121518250000000&quality=70" alt="" className="h-40 w-full object-cover rounded-lg mb-3" />
                    <h2 className="text-xl font-bold mt-2 mb-3">Contact us</h2>
                    <p>If you've got a question, get in touch. You can do this here online or by calling 0300 123 23 23.</p>
                </div>
            </div>
        </>
    );
}

export default Donor;
