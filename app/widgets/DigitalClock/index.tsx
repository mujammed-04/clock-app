import { DAYS } from "~/shared/constants";
import { useEffect, useState } from "react";
import Clock from "~/entities/Clock/ui/Clock";

export default function DigitalClock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="rounded-lg bg-white/30 backdrop-blur-sm border border-white/10 px-10 py-4 flex gap-16 items-center">
            <div className="flex flex-col">
                {DAYS.map((day) => (
                    <div
                        key={day}
                        className={`text-md font-bold leading-none ${date.getDay() === DAYS.indexOf(day) ? 'text-white' : 'text-white/50'}`}
                    >{day}</div>
                ))}
            </div>
            <Clock />
        </div>
    )
}

