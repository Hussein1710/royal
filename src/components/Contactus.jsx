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
          Contact Horizon Tech Innovations
        </h1>
      </div>
      <div className="block md:flex justify-between mt-2">
        <div className="w-full md:w-[60%]">
          <p className="font-semibold text-xl mt-6 my-10 p-2 leading-10 m-2">
            Thank you for considering reaching out to us at Horizon Tech Innovations, your
            trusted source for software development insights. We are
            committed to excellence and sustainability, and we value your
            feedback and inquiries. After contacting us, you can expect a prompt
            and knowledgeable response from our experienced team. Together, let's work towards a
            greater future and sustainable tech solutions.
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
