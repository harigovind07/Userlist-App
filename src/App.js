import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import AddStd from './Components/AddStd';
import View from './Components/View';
import { BrowserRouter, Route , Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddStd/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/view" element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
