import React, { useState } from "react";
import "../styles/Options.css";
interface funType {
  handleSubject: (sub: String) => void;
}
const options = [true, false, false];
function BooksByUniversityOptions({ handleSubject }: funType) {
  const [subject, setSubject] = useState<Array<boolean>>(options);
  const [trigger, setTrigger] = useState<number>(0);

  const handleClick = (index: number) => {
    for (let i = 0; i < options.length; i++) {
      if (i === index) {
        options[i] = true;
      } else {
        options[i] = false;
      }
    }
    console.log(options);
    setSubject(options);
    setTrigger(trigger + 1);
  };
  return (
    <div>
      <ul className="subjects">
        {["Mathematics", "Physics", "Chemistry"].map((sub, i) => (
          <li
            className={`${subject[i] && "selectSub"}`}
            onClick={() => {
              handleSubject(sub);
              handleClick(i);
            }}
          >
            {sub}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksByUniversityOptions;
