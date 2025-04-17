import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Home from './Home';
import AboutUs from './AboutUs';
import News from './News';
import Layout from './Layout';
import SearchPage from './SearchPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/news' element={<News />} />
      <Route path="/search/:searchTerm" element={<SearchPage />} />
      <Route path="/search/:term" element={<SearchPage />} />
    </Route>
  )
);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;

