import RoomCard from './RoomCard';
import { rooms } from '../data/rooms';

const Rooms = ({ onSelectRoom }) => {
  return (
    <section className="py-32 bg-[#f2f4f6]" id="rooms">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Curated Accommodations
          </h2>
          <div className="w-24 h-1 bg-[#00668a] mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} onSelect={() => onSelectRoom(room)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
