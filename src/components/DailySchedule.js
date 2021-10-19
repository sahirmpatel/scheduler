import React from "react";
import "./DailySchedule.css";

const DailySchedule = ({ hourlySchedule, daySchedule }) => {
  const getMeeting = (index) => {
    for (let i = 0; i < daySchedule.length; i++) {
      if (index == parseInt(daySchedule[i].start)) {
        return `${daySchedule[i].title}-${daySchedule[i].people}`;
      }
    }
  };

  return (
    <div>
      {hourlySchedule.map((hour, i) => {
        return (
          <div className={`hourdiv ${hour ? "filled" : "empty"}`}>
            <span>{i}</span>
            {hour && getMeeting(i)}
          </div>
        );
      })}
    </div>
  );
};

export default DailySchedule;
