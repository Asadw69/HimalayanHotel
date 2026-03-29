import { useState, useRef, useEffect } from 'react';

const CustomDatePicker = ({ selectedDate, onChange, placeholder = "Select Date" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const daysInMonth = (month) => {
    return new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  };

  const startDayOfMonth = (month) => {
    return new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  };

  const formatDate = (date) => {
    if (!date) return "";
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  const handleDateSelect = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onChange(newDate);
    setIsOpen(false);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const days = [];
  const totalDays = daysInMonth(currentMonth);
  const startDay = startDayOfMonth(currentMonth);

  // Padding for start of month
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  const isToday = (day) => {
    const today = new Date();
    return today.getDate() === day && 
           today.getMonth() === currentMonth.getMonth() && 
           today.getFullYear() === currentMonth.getFullYear();
  };

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === currentMonth.getMonth() && 
           selectedDate.getFullYear() === currentMonth.getFullYear();
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative group cursor-pointer w-full"
      >
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-secondary transition-colors text-xl">calendar_month</span>
        <div 
          className={`w-full bg-slate-50 border ${isOpen ? 'border-secondary ring-4 ring-secondary/5' : 'border-slate-100'} hover:bg-white hover:border-secondary transition-all pl-12 pr-4 py-4 rounded-xl text-primary font-medium min-h-[58px] flex items-center`}
        >
          {selectedDate ? formatDate(selectedDate) : <span className="text-slate-400 font-light">{placeholder}</span>}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-4 w-80 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl z-[500] p-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex justify-between items-center mb-6">
            <button onClick={prevMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-primary">
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <h3 className="font-headline font-bold text-primary">
              {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h3>
            <button onClick={nextMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-primary">
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((day, idx) => (
              <div key={idx} className="aspect-square flex items-center justify-center">
                {day && (
                  <button
                    onClick={() => handleDateSelect(day)}
                    className={`w-full h-full rounded-lg text-sm font-medium transition-all ${
                      isSelected(day) 
                        ? 'bg-secondary text-white shadow-lg shadow-secondary/30 scale-110' 
                        : isToday(day)
                        ? 'bg-secondary/10 text-secondary border border-secondary/20'
                        : 'text-primary hover:bg-slate-100'
                    }`}
                  >
                    {day}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
             <button 
              onClick={() => { onChange(new Date()); setIsOpen(false); }}
              className="text-xs font-bold text-secondary uppercase tracking-widest hover:underline"
            >
              Today
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
