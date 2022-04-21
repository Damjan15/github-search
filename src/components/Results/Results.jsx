import avatar from "../../assets/avatar.png";
import styles from "./results.module.css";

const Results = () => {
  return (
    <main className={styles.results}>
      <div className={styles.resultsHeader}>
        <div>
          <img src={avatar} alt="Avatar" />
        </div>

        <div className={styles.resultsInfo}>
          <h1>The Octocat</h1>
          <p className={styles.username}>@octocat</p>
          <p className={styles.joinedAt}>Joined 25 Jan 2021</p>
        </div>
      </div>

      <div className={styles.resultsDescription}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro optio blanditiis quaerat et corporis? Ex hic impedit aliquid et veritatis libero molestias labore porro. At laudantium voluptatum quae impedit.</p>
      </div>

      <div className={styles.resultsTotal}>
        <div className={styles.result}>
          <h4>Repos</h4>
          <h2>8</h2>
        </div>

        <div className={styles.result}>
          <h4>Followers</h4>
          <h2>3838</h2>
        </div>

        <div className={styles.result}>
          <h4>Following</h4>
          <h2>9</h2>
        </div>
      </div>
    </main>
  );
};

export default Results;
