import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  CreditCard,
  Wallet,
  Plus,
  Minus,
  Shield,
  Star,
  ChevronRight
} from 'lucide-react';

interface BookingModalProps {
  service: any;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ 
  service, 
  isOpen,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    address: '',
    professional: null,
    paymentMethod: 'wallet',
    specialInstructions: '',
    frequency: 'once'
  });

  const [promoCode, setPromoCode] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const mockProfessionals = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      rating: 4.9,
      reviews: 245,
      image: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?w=100',
      price: 299,
      availability: 'Available Today',
      badges: ['KYC Verified', 'Insurance Covered']
    },
    {
      id: 2,
      name: 'Mohammed Ali',
      rating: 4.8,
      reviews: 189,
      image: 'https://images.pexels.com/photos/5691636/pexels-photo-5691636.jpeg?w=100',
      price: 349,
      availability: 'Available Tomorrow',
      badges: ['Top Rated', 'Eco Certified']
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const paymentMethods = [
    { id: 'wallet', name: 'Rozkaam Wallet', icon: Wallet, balance: '₹2,450' },
    { id: 'upi', name: 'UPI Payment', icon: CreditCard },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'cash', name: 'Cash on Service', icon: CreditCard }
  ];

  const handleNext = () => {
    if (!isLoggedIn && currentStep === 1) {
      setIsLoggedIn(true);
      return;
    }
    setCurrentStep(Math.min(4, currentStep + 1));
  };

  const handleBack = () => {
    setCurrentStep(Math.max(1, currentStep - 1));
  };

  const handleBooking = () => {
    // Simulate booking process
    alert('Booking confirmed! You will receive a confirmation message shortly.');
    onClose();
  };

  const calculatePrice = () => {
    const basePrice = bookingData.professional?.price || 299;
    const discount = promoCode === 'FIRST20' ? basePrice * 0.2 : 0;
    const finalPrice = basePrice - discount;
    return { basePrice, discount, finalPrice };
  };

  if (!isOpen) return null;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Select Date & Time</h3>
            
            {/* Calendar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose Date
              </label>
              <input
                type="date"
                value={bookingData.date}
                onChange={(e) => setBookingData(prev => ({ ...prev, date: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Time Slots
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setBookingData(prev => ({ ...prev, time }))}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      bookingData.time === time
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Emergency SOS */}
            {service?.type === 'sos' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-red-600 mr-2" />
                  <span className="font-medium text-red-800">Emergency SOS Service</span>
                </div>
                <p className="text-sm text-red-700">
                  Our professional will reach you within 30 minutes. Additional charges may apply.
                </p>
              </div>
            )}

            {/* Recurring Options */}
            <div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">Set up recurring service</span>
              </label>
              
              {isRecurring && (
                <div className="mt-3 pl-8">
                  <select 
                    value={bookingData.frequency}
                    onChange={(e) => setBookingData(prev => ({ ...prev, frequency: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Choose Professional</h3>
            
            <div className="space-y-4">
              {mockProfessionals.map((professional) => (
                <div
                  key={professional.id}
                  onClick={() => setBookingData(prev => ({ ...prev, professional }))}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    bookingData.professional?.id === professional.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{professional.name}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{professional.rating} ({professional.reviews} reviews)</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {professional.badges.map((badge, index) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">₹{professional.price}</div>
                      <div className="text-sm text-green-600">{professional.availability}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                💡 <strong>AI Recommendation:</strong> Based on your location and service type, 
                we recommend Rajesh Kumar for the best experience.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Service Details</h3>
            
            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Address
              </label>
              <textarea
                value={bookingData.address}
                onChange={(e) => setBookingData(prev => ({ ...prev, address: e.target.value }))}
                placeholder="Enter your complete address with landmarks..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Instructions (Optional)
              </label>
              <textarea
                value={bookingData.specialInstructions}
                onChange={(e) => setBookingData(prev => ({ ...prev, specialInstructions: e.target.value }))}
                placeholder="Any specific requirements or instructions..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>

            {/* Service Summary */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">Service Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-medium">{service?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Professional:</span>
                  <span className="font-medium">{bookingData.professional?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date & Time:</span>
                  <span className="font-medium">{bookingData.date} at {bookingData.time}</span>
                </div>
                {isRecurring && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="font-medium capitalize">{bookingData.frequency}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 4:
        const { basePrice, discount, finalPrice } = calculatePrice();
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Payment & Confirmation</h3>
            
            {/* Price Breakdown */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">Price Breakdown</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Charge:</span>
                  <span>₹{basePrice}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (FIRST20):</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="border-t pt-2 flex justify-between font-medium">
                  <span>Total Amount:</span>
                  <span>₹{finalPrice}</span>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Apply
                </button>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                      bookingData.paymentMethod === method.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={bookingData.paymentMethod === method.id}
                      onChange={(e) => setBookingData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                      className="mr-3"
                    />
                    <method.icon className="w-5 h-5 mr-3 text-gray-600" />
                    <span className="font-medium">{method.name}</span>
                    {method.balance && (
                      <span className="ml-auto text-sm text-gray-600">{method.balance}</span>
                    )}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book Service</h2>
            <p className="text-gray-600">{service?.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Step {currentStep} of 4</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {renderStep()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="px-6 py-2 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:text-blue-600 transition-colors"
          >
            Back
          </button>
          
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={currentStep === 4 ? handleBooking : handleNext}
              disabled={!isLoggedIn && currentStep > 1}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              {currentStep === 4 ? 'Confirm Booking' : 'Next'}
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;