import {lazy, LazyExoticComponent} from "react";
import {NoLazyLoaded} from "../01-lazyload/pages";
type JSXElement = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}


const LazyLayout= lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/lazy-layout'));

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/lazy-page-1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/lazy-page-2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/lazy-page-3'));

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy page 1'
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy page 2'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy page 3'
  },
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy layout'
  },
  {
    to: '/noLazy',
    path: 'noLazy',
    Component: NoLazyLoaded,
    name: 'No lazy page'
  }
]
