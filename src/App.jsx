import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import About from './pages/About';
import Projects from './pages/Projects';
import Tooling from './pages/Tooling';
import Training from './pages/Trainings';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="tooling" element={<Tooling />} />
      <Route path="training" element={<Training />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
