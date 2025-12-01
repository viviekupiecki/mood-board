"use client";
import { useState, useEffect } from "react";
import format from "date-fns/format";

const Clock = () => {
  const [clockTime, setClockTime] = useState<Date>(new Date());

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setClockTime(data.time);
      });
  }, []);

  return (
    <div className="w-full min-w-0 p-6">
      <h1>Global Clock</h1>
      <p>{format(clockTime, "PPP")}</p>
    </div>
  );
};

export default Clock;
