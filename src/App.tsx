import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { About } from './About';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />} />
    </Routes>
  );
}


