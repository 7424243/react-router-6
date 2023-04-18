import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Navbar } from './Navbar';

export const App = () => {
  return (
    <div style={{ padding: '2%' }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}
