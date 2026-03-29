import { useState } from 'react';
import CustomDatePicker from './CustomDatePicker';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: 'Double Bed Room',
    date: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    const text = `*New Enquiry - Himalayan Hotel*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Room:* ${formData.roomType}%0A*Check-in:* ${formData.date}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918433265403?text=${text}`, '_blank');
  };

  return (
    <div id="contact">
      {/* Enquiry Form Section */}
      <section className="py-32 bg-[#f7f9fb]">
        <div className="px-8 max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden grid lg:grid-cols-2 shadow-2xl">
            <div className="p-12 bg-primary text-white flex flex-col justify-center">
              <h2 className="font-headline text-4xl font-extrabold mb-6">Plan Your Himalayan Journey</h2>
              <p className="text-blue-100/70 font-light mb-12 text-lg">
                Fill in the details below, and our team will get back to you with the best available options for your stay.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary-container">verified_user</span>
                  <span className="text-sm font-medium">Safe & Secure Booking</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary-container">support_agent</span>
                  <span className="text-sm font-medium">24/7 Dedicated Support</span>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 bg-white">
              <form className="grid md:grid-cols-2 gap-6" onSubmit={handleEnquiry}>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#828da7]">Full Name</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors text-xl">person</span>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-100 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all pl-12 pr-4 py-4 rounded-xl text-primary font-medium placeholder:text-slate-400 placeholder:font-light"
                      placeholder="Full Name" 
                      type="text" 
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#828da7]">Phone Number</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors text-xl">call</span>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-100 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all pl-12 pr-4 py-4 rounded-xl text-primary font-medium placeholder:text-slate-400 placeholder:font-light"
                      placeholder="+91 00000 00000" 
                      type="tel" 
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#828da7]">Room Type</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors text-xl">bed</span>
                    <select 
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-100 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all pl-12 pr-4 py-4 rounded-xl text-primary font-medium appearance-none"
                    >
                      <option>Double Bed Room</option>
                      <option>Triple Bed Room</option>
                      <option>4 Bed Family Room</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#828da7]">Check-in Date</label>
                  <CustomDatePicker 
                    selectedDate={formData.date ? new Date(formData.date) : null}
                    onChange={(date) => setFormData(prev => ({ ...prev, date: date.toISOString().split('T')[0] }))}
                    placeholder="Select Date"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#828da7]">Your Message</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-6 text-slate-400 group-focus-within:text-secondary transition-colors text-xl">notes</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-100 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all pl-12 pr-4 py-4 rounded-xl text-primary font-medium resize-none placeholder:text-slate-400 placeholder:font-light"
                      placeholder="Any special requirements?" 
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button type="submit" className="w-full bg-primary text-white py-5 rounded-xl font-headline font-black text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:bg-secondary transition-all duration-500 uppercase tracking-widest flex items-center justify-center gap-3">
                    Submit Enquiry
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cluster Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-headline text-4xl font-extrabold text-primary mb-12 tracking-tight">Connect With Us</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="tel:8433265403"
            className="flex items-center gap-4 glass-card px-10 py-5 rounded-full hover:bg-primary hover:text-white transition-all duration-500 group"
          >
            <span className="material-symbols-outlined text-secondary group-hover:text-white">phone_in_talk</span>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-tighter opacity-70 text-inherit">Call Now</span>
              <span className="font-headline font-bold text-lg text-inherit">8433265403</span>
            </div>
          </a>
          <a 
            href="https://wa.me/918433265403"
            className="flex items-center gap-4 glass-card px-10 py-5 rounded-full hover:bg-green-600 hover:text-white transition-all duration-500 group"
          >
            <span className="material-symbols-outlined text-green-500 group-hover:text-white">chat</span>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-tighter opacity-70 text-inherit">WhatsApp</span>
              <span className="font-headline font-bold text-lg text-inherit">84332 65403</span>
            </div>
          </a>
          <a 
            href="https://www.instagram.com/himalayan_hotel_/" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 glass-card px-10 py-5 rounded-full hover:bg-gradient-to-tr hover:from-purple-600 hover:to-orange-500 hover:text-white transition-all duration-500 group"
          >
            <span className="material-symbols-outlined text-pink-500 group-hover:text-white">photo_camera</span>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-tighter opacity-70 text-inherit">Follow Us</span>
              <span className="font-headline font-bold text-lg text-inherit">@himalayan_hotel_</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
