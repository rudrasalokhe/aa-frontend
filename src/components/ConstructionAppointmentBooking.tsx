import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Check, ChevronDown } from 'lucide-react';

const AppointmentPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedProperty, setSelectedProperty] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Sample property types
  const propertyTypes = [
    { id: '1', name: '1 BHK Apartment' },
    { id: '2', name: '2 BHK Apartment' },
    { id: '3', name: '3 BHK Apartment' },
    { id: '4', name: 'Luxury Penthouse' },
    { id: '5', name: 'Commercial Space' },
  ];

  // Sample available dates (next 7 days)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateString = date.toISOString().split('T')[0];
      dates.push(dateString);
    }
    
    return dates;
  };

  // Sample available time slots
  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setSelectedDate('');
    setSelectedTime('');
    setSelectedProperty('');
    setName('');
    setEmail('');
    setPhone('');
    setComment('');
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Book Your Site Visit</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule a personalized tour of our construction properties with our expert team members who will guide you through available options.
          </p>
        </div>

        {/* Booking Widget */}
        <div className="max-w-4xl mx-auto">
          {!isSubmitted ? (
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Left Column - Info */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 md:w-1/3">
                  <h3 className="text-xl font-bold mb-6">Appointment Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <Calendar size={20} className="flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Select Date</p>
                        <p className="text-blue-200 text-sm">Choose from available dates</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock size={20} className="flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Pick Time</p>
                        <p className="text-blue-200 text-sm">Morning and afternoon slots available</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <User size={20} className="flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Your Information</p>
                        <p className="text-blue-200 text-sm">We'll use this to contact you</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-6 border-t border-blue-500">
                    <p className="font-medium mb-2">Need Help?</p>
                    <p className="text-blue-200 text-sm mb-4">Contact our support team</p>
                    <div className="flex items-center space-x-2">
                      <Phone size={16} />
                      <span>+91 8104484332</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Form */}
                <div className="p-8 md:w-2/3">
                  <form onSubmit={handleSubmit}>
                    {/* Property Type Dropdown */}
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full inline-flex items-center justify-center mr-2">1</span>
                        Select Property Type
                      </h3>
                      <div className="relative">
                        <select
                          value={selectedProperty}
                          onChange={(e) => setSelectedProperty(e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 appearance-none bg-white"
                          required
                        >
                          <option value="" disabled>Select a property type</option>
                          {propertyTypes.map((property) => (
                            <option key={property.id} value={property.id}>
                              {property.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={20} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Date Dropdown */}
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full inline-flex items-center justify-center mr-2">2</span>
                        Select Date
                      </h3>
                      <div className="relative">
                        <select
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 appearance-none bg-white"
                          required
                        >
                          <option value="" disabled>Select a date</option>
                          {getAvailableDates().map((date) => (
                            <option key={date} value={date}>
                              {new Date(date).toLocaleDateString()}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={20} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Time Dropdown */}
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full inline-flex items-center justify-center mr-2">3</span>
                        Select Time
                      </h3>
                      <div className="relative">
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 appearance-none bg-white"
                          required
                        >
                          <option value="" disabled>Select a time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={20} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* User Information */}
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full inline-flex items-center justify-center mr-2">4</span>
                        Your Information
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <User size={20} className="text-gray-500" />
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
                            required
                          />
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail size={20} className="text-gray-500" />
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
                            required
                          />
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone size={20} className="text-gray-500" />
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
                            required
                          />
                        </div>
                        <div className="flex items-start space-x-3">
                          <MessageSquare size={20} className="text-gray-500 mt-2" />
                          <textarea
                            placeholder="Additional Comments"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                      >
                        Confirm Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-xl p-8 text-center">
              <Check size={48} className="text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointment Booked!</h2>
              <p className="text-gray-600 mb-6">
                Thank you, {name}. Your appointment has been successfully booked. We will contact you shortly.
              </p>
              <button
                onClick={resetForm}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
              >
                Book Another Appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;