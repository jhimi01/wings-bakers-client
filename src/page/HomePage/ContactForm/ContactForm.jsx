import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitting form:", { name, email, message });
      // Code to submit form goes here
    };
    return (
        <div className="bg-gray-900 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-xl text-gray-100">
              Fill out the form below to send us a message.
            </p>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                  Name
                </label>
                <div className="mt-1">
                  <input
                  style={{border: 'none', borderRadius: 0}}
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-0"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email
                </label>
                <div className="mt-1">
                  <input
                  style={{border: 'none',  borderRadius: 0}}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow-sm block w-full sm:text-sm border-gray-300 rounded-0"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow-sm block w-full sm:text-sm border-gray-300 rounded-0"
                  ></textarea>
                </div>
              </div>
              <button className='bg-white py-2 px-5 text-xl my-5 flex items-center text-gray-600'>Send</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ContactForm;