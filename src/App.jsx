import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Account from './pages/account/account';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<Register />} exact path="/register" />
            <Route element={<Login />} exact path="/login" />
            <Route element={<Account />} exact path="/account" />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
