import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import TodoBoard from "./pages/TodoBoard";
import ActivityBoard from "./pages/ActivityBoard";
import { createContext, useState } from "react";
import Switche from "./components/Switch/Switch";
export const ThemeContext = createContext("light");

const App = () => {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark":"light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <Router>
              <Navbar />
              <Switche toggleTheme={toggleTheme} theme={theme} />
              <Routes>
                <Route path="/home" element={ <Home /> } />
                <Route path="/activities" element={ <ActivityBoard />} />
                <Route path="/todos" element={<TodoBoard />} />
              </Routes>
          </Router>
        </div>
    </ThemeContext.Provider>
  );
}

export default App;