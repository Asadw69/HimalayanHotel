const Security = () => {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto" id="security">
      <div className="glass-card overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Visual Side */}
          <div className="lg:w-1/2 relative group">
            <img
              src="https://i.postimg.cc/Hk50zp65/Whats_App_Image_2026_03_29_at_1_10_58_PM_(2).jpg"
              alt="Security Feed"
              className="w-full h-[400px] lg:h-[500px] object-cover filter brightness-75 contrast-125"
            />
            {/* CCTV Overlay UI */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-8">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-white font-headline font-bold text-xs uppercase tracking-widest">CAM-01 LIVE</span>
                </div>
                <div className="text-white/70 font-mono text-xs text-right">
                  {new Date().toLocaleDateString()}<br />
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
              <div>
                <h3 className="text-white font-headline text-2xl font-bold mb-2">24/7 Monitoring</h3>
                <p className="text-white/70 font-light text-sm max-w-xs">
                  Advanced surveillance systems ensuring your safety and peace of mind during your stay.
                </p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2 p-12 lg:p-20">
            <span className="text-secondary font-headline font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Safety First</span>
            <h2 className="text-primary font-headline text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
              Your Peace of Mind is Our Priority
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-3xl">videocam</span>
                </div>
                <div>
                  <h4 className="text-primary font-headline font-bold text-xl mb-2">Full CCTV Coverage</h4>
                  <p className="text-[#45474d] font-light leading-relaxed">
                    Strategically placed cameras across all public areas, corridors, and parking spaces monitored round the clock.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-3xl">security</span>
                </div>
                <div>
                  <h4 className="text-primary font-headline font-bold text-xl mb-2">Verified Staff</h4>
                  <p className="text-[#45474d] font-light leading-relaxed">
                    Our on-ground security team is background-checked and professionally trained to handle all safety needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-3xl">emergency</span>
                </div>
                <div>
                  <h4 className="text-primary font-headline font-bold text-xl mb-2">Emergency Protocols</h4>
                  <p className="text-[#45474d] font-light leading-relaxed">
                    Equipped with state-of-the-art fire safety systems and clear emergency exit procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
