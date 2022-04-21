import moon from "../../assets/icon-moon.svg"
import search from "../../assets/icon-search.svg"

import styles from "./header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerTop}>
            <h1>devfinder</h1>

            <div className={styles.headerSwitch}>
                <h4>Dark</h4>
                <img src={moon} alt="Moon Icon" />
            </div>
        </div>

        <div className={styles.headerSearch}>
            <div>
                <img src={search} alt="Search Icon" />
            </div>
            <input type="text" placeholder="Search Github username..." />
            <div>
                <button type="submit">Search</button>
            </div>
        </div>
    </header>
  )
}

export default Header