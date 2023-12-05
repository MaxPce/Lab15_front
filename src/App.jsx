import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import SingleMovie from './components/SingleMovie';
import RentForm from './components/RentForm'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movies/:id' element={<SingleMovie />} />
          <Route path='/rent-form/:id' element={<RentForm />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
