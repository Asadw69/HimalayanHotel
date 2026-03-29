const Facilities = () => {
  const facilities = [
    { icon: "wifi", title: "Free WiFi" },
    { icon: "water_drop", title: "24x7 Water" },
    { icon: "local_parking", title: "Ample Parking" },
    { icon: "cleaning_services", title: "Clean Rooms" },
    { icon: "videocam", title: "CCTV 24/7" },
    { icon: "fire_extinguisher", title: "Fire Safety" },
    { icon: "family_restroom", title: "Family Friendly" },
    { icon: "water_heater", title: "Hot Geyser" },
  ];

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto" id="facilities">
      <div className="flex flex-col md:flex-row gap-20 items-center">
        <div className="md:w-1/3">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Essential Comforts for Your Journey
          </h2>
          <p className="text-[#45474d] font-light leading-relaxed mb-8">
            We have designed our facilities to meet every traveler's need, ensuring a seamless experience on your way to Kedarnath.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-xl flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all"
            >
              <span className="material-symbols-outlined text-4xl text-secondary">{fac.icon}</span>
              <span className="font-headline font-bold text-primary text-sm">{fac.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
