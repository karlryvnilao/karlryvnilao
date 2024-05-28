import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import About from './pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<RootLayout/>}>
      <Route path="about" element={<About/>}/>
      {/* add ka pa ng routes dine */}
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )

}

export default App;
