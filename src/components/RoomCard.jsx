const RoomCard = ({ room, onSelect }) => {
  return (
    <div className="peak-card glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-500 flex flex-col h-full">
      <div className="h-64 overflow-hidden relative">
        <img
          alt={room.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          src={room.image}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
          ₹ {room.price}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-headline text-2xl font-bold text-primary mb-4">{room.title}</h3>
        <div className="flex flex-wrap gap-4 text-[#45474d] text-sm mb-8">
          {room.amenities.map((amenity, index) => (
            <span key={index} className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base">{amenity.icon}</span> 
              {amenity.label}
            </span>
          ))}
        </div>
        <button 
          onClick={onSelect}
          className="mt-auto w-full py-4 rounded-full border-2 border-[#051125]/10 text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 transform active:scale-95 shadow-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
