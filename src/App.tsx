import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vans } from './pages/Vans/Vans';
import { VanDetail } from './pages/Vans/VanDetail';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Host/Dashboard';
import { Income } from './pages/Host/Income';
import { Reviews } from './pages/Host/Reviews';

export const App = () => {
  return (
    <div style={{ padding: '2%' }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/host' element={<Dashboard />}>
            <Route path='/host/income' element={<Income />} />
            <Route path='/host/reviews' element={<Reviews />} />
          </Route>

          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
        </Route>
      </Routes>
    </div>
  );
}
