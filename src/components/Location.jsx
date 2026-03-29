const Location = () => {
  return (
    <section className="py-32 bg-white" id="location">
      <div className="px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">
            Prime NH107 Access
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary mt-1">location_on</span>
              <div>
                <h4 className="font-headline font-bold text-primary">Bedubagar Stretch</h4>
                <p className="text-[#45474d] font-light">Augustmuni, Rudraprayag, Uttarakhand 246421</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary mt-1">directions_car</span>
              <div>
                <h4 className="font-headline font-bold text-primary">Strategic Route</h4>
                <p className="text-[#45474d] font-light">Perfect stopover for Kedarnath pilgrims, situated directly on the NH107 bypass.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary mt-1">local_gas_station</span>
              <div>
                <h4 className="font-headline font-bold text-primary">Nearby Landmarks</h4>
                <p className="text-[#45474d] font-light">Walking distance to essential services and transport hubs.</p>
              </div>
            </div>
          </div>
          <a 
            href="https://www.google.com/maps?cid=8906457522409472332&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=en&gl=IN&source=embed"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block bg-primary text-white px-10 py-4 rounded-full font-headline font-bold text-sm tracking-widest hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
          >
            GET DIRECTIONS
          </a>
        </div>
        <div className="h-[500px] glass-card rounded-xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.3201552312115!2d79.04542499663117!3d30.402678366922725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909cb8685e1fdef%3A0x7b9a17ed9e52814c!2sHimalayan%20Hotel!5e0!3m2!1sen!2sin!4v1774773847855!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Himalayan Hotel Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
