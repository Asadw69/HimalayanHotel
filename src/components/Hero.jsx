const Hero = () => {
  return (
    <section className="relative h-screen flex items-center pt-20 overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <img
          alt="majestic snow-capped Himalayan peaks at dawn with soft blue and pink atmospheric haze"
          className="w-full h-full object-cover"
          src="https://i.postimg.cc/J7kcLfDy/1509004-the-peaks-behind-the-kedarnath-temple-jay-shree-kedar.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051125]/40 to-transparent"></div>
      </div>
      <div className="relative z-10 px-8 md:px-24 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="glass-card p-12 rounded-xl border-white/20">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary mb-6 tracking-tighter leading-none">
            Himalayan Hotel
          </h1>
          <p className="text-xl md:text-2xl text-[#1b263b]/80 font-light mb-10 max-w-lg leading-relaxed">
            Comfortable Stay Near Kedarnath Route.
            <br />
            Your sanctuary amidst the sacred peaks.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/918433265403"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-br from-[#051125] to-[#1b263b] text-white px-10 py-4 rounded-full font-headline font-bold text-lg hover:shadow-2xl hover:shadow-[#051125]/30 transition-all duration-500 flex items-center justify-center"
            >
              Book Now
            </a>
            <a
              href="tel:8433265403"
              className="glass-card text-primary px-10 py-4 rounded-full font-headline font-bold text-lg hover:bg-white/80 transition-all duration-500 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">call</span> Call Us
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <div className="flex flex-col items-center gap-4">
            <span className="text-primary font-headline font-bold uppercase tracking-widest text-xs [writing-mode:vertical-lr]">
              Scroll to explore
            </span>
            <div className="scroll-indicator"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
