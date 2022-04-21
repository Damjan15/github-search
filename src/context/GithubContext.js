import { createContext, useState } from "react";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    const [ user, setUser ] = useState([]);
    const [ error, setError ] = useState(false);

    const getUser = async (text) => {
        const res = await fetch(`https://api.github.com/users/${text}`);
        const data = await res.json();

        if (res.status === 404) {
            setError(true);
        } else {
            setUser(data);
        }
    }


    return <GithubContext.Provider value={{ user, getUser, error}}>{children}</GithubContext.Provider>
}

export default GithubContext;