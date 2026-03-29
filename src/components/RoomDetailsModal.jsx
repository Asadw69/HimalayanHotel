import React, { useState } from 'react';
import CustomDatePicker from './CustomDatePicker';

const RoomDetailsModal = ({ room, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: ''
  });

  if (!room) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    const text = `*New Room Enquiry - Himalayan Hotel*%0A%0A*Room:* ${room.title}%0A*Price:* ₹${room.price}/Night%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Check-in:* ${formData.date}`;
    window.open(`https://wa.me/918433265403?text=${text}`, '_blank');
  };


  return (
    <div className="fixed inset-0 z-[200] bg-background overflow-y-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
      {/* Back Navigation */}
      <div className="sticky top-0 z-[210] w-full glass-card border-b border-outline-variant/10 py-6">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button 
            onClick={onClose}
            className="group flex items-center gap-2 text-on-primary-container hover:text-primary transition-colors duration-300"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span className="font-label text-sm font-medium tracking-wide">Back to Rooms</span>
          </button>
          <span className="font-headline font-black text-xl tracking-tighter text-primary uppercase">HIMALAYAN HOTEL</span>
        </div>
      </div>

      {/* Room Hero & Identity */}
      <section className="relative max-w-[95%] mx-auto h-[70vh] min-h-[500px] overflow-hidden rounded-xl shadow-2xl">
        <img 
          src={room.bannerImage} 
          alt={room.title} 
          className="w-full h-full object-cover lg:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
        <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-auto md:w-2/5 glass-card p-6 md:p-10 rounded-xl">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1 bg-secondary-container/20 text-secondary font-label text-xs font-bold tracking-widest uppercase rounded-full">
              {room.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-headline font-black text-primary tracking-tighter leading-none">
              {room.title}
            </h1>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-headline font-bold text-primary">₹ {room.price}</span>
              <span className="text-on-primary-container font-body">/ Night</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed pb-4">
              {room.tagline}
            </p>
            <a 
              href={`https://wa.me/918433265403?text=Hi, I would like to book the ${room.title}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-5 bg-gradient-to-br from-primary to-primary-container text-white rounded-full font-headline font-extrabold tracking-tight hover:shadow-lg transition-all duration-500"
            >
              Book This Room
            </a>
          </div>
        </div>
      </section>

      {/* Room Overview */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-7">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-24 w-[1px] bg-primary-fixed-dim/30"></div>
            <span className="font-headline font-bold tracking-widest text-secondary uppercase text-xs">Room Overview</span>
          </div>
          <h2 className="text-4xl font-headline font-extrabold text-primary mb-8 leading-tight">
            Elevated sanctuary for the weary traveler.
          </h2>
          <div className="space-y-6 text-lg text-on-surface-variant font-body leading-relaxed max-w-2xl">
            <p>{room.overviewDescription}</p>
            <p className="font-semibold text-primary italic">
              "Experience the silence of the peaks with every modern comfort at your fingertips."
            </p>
          </div>
        </div>

        {/* Room Amenities Grid */}
        <div className="md:col-span-5 bg-surface-container-low p-8 md:p-12 rounded-xl border border-outline-variant/10">
          <h3 className="text-xl font-headline font-bold text-primary mb-10">Essential Comforts</h3>
          <div className="grid grid-cols-1 gap-8">
            {room.fullAmenities.map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-secondary-container transition-colors duration-500">
                  <span className="material-symbols-outlined text-secondary group-hover:text-white">
                    {amenity.icon}
                  </span>
                </div>
                <span className="font-label font-medium text-on-surface-variant">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Gallery */}
      <section className="py-24 bg-surface-container-low/30">
        <div className="max-w-7xl mx-auto px-8">
          {room.galleryImages.length === 1 ? (
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={room.galleryImages[0].src} 
                alt={room.galleryImages[0].alt} 
                className="w-full aspect-video object-cover hover:scale-[1.02] transition-transform duration-1000" 
              />
            </div>
          ) : room.galleryImages.length === 2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {room.galleryImages.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000" 
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              <div className="md:col-span-8 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={room.galleryImages[0]?.src} 
                  alt={room.galleryImages[0]?.alt} 
                  className="w-full h-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-1000" 
                />
              </div>
              <div className="md:col-span-4 flex flex-col gap-6">
                {room.galleryImages.slice(1, 3).map((img, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden shadow-lg flex-1">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Booking Form Integration */}
      <section className="max-w-7xl mx-auto px-8 py-24 relative z-10">
        <div className="bg-white rounded-[2rem] p-10 md:p-20 shadow-2xl border border-outline-variant/5 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-primary/5 text-primary font-label text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              Reservations
            </span>
            <h2 className="text-5xl md:text-6xl font-headline font-black text-primary tracking-tighter mb-8 leading-none">
              Begin Your <br/><span className="text-secondary">Ascent.</span>
            </h2>
            <p className="text-xl text-on-surface-variant font-body leading-relaxed mb-12 max-w-md">
              Submit your enquiry and our concierge will ensure your transition to the high peaks is seamless and restorative.
            </p>
            <div className="flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-2xl">call</span>
              </div>
              <div>
                <p className="text-xs font-label text-on-surface-variant font-bold uppercase tracking-widest mb-1">Direct Concierge</p>
                <a href="tel:8433265403" className="text-2xl font-headline font-black text-primary tracking-tight block hover:text-secondary transition-colors">+91 8433265403</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-outline-variant/10 shadow-xl">
            <form className="space-y-6" onSubmit={handleEnquiry}>
              <div className="space-y-2">
                <label className="block text-[10px] font-black tracking-[0.2em] text-primary/40 uppercase">Selected sanctuary</label>
                <div className="text-2xl font-headline font-black text-primary border-b border-primary/10 pb-4">
                  {room.title}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black tracking-[0.2em] text-primary/40 uppercase">Full Name</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors text-xl">person</span>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-100 focus:bg-white focus:border-secondary transition-all pl-12 pr-4 py-4 rounded-xl text-primary font-medium placeholder:text-slate-400 placeholder:font-light" 
                      placeholder="Full Name" 
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black tracking-[0.2em] text-primary/40 uppercase">Phone Number</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors text-xl">call</span>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-100 focus:bg-white focus:border-secondary transition-all pl-12 pr-4 py-4 rounded-xl text-primary font-medium placeholder:text-slate-400 placeholder:font-light" 
                      placeholder="+91 00000 00000" 
                      type="tel"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-full space-y-2">
                  <label className="block text-[10px] font-black tracking-[0.2em] text-primary/40 uppercase">Arrival Date</label>
                  <CustomDatePicker 
                    selectedDate={formData.date ? new Date(formData.date) : null}
                    onChange={(date) => setFormData(prev => ({ ...prev, date: date.toISOString().split('T')[0] }))}
                    placeholder="Date of arrival"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-xl font-headline font-black text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:bg-secondary transition-all duration-500 uppercase tracking-widest flex items-center justify-center gap-3"
              >
                Send Enquiry
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="footer-bg py-12 text-center border-t border-outline-variant/10">
        <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60">
          © 2026 HIMALAYAN HOTEL • Ethereal Summit Retreat
        </p>
      </footer>
    </div>
  );
};

export default RoomDetailsModal;
