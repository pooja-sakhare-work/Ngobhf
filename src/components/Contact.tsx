import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Users, Handshake, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const opportunities = [
    'Research and planning support',
    'Community outreach',
    'Program design assistance',
    'Awareness and advocacy'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-600 mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Get Involved
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Join as a Volunteer */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-4 font-semibold">
              Join as a Volunteer
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We invite individuals who are passionate about sustainable development to join us in shaping and supporting our upcoming initiatives.
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg text-gray-900 mb-4 font-semibold">Opportunities</h4>
              <ul className="space-y-3">
                {opportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Partner With Us */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-4 font-semibold">
              Partner With Us
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We welcome collaborations with institutions, CSR partners, and development organizations to co-create impactful and scalable solutions.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl text-gray-900 mb-6 text-center font-semibold">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select a subject</option>
                  <option value="volunteer">Become a Volunteer</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
