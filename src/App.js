import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavTop from './Pages/Shared/NavTop/NavTop';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="home" element={<Home />}>
          </Route>
          <Route path="login" element={<Login />}>
          </Route>
          <Route path="register" element={<Register />}>
          </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;