const Footer = () => {
  return (
    <footer className="bg-slate-950 w-full pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-2">
          <span className="text-xl font-bold text-white mb-4 block font-headline tracking-tight">
            HIMALAYAN HOTEL
          </span>
          <p className="text-slate-400 font-body text-sm leading-relaxed max-w-md">
            Your premium accommodation partner on the Shri Kedarnath Road. Committed to providing the highest standards of safety, cleanliness, and comfort in the heart of Uttarakhand.
          </p>
          <div className="mt-8 flex gap-6">
            <div className="text-slate-500 text-xs">
              <div className="font-bold text-slate-300 mb-1 uppercase tracking-widest">GSTIN</div>
              02AAACH1234F1Z5
            </div>
            <div className="text-slate-500 text-xs">
              <div className="font-bold text-slate-300 mb-1 uppercase tracking-widest">FIRE SAFETY</div>
              FS-CERT-2024-089
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-headline uppercase tracking-widest text-sm">Address</h4>
          <address className="text-slate-400 not-italic text-sm leading-relaxed space-y-1">
            Shri Kedarnath Road,<br />
            Bedubagar, Agastyamuni,<br />
            Rudraprayag, Uttarakhand<br />
            PIN: 246421
          </address>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-headline uppercase tracking-widest text-sm">Quick Links</h4>
          <div className="flex flex-col gap-4 text-sm">
            <a className="text-slate-400 hover:text-sky-400 transition-colors" href="#">Privacy Policy</a>
            <a className="text-slate-400 hover:text-sky-400 transition-colors" href="#">Terms of Service</a>
            <a className="text-slate-400 hover:text-sky-400 transition-colors" href="#">Cookie Policy</a>
            <a className="text-slate-400 hover:text-sky-400 transition-colors" href="#">Sitemap</a>
          </div>
          <div className="flex flex-col gap-8 mt-12 bg-white/5 p-6 rounded-2xl border border-white/5">
            <div>
              <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-sky-400 mb-4">Safety First</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                24/7 CCTV Monitoring & Verified Staff for your peace of mind while you stay with us.
              </p>
            </div>
            <div>
              <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-sky-400 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/himalayan_hotel_/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-600 hover:to-orange-500 transition-all duration-500 group border border-white/5 hover:border-white/20"
                >
                  <span className="material-symbols-outlined text-white text-xl">photo_camera</span>
                </a>
                <a 
                  href="https://wa.me/918433265403" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-green-600 transition-all duration-500 group border border-white/5 hover:border-white/20"
                >
                  <span className="material-symbols-outlined text-white text-xl">chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 px-8 max-w-7xl mx-auto">
        <p className="text-slate-500 text-xs tracking-wider">
          © 2024 HIMALAYAN HOTEL. ALL RIGHTS RESERVED. GSTIN: 02AAACH1234F1Z5
        </p>
      </div>
    </footer>
  );
};

export default Footer;
