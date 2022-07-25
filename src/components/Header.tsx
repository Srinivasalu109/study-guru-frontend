import React, { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import { Modal, Dropdown } from "semantic-ui-react";
import headerStyles from "../styles/Header.module.css";
import { createContext } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";

export const HeaderContext = createContext<object>({});

function Header({ children }: any) {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [branch, setBranch] = useState<any>("");
  const [profile, setProfile] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const handleSelect = (e: any, data: any) => {
    setBranch(data.value);
    setOpen(!open);
  };
  const countryOptions = [
    { key: "af", value: "MPC", text: "MPC" },
    { key: "ax", value: "BPC", text: "BPC" },
  ];
  return (
      <div className={headerStyles.header}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaBookReader size={20} />
          <p>Study Guru</p>
        </div>
        <ul className={headerStyles.menuItems}>
          <li
            onClick={() => {
              navigate("/books");
            }}
          >
            Books
          </li>
          <li
            onClick={() => {
              navigate("/universities");
            }}
          >
            Universities
          </li>

          <li>Progress</li>
          <li
            onClick={() => {
              navigate("/events");
            }}
          >
            Events
          </li>
        </ul>
        <ul>
          <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={
              <li
                style={{
                  backgroundColor: "gray",
                  padding: "5px",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <FiSearch size={20} color="black" />
              </li>
            }
          >
            <Modal.Content
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Dropdown
                placeholder="Search book"
                search
                selection
                options={countryOptions}
                value={branch}
                onChange={handleSelect}
                style={{ margin: "10px", width: "480px" }}
              />
            </Modal.Content>
          </Modal>
          <Modal
            basic
            onClose={() => setProfile(false)}
            onOpen={() => setProfile(true)}
            open={profile}
            size="small"
            trigger={
              <li
                style={{
                  backgroundColor: "gray",
                  padding: "5px",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  setProfile(!profile);
                }}
              >
                <BsFillPersonFill size={20} color="black" />
              </li>
            }
          >
            <Modal.Content
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Profile />
            </Modal.Content>
          </Modal>
        </ul>
      </div>
  );
}
export default Header;
