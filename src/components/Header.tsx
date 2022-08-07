import React, { useEffect, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import { Modal, Dropdown } from "semantic-ui-react";
import headerStyles from "../styles/Header.module.css";
import { createContext } from "react";

export const HeaderContext = createContext<object>({});
interface BookNames {
  key: number;
  value: any;
  text: any;
}
interface Props {
  ser: String;
  data: BookNames[];
}

function Header({ ser, data }: Props) {
  const menuState = [true, false];
  const menuOptions = ["Books", "Universities"];
  const menuPaths = ["books", "universities"];
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean[]>(menuState);
  const [search, setSearch] = useState<string>("");
  const [profile, setProfile] = useState<boolean>(false);
  const [triger, setTriger] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  const handleClick = (i: number) => {
    navigate(`/${menuPaths[i]}`);
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const handleSelect = (e: any, data: any) => {
    if (ser === "book") {
      navigate(`/bookDetails/${data.value}`);
    } else if (ser === "university") {
      navigate(`/booksByUniversity/${data.value}`);
    }
  };

  const toggleProfile = () => {
    setProfile(!profile);
  };


  return (
    <div className={headerStyles.header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaBookReader size={20} />
        <p>Study Guru</p>
      </div>
      <ul className={headerStyles.menuItems}>
        {menuOptions.map((opt, i) => {
          return (
            <li
              onClick={() => {
                handleClick(i);
              }}
            >
              {opt}
            </li>
          );
        })}
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
          <Modal.Content style={{ display: "flex", justifyContent: "center" }}>
            <Dropdown
              placeholder={`Search ${ser} `}
              search
              selection
              options={data}
              value={search}
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
          <Modal.Content style={{ display: "flex", justifyContent: "center" }}>
            <Profile toggleProfile={toggleProfile}/>
          </Modal.Content>
        </Modal>
      </ul>
    </div>
  );
}
export default Header;
