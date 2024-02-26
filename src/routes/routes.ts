import {JSX, lazy, LazyExoticComponent} from "react";

type JSXElement = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}


const HomePage = lazy(() => import('../03-forms/pages/HomePage'));
const AboutPage = lazy(() => import('../03-forms/pages/AboutPage'));
const UserPage = lazy(() => import('../03-forms/pages/UsersPage'));
const RegisterPage = lazy(() => import('../03-forms/pages/RegisterPage'));
const FormikBasicPage = lazy(() => import('../03-forms/pages/FormikBasicPage'));
const FormikYupPage = lazy(() => import('../03-forms/pages/FormikYupPage'));
const FormikComponents = lazy(() => import('../03-forms/pages/FormikComponents'));
const FormikAbstract = lazy(() => import('../03-forms/pages/FormikAbstract'));

export const routes: Route[] = [
  {
    to: '/register',
    path: 'register',
    Component: RegisterPage,
    name: 'Register'
  },
  {
    to: '/formik',
    path: 'formik',
    Component: FormikBasicPage,
    name: 'Formik Basic'
  },
  {
    to: '/formik-yup',
    path: 'formik-yup',
    Component: FormikYupPage,
    name: 'Formik Yup'
  },
  {
    to: '/formik-components',
    path: 'formik-components',
    Component: FormikComponents,
    name: 'Formik Components'
  },
  {
    to: '/formik-abstract',
    path: 'formik-abstract',
    Component: FormikAbstract,
    name: 'Formik Abstract'
  },
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
