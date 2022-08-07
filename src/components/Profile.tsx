import React from "react";
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";

interface ToggleProfileType {
  toggleProfile: () => void;
}

function Profile({ toggleProfile }: ToggleProfileType) {
  const navigate = useNavigate();
  return (
    <div className="profile">
      <ul>
        {/* <li>Edit profile</li> */}
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          Switch account
        </li>
        <li
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </li>
        <li onClick={toggleProfile}>Cancle</li>
      </ul>
    </div>
  );
}

export default Profile;
