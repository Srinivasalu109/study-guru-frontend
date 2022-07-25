import React, { useState } from "react";
import "../styles/Options.css";

function UniversityOptions() {
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

export default UniversityOptions;
