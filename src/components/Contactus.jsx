import React, {useState} from "react";

const Contactus = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log(formData);
      };
    
  return (
    <div className="">
      <div>
        <h1 className="font-bold text-3xl p-4 mt-6 md:mt-14">
          Contact Royal Council UAE
        </h1>
      </div>
      <div className="block md:flex justify-between mt-2">
        <div className="w-full md:w-[60%]">
          <p className="font-semibold text-xl mt-6 my-10 p-2 leading-10 m-2">
            We welcome your inquiries and are here to assist you.

Whether you are seeking information about our initiatives, partnerships, or events, the Royal Council UAE is committed to providing timely and respectful responses to all communications.

<p>Get in Touch</p>

<p>📍 Head Office:</p>
<p>The Royal Council UAE</p>
<p>Abu Dhabi, United Arab Emirates</p>

<p>📞 Phone: +971 50 702 6602</p>
<p>📧 Email: info@royalcounciluae.com, ambassador@royalcounciluae.com</p>
<p>🌐 Website: www.royalcounciluae.com</p>

<p>Office Hours:</p>
<p>Sunday – Thursday | 9:00 AM – 5:00 PM </p>
<p>Closed on Fridays and Public Holidays</p>
<p>You can also reach us through our social media channels for the latest updates and announcements.</p>
          </p>
        </div>
        <div className="max-w-md mx-auto mt-4 p-4 w-full md:w-[40%]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-green-700 rounded-md shadow"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-green-700 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-green-700 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phonenumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-green-700 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-green-700 rounded-md shadow-sm"
              ></textarea>
            </div>
            <div>
              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
