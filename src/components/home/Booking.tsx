import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Scissors } from 'lucide-react';

const services = [
  { id: 'haircut', name: 'Classic Haircut', duration: 30 },
  { id: 'haircut-beard', name: 'Haircut & Beard Trim', duration: 45 },
  { id: 'shave', name: 'Traditional Shave', duration: 30 },
  { id: 'styling', name: 'Haircut & Styling', duration: 45 },
  { id: 'facial', name: 'Facial Treatment', duration: 30 },
  { id: 'color', name: 'Hair Coloring', duration: 60 }
];

const barbers = [
  { id: 'james', name: 'James Wilson' },
  { id: 'robert', name: 'Robert Miller' },
  { id: 'michael', name: 'Michael Thompson' },
  { id: 'david', name: 'David Garcia' },
  { id: 'john', name: 'John Martinez' },
  { id: 'richard', name: 'Richard Johnson' }
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
];

const Booking = () => {
  const [formData, setFormData] = useState({
    service: '',
    barber: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setFormStep(prev => prev + 1);
  };

  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
  setIsSubmitting(true);

  try {
    const response = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ service: "", barber: "", date: "", time: "", name: "", email: "", phone: "" });
      setCurrentStep(1);
    } else {
      const data = await response.json();
      setIsSubmitting(false);
      alert("Error: " + data.error);
    }
  } catch (error) {
    console.error("Submission failed:", error);
    setIsSubmitting(false);
    alert("Something went wrong. Please try again.");
  }
};


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSubmitted(true);
  //   }, 1500);
  // };

  return (
    <section id="book-now" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule your next grooming session with us. Choose your preferred service, barber, and time slot.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Booking Confirmed!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for booking with Elite Cuts. We've sent a confirmation email to <strong>{formData.email}</strong> with all the details.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-4">Appointment Details:</h4>
                <p><strong>Service:</strong> {services.find(s => s.id === formData.service)?.name}</p>
                <p><strong>Barber:</strong> {barbers.find(b => b.id === formData.barber)?.name}</p>
                <p><strong>Date:</strong> {formData.date}</p>
                <p><strong>Time:</strong> {formData.time}</p>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormStep(1);
                  setFormData({
                    service: '',
                    barber: '',
                    date: '',
                    time: '',
                    name: '',
                    email: '',
                    phone: '',
                    notes: ''
                  });
                }}
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg">
              {/* Progress Indicator */}
              <div className="border-b p-6">
                <div className="flex items-center justify-between">
                  <div className={`flex items-center ${formStep >= 1 ? 'text-amber-500' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      1
                    </div>
                    <span className="ml-2 font-medium hidden sm:inline">Service</span>
                  </div>
                  <div className="flex-1 h-1 mx-4 bg-gray-200">
                    <div className={`h-full bg-amber-500 transition-all ${formStep >= 2 ? 'w-full' : 'w-0'}`}></div>
                  </div>
                  <div className={`flex items-center ${formStep >= 2 ? 'text-amber-500' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      2
                    </div>
                    <span className="ml-2 font-medium hidden sm:inline">Date & Time</span>
                  </div>
                  <div className="flex-1 h-1 mx-4 bg-gray-200">
                    <div className={`h-full bg-amber-500 transition-all ${formStep >= 3 ? 'w-full' : 'w-0'}`}></div>
                  </div>
                  <div className={`flex items-center ${formStep >= 3 ? 'text-amber-500' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 3 ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      3
                    </div>
                    <span className="ml-2 font-medium hidden sm:inline">Details</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6">
                {/* Step 1: Service Selection */}
                {formStep === 1 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <Scissors className="w-5 h-5 mr-2 text-amber-500" />
                      Select Service & Barber
                    </h3>

                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">Choose a Service</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map(service => (
                          <div 
                            key={service.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              formData.service === service.id 
                                ? 'border-amber-500 bg-amber-50' 
                                : 'border-gray-200 hover:border-amber-300'
                            }`}
                            onClick={() => setFormData(prev => ({ ...prev, service: service.id }))}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-medium">{service.name}</h4>
                                <p className="text-gray-500 text-sm">{service.duration} min</p>
                              </div>
                              {formData.service === service.id && (
                                <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">Choose a Barber</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {barbers.map(barber => (
                          <div 
                            key={barber.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              formData.barber === barber.id 
                                ? 'border-amber-500 bg-amber-50' 
                                : 'border-gray-200 hover:border-amber-300'
                            }`}
                            onClick={() => setFormData(prev => ({ ...prev, barber: barber.id }))}
                          >
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">{barber.name}</h4>
                              {formData.barber === barber.id && (
                                <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!formData.service || !formData.barber}
                        className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time Selection */}
                {formStep === 2 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-amber-500" />
                      Select Date & Time
                    </h3>

                    <div className="mb-6">
                      <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Select Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">Select Time</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <div 
                            key={time}
                            className={`border rounded-md p-2 text-center cursor-pointer transition-all ${
                              formData.time === time 
                                ? 'border-amber-500 bg-amber-50 text-amber-700' 
                                : 'border-gray-200 hover:border-amber-300'
                            }`}
                            onClick={() => setFormData(prev => ({ ...prev, time }))}
                          >
                            <div className="flex items-center justify-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!formData.date || !formData.time}
                        className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Personal Details */}
                {formStep === 3 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <User className="w-5 h-5 mr-2 text-amber-500" />
                      Personal Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any special requests or notes for your barber..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                      ></textarea>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
                      <h4 className="font-semibold text-amber-800 mb-2">Appointment Summary</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex">
                          <span className="font-medium w-24">Service:</span>
                          <span>{services.find(s => s.id === formData.service)?.name}</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium w-24">Barber:</span>
                          <span>{barbers.find(b => b.id === formData.barber)?.name}</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium w-24">Date:</span>
                          <span>{formData.date}</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium w-24">Time:</span>
                          <span>{formData.time}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                        className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          'Confirm Booking'
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;