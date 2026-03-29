import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Facilities from './components/Facilities';
import Location from './components/Location';
import Contact from './components/Contact';
import Security from './components/Security';
import Footer from './components/Footer';
import RoomDetailsModal from './components/RoomDetailsModal';

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => { e.key === 'Escape' && setSelectedRoom(null) };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedRoom ? 'hidden' : 'auto';
  }, [selectedRoom]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms onSelectRoom={setSelectedRoom} />
        <Facilities />
        <Gallery />
        <Location />
        <Security />
        <Contact />
      </main>
      <Footer />

      {/* Room Details Overlay */}
      {selectedRoom && (
        <RoomDetailsModal 
          room={selectedRoom} 
          onClose={() => setSelectedRoom(null)} 
        />
      )}
      
      {/* WhatsApp FAB */}
      <a 
        href="https://wa.me/918433265403"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 hover:rotate-12 transition-all duration-500 active:scale-90"
        target="_blank"
        rel="noreferrer"
      >
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          chat
        </span>
      </a>
    </div>
  )
}

export default App
