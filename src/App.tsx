import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { About } from './About';

export const App = () => {
  return (
    <>
      <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
      <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />} />
      </Routes>
    </>
  );
}
