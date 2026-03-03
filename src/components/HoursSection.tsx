import { Clock } from "lucide-react";

const schedule = [
  { day: "Domingo", hours: "8:00 AM – 5:00 PM", open: "08:00", close: "17:00" },
  { day: "Lunes", hours: "7:00 AM – 6:00 PM", open: "07:00", close: "18:00" },
  { day: "Martes", hours: "8:00 AM – 4:00 PM", open: "08:00", close: "16:00" },
  { day: "Miércoles", hours: "8:00 AM – 4:00 PM", open: "08:00", close: "16:00" },
  { day: "Jueves", hours: "8:00 AM – 4:00 PM", open: "08:00", close: "16:00" },
  { day: "Viernes", hours: "8:00 AM – 4:00 PM", open: "08:00", close: "16:00" },
  { day: "Sábado", hours: "Cerrado", open: null, close: null },
];

const HoursSection = () => {
  const now = new Date();
  const todayIndex = now.getDay(); // 0=Sunday
  const currentTime = now.getHours() * 100 + now.getMinutes(); // e.g., 14:30 = 1430

  const todaySchedule = schedule[todayIndex];
  const isOpen = todaySchedule.open && todaySchedule.close
    ? currentTime >= parseInt(todaySchedule.open.replace(":", "")) &&
      currentTime <= parseInt(todaySchedule.close.replace(":", ""))
    : false;

  return (
    <section id="horarios" className="py-20 bg-muted">
      <div className="container px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Clock className="w-7 h-7 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Horarios de Atención
          </h2>
        </div>
        <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
        
        {/* Status Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className={`w-3 h-3 rounded-full ${
            isOpen ? "bg-green-500" : "bg-red-500"
          }`} />
          <span className={`font-display font-bold text-lg ${
            isOpen ? "text-green-600" : "text-red-600"
          }`}>
            {isOpen ? "Abierto" : "Cerrado"}
          </span>
        </div>

        <div className="max-w-md mx-auto bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
          {schedule.map((item, i) => {
            const dayMap = [0, 1, 2, 3, 4, 5, 6]; // Sun=0
            const isToday = todayIndex === dayMap[i];
            return (
              <div
                key={item.day}
                className={`flex justify-between items-center px-6 py-4 border-b border-border last:border-b-0 transition-colors ${
                  isToday ? "bg-primary/10 font-bold" : ""
                } ${item.hours === "Cerrado" ? "text-muted-foreground" : ""}`}
              >
                <span className="text-foreground">{item.day} {isToday && "•"}</span>
                <span className={item.hours === "Cerrado" ? "text-muted-foreground" : "text-primary font-semibold"}>
                  {item.hours}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
