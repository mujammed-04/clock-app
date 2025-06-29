import { useEffect, useState } from "react";
import { padStart } from "~/shared/utils";

export default function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-2 items-center text-[260px] font-bold leading-none text-white">
            <span>{padStart(date.getHours())}</span>
            <div className="animate-pulse text-[220px] text-white/50">:</div>
            <span>{padStart(date.getMinutes())}</span>
        </div>
    )
}