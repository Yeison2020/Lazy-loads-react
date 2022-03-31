import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
export const routes = [
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
