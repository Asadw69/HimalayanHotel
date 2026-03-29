const About = () => {
  return (
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left: Image with Glass Card */}
        <div className="relative w-full lg:w-1/2 group">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]">
            <img
              src="https://i.postimg.cc/bvhxFK5s/Whats_App_Image_2026_03_29_at_1_10_58_PM_(6).jpg"
              alt="Himalayan Hotel Exterior"
              className="w-full aspect-[4/5] object-cover object-[25%_center] group-hover:scale-[1.03] transition-transform duration-1000"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
          </div>

          {/* Floating Glass Card */}
          <div className="absolute -bottom-10 -right-6 md:-right-10 bg-white/40 backdrop-blur-3xl p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300 group-hover:-translate-y-2 group-hover:translate-x-1 transition-transform duration-700 ease-out z-10">
            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
              <span className="text-5xl md:text-6xl font-black font-headline text-primary tracking-tighter drop-shadow-sm">107</span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary/60 whitespace-nowrap">NH107 Highway <br className="md:hidden" />Connectivity</span>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 space-y-10">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-secondary-container/20 text-secondary font-label text-xs font-bold tracking-[0.2em] uppercase rounded-full">
              Our Identity
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-primary tracking-tighter leading-none">
              A Sanctuary <br /><span className="text-secondary">for the Soul</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body leading-relaxed max-w-xl">
              <p className="text-lg">
                Located strategically for Kedarnath travellers, Himalayan Hotel offers more than just a room. We provide a peaceful mountain environment where the air is crisp and the surroundings are divine.
              </p>
              <p className="font-light">
                Whether you are beginning your pilgrimage or returning from the summit, our doors are open with modern comforts and traditional hospitality, situated perfectly on the Bedubagar highway stretch.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-500 shadow-sm border border-sky-100/50">
                <span className="material-symbols-outlined text-xl">self_improvement</span>
              </div>
              <span className="font-headline font-bold text-primary tracking-tight">Peaceful Environment</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500 shadow-sm border border-cyan-100/50">
                <span className="material-symbols-outlined text-xl">location_on</span>
              </div>
              <span className="font-headline font-bold text-primary tracking-tight">Direct NH107 Access</span>
            </div>
            <div className="flex items-center gap-4 group md:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-sm border border-amber-100/50">
                <span className="material-symbols-outlined text-xl">hotel</span>
              </div>
              <span className="font-headline font-bold text-primary tracking-tight">28 Premium Rooms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
