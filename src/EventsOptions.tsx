import React from "react";
import "../styles/Options.css";

function EventsOptions() {
  return (
    <div>
      <ul className="subjects">
        {["Maths", "Physics", "Chemistry"].map((sub) => (
          <li>{sub}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventsOptions;
