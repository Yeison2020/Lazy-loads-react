import { lazy, LazyExoticComponent } from "react";

// Replaced with Lazy load
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

// My Types ---->
type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  name: string;

  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}
// Implementing Lazy loads here --->
// Why adding the comment there this will change the name of the chunck

const Lazylayout = lazy(() => import(`../01-lazyload/layout/Lazylayout`));
const NoLazypage = lazy(() => import(`../01-lazyload/pages/NoLazy`));
// const Lazy3 = lazy(() => import(`../01-lazyload/pages/LazyPage3`));

// Important to add the Route array to be able to used their Types
export const routes: Route[] = [
  {
    to: "/lazyload",
    path: "/lazyload/*",
    Component: Lazylayout,
    name: "Lazy Layout Component",
  },
  {
    to: "noLazy",
    path: "noLazy",
    Component: NoLazypage,
    name: "No Lazy Page Component",
  },
];
