import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<Register />} exact path="/register" />
            <Route element={<Login />} exact path="/login" />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
