import { lazy } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
interface Route {
  to: string;
  path: string;
  name: string;
  Component: () => JSX.Element;
}
// Implementing Lazy loads here --->

const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));

// Important to add the Route array to be able to used their Types
export const routes: Route[] = [
  {
    to: "lazy1",
    path: "lazy1",
    Component: LazyPage1,
    name: "Lazy Page 1",
  },
  {
    to: "lazy2",
    path: "lazy2",
    Component: LazyPage2,
    name: "Lazy Page 2",
  },
  {
    to: "lazy3",
    path: "lazy3",
    Component: LazyPage3,
    name: "Lazy Page 3",
  },
];
