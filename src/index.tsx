import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import "./server";
import { HostLayout } from './components/HostLayout';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Host/Dashboard';
import { HostVanDetail } from './pages/Host/HostVanDetail';
import { HostVanDetailLayout } from './pages/Host/HostVanDetailLayout';
import { HostVanPhotos } from './pages/Host/HostVanPhotos';
import { HostVanPricing } from './pages/Host/HostVanPricing';
import { HostVans } from './pages/Host/HostVans';
import { Income } from './pages/Host/Income';
import { Reviews } from './pages/Host/Reviews';
import { NotFound } from './pages/NotFound';
import { VanDetail } from './pages/Vans/VanDetail';
import { Vans, loader as vansLoader } from './pages/Vans/Vans';
import { Error } from './components/Error';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />}/>
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='vans' element={<HostVans />} />
        <Route path='vans/:id' element={<HostVanDetailLayout />}>
          <Route index element={<HostVanDetail />}/>
          <Route path='pricing' element={<HostVanPricing />}/>
          <Route path='photos' element={<HostVanPhotos />}/>
        </Route>
        <Route path='reviews' element={<Reviews />} />
      </Route>
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />} loader={vansLoader} />
      <Route path='vans/:id' element={<VanDetail />} />
      <Route path='*' element={<NotFound />} />
    </Route>
))

root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
