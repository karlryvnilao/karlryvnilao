import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import About from './pages/About';  // Use relative paths
import Projects from './pages/Projects';  // Use relative paths
import Tooling from './pages/Tooling';  // Use relative paths
import Training from './pages/Trainings';  // Use relative paths

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
