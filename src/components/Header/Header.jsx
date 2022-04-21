import { useContext, useState } from "react";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import search from "../../assets/icon-search.svg";
import GithubContext from "../../context/GithubContext";

import styles from "./header.module.css";

const Header = () => {
    const { getUser, darkMode, toggleDarkMode } = useContext(GithubContext)
    const [ text, setText ] = useState("");
    const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Please enter something!");
    } else {
        getUser(text);
        setText("");
    }
  };
  

  return (
    <header className={darkMode ? styles.headerDark : styles.header}>
      <div className={styles.headerTop}>
        <h1>devfinder</h1>

        <div className={styles.headerSwitch} onClick={toggleDarkMode}>
          { darkMode ? (
              <>
                <h4>Light</h4>
                <img src={sun} alt="Sun Icon" />
              </>
          ) : (
              <>
                <h4>Dark</h4>
                <img src={moon} alt="Moon Icon" />
              </>
          )}
        </div>
      </div>

      <form className={darkMode ? styles.headerSearchDark : styles.headerSearch} onSubmit={handleSubmit}>
        <div>
          <img src={search} alt="Search Icon" />
        </div>
        <input
          type="text"
          placeholder="Search Github username..."
          value={text}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </header>
  );
};

export default Header;
