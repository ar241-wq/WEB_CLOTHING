import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#f5f5dc] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] rounded-lg flex items-center justify-center text-gray-600 mb-4">
                Email
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Our team typically responds within 24 hours</p>
              <a href="mailto:support@elegance.com" className="text-[#8b7355] font-medium hover:underline">
                support@elegance.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] rounded-lg flex items-center justify-center text-gray-600 mb-4">
                Phone
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Mon-Fri from 9am to 6pm EST</p>
              <a href="tel:+1234567890" className="text-[#8b7355] font-medium hover:underline">
                +1 (234) 567-890
              </a>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] rounded-lg flex items-center justify-center text-gray-600 mb-4">
                Location
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Fashion Avenue<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] rounded-lg flex items-center justify-center text-gray-600 mb-4">
                Hours
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Business Hours</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="return">Returns & Exchanges</option>
                    <option value="product">Product Information</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b7355] resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 px-8 font-medium hover:bg-[#8b7355] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">What is your return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for all unused items in their original packaging.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">How long does shipping take?</h3>
              <p className="text-gray-600">
                Standard shipping typically takes 5-7 business days. Express shipping is available for faster delivery.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Do you ship internationally?</h3>
              <p className="text-gray-600">
                Yes, we ship to over 50 countries worldwide. Shipping costs vary by location.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">How can I track my order?</h3>
              <p className="text-gray-600">
                Once your order ships, you'll receive a tracking number via email to monitor your delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;