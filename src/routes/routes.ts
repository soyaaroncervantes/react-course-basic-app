import {lazy, LazyExoticComponent, JSX} from "react";
type JSXElement = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}


const HomePage = lazy(() => import('../03-forms/pages/home-page'));
const AboutPage = lazy(() => import('../03-forms/pages/about-page'));
const UserPage = lazy(() => import('../03-forms/pages/users-page'));

export const routes: Route[] = [
  {
    to: '/home',
    path: 'home',
    Component: HomePage,
    name: 'Home'
  },
  {
    to: '/about',
    path: 'about',
    Component: AboutPage,
    name: 'About'
  },
  {
    to: '/users',
    path: 'users',
    Component: UserPage,
    name: 'Users'
  }
]
