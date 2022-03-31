import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-active" + (isActive ? "active" : "")
                }
                end={true}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-active" + (isActive ? "active" : "")
                }
                end={true}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-active" + (isActive ? "active" : "")
                }
                end={true}
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<h1>About</h1>}></Route>
          <Route path="/users" element={<h1>Users</h1>}></Route>
          <Route path="/home" element={<h1>Home</h1>}></Route>
        </Routes>
      </div>
    </Router>
  );
};
