import { useContext } from "react";
import GithubContext from "../../context/GithubContext";
import styles from "./results.module.css";

const Results = () => {
  const { user, darkMode } = useContext(GithubContext);

    return (
      <main className={darkMode ? styles.resultsDark : styles.results}>
        <div className={styles.resultsHeader}>
          <div>
            <img src={user.avatar_url} alt="Avatar" />
          </div>

          <div className={darkMode ? styles.resultInfoDark : styles.resultsInfo}>
            <h1>{user.name}</h1>
            <p className={styles.username}>@{user.login}</p>
            <p className={styles.joinedAt}>Joined {user.created_at}</p>
          </div>
        </div>

        <div className={styles.resultsDescription}>
          <p>{user.bio}</p>
        </div>

        <div className={darkMode ? styles.resultsTotalDark : styles.resultsTotal}>
          <div className={darkMode ? styles.resultDark : styles.result}>
            <h4>Repos</h4>
            <h2>{user.public_repos}</h2>
          </div>

          <div className={darkMode ? styles.resultDark : styles.result}>
            <h4>Followers</h4>
            <h2>{user.followers}</h2>
          </div>

          <div className={darkMode ? styles.resultDark : styles.result}>
            <h4>Following</h4>
            <h2>{user.following}</h2>
          </div>
        </div>
      </main>
    );
};

export default Results;
