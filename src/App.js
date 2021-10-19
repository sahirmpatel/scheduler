import "./App.css";
import { useState } from "react";
import DailySchedule from "./components/DailySchedule";
function App() {
  const [daySchedule, setdaySchedule] = useState([]);
  const [title, setTitle] = useState("");
  const [people, setPeople] = useState("");
  const [starttime, setStarttime] = useState(0);
  const [endtime, setEndtime] = useState(0);
  let timeArray = new Array(24).fill(false);
  const [shedule, setShedule] = useState(timeArray);

  const conflictChecker = (start, end) => {
    for (let i = start; i <= end; i++) {
      if (shedule[i]) {
        alert("Conflicting Times");
        return true;
      }
    }

    if (start > end) {
      alert("Start time greater then end");

      return true;
    }

    return false;
  };

  const addMeeting = () => {
    if (!conflictChecker(starttime, endtime)) {
      let inputschedule = {
        title: title,
        people: people,
        start: starttime,
        end: endtime,
      };
      setdaySchedule([...daySchedule, inputschedule]);

      let newshedule = [...shedule];
      for (let i = starttime; i <= endtime; i++) {
        newshedule[i] = true;
      }

      setShedule(newshedule);
    }
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          addMeeting(title, people, starttime, endtime);
        }}
        action=""
      >
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="title"
        />
        <input
          type="text"
          value={people}
          onChange={(e) => {
            setPeople(e.target.value);
          }}
          placeholder="people"
        />
        <input
          type="number"
          value={starttime}
          min="0"
          max="24"
          onChange={(e) => {
            setStarttime(e.target.value);
          }}
          placeholder="start"
        />
        <input
          type="number"
          value={endtime}
          min="0"
          max="24"
          onChange={(e) => {
            setEndtime(e.target.value);
          }}
          placeholder="end"
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <DailySchedule hourlySchedule={shedule} daySchedule={daySchedule} />
    </div>
  );
}

export default App;
