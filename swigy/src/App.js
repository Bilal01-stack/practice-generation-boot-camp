import React from 'react';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResturantsDetails from './components/ResturantsDetails';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}
     <Footer />
    </div>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/contact',
        element:<Contact />
      },
      {
        path:'/restaurant/:id',
        element: <ResturantsDetails />
      }
    ]
  }
]);

function Main(){
  return(
  <RouterProvider router={AppRouter} />
  )
}


export default Main;
