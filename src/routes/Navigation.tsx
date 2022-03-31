import { Suspense } from "react";
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
  // I can render any componet inside of the fallback to load while waiting for my Component lazy to load
  return (
    <Suspense fallback={<h1>Loading</h1>}>
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
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              ></Route>
            ))}

            {/* Here The router will render to lazy1 route */}
            <Route path="/*" element={<Navigate to={routes[0].to} />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
