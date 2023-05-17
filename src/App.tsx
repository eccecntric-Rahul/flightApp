import { Route,Routes } from 'react-router-dom';
import NotFound from './routes/NotFound/NotFound';
import './App.css';
import Signup from './routes/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './routes/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './routes/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer />
    <ToastContainer />
    </div>
  );
}

export default App;
