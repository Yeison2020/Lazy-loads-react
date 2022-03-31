import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";

import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map((route) => (
              <li key={route.to}>
                <NavLink
                  className={({ isActive }) =>
                    "nav-active" + (isActive ? "active" : "")
                  }
                  end={true}
                  to={route.to}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={<route.Component />}></Route>
          ))}

          {/* Here The router will render to lazy1 route */}
          <Route path="/*" element={<Navigate to="lazy1" />} />
        </Routes>
      </div>
    </Router>
  );
};
