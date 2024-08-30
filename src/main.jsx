import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
//import WorkOne from './pages/portfolio/WorkOne.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { useRouteError } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<ErrorBoundary />} >
      <Route path='' element={<Home />} />
      <Route path='portfolio/' element={<Portfolio />}>
        <Route path=':designid' element={<Portfolio />} />
      </Route>
      <Route path='services' element={<Services />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<Home />}/>
    </Route>
  )
)

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div className='w-full h-screen flex justify-center items-center'>
    Oops! error found. Please visit
    <a className='text-blue-600 font-semibold' href="/">&nbsp;Homepage&nbsp;</a>again.</div>;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
