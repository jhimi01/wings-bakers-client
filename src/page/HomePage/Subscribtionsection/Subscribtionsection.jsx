import React, { useState } from 'react';
import './Subscribtion.css'

const Subscribtionsection = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitting email:", email);
      // Code to submit email goes here
    };
  

    return (
        <div className="subscribtion py-8 mt-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-300 sm:text-4xl">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-xl text-white">
              Get updates on new products, sales, and special offers.
            </p>
            <form className="mt-8 sm:flex" onSubmit={handleSubmit}>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
    <button className='bg-gray-900 py-2 px-5 text-xl flex items-center text-white'>Subscribe</button>
                {/* bg-white py-2 px-5 text-xl flex items-center text-gray-600 */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Subscribtionsection;