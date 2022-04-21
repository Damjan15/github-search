import { useContext, useState } from "react";
import moon from "../../assets/icon-moon.svg";
import search from "../../assets/icon-search.svg";
import GithubContext from "../../context/GithubContext";

import styles from "./header.module.css";

const Header = () => {
    const { getUser } = useContext(GithubContext)
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
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <h1>devfinder</h1>

        <div className={styles.headerSwitch}>
          <h4>Dark</h4>
          <img src={moon} alt="Moon Icon" />
        </div>
      </div>

      <form className={styles.headerSearch} onSubmit={handleSubmit}>
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
