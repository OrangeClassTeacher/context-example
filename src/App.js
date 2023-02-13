import logo from "./logo.svg";
import "./App.css";
// import MyApp from "./App1";
import { ThemeContext, CurrentUserContext } from "./context";
import UserInfo from "./components/UserInfo";
import Main from "./components/Main";
import { useState } from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Search from "./components/Search";
function App() {
  const [theme, setTheme] = useState("bg-dark");
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header />
        <Main>
          <div>
            <UserInfo />
          </div>
          <Search />
          <NewsList />
          <div className="m-3 d-flex align-items-center">
            <input
              type={"checkbox"}
              className="form-check"
              name="switchTheme"
              checked={theme == "bg-dark"}
              value={theme}
              onChange={(e) => {
                setTheme(e.target.checked ? "bg-dark" : "bg-light");
              }}
            />
            <label htmlFor="switchTheme" className="form-label">
              Dark mode
            </label>
          </div>
        </Main>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
