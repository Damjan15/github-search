import { useContext } from "react";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import GithubContext from "./context/GithubContext";

function App() {
  const { user, error } = useContext(GithubContext)

  if (error) {
    alert("No user found! Please search again...")
  }
  
  return (
    
      <div className="container">
        <Header />
        { user.length !== 0 && !error && <Results />}
      </div>
    
  );
}

export default App;
