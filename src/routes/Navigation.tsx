import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "../logo.svg";

import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

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
                to="/lazy1"
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-active" + (isActive ? "active" : "")
                }
                end={true}
                to="/lazy2"
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-active" + (isActive ? "active" : "")
                }
                end={true}
                to="/lazy3"
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/lazy1" element={<LazyPage1 />}></Route>
          <Route path="/lazy2" element={<LazyPage2 />}></Route>
          <Route path="/lazy3" element={<LazyPage3 />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
