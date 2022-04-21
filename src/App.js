import { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import GithubContext from "./context/GithubContext";

function App() {
  const { user, error, darkMode } = useContext(GithubContext)

  if (error) {
    alert("No user found! Please search again...")
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("body-dark");
    } else {
      document.body.classList.remove("body-dark");
    }
  })
  
  return (
      <div className="container">
        <Header />
        { user.length !== 0 && !error && <Results />}
      </div>
    
  );
}

export default App;
