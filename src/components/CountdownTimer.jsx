import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1); // Next year's January 1st

    const difference = newYear - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isNewYear, setIsNewYear] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (
        updatedTimeLeft.days <= 0 &&
        updatedTimeLeft.hours <= 0 &&
        updatedTimeLeft.minutes <= 0 &&
        updatedTimeLeft.seconds <= 0
      ) {
        setIsNewYear(true);
      }
    }, 1000);

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [timeLeft]);

  return (
    <div>
      <div className="text-lg font-semibold">
        {currentTime.toLocaleTimeString()}
      </div>
      <br />
      <h1 className="text-2xl font-semibold">New Year Countdown</h1>
      {isNewYear ? (
        <p className="sm:text-8xl text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-300 text-transparent bg-clip-text">
          Happy New Year!
        </p>
      ) : (
        <>
          {timeLeft.days > 0 && (
            <p className="sm:text-8xl text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-300 text-transparent bg-clip-text">
              {timeLeft.days} {timeLeft.days === 1 ? "day" : "days"}{" "}
              {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
          )}
          {timeLeft.days <= 0 && (
            <p className="sm:text-8xl text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-300 text-transparent bg-clip-text">
              {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
          )}
        </>
      )}
    </div>
  );
}
