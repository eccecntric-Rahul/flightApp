import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';
import { Typography, Button } from '@mui/material';

const Navbar = () => {
  const {setLogin}=useAuth();
  return (
    <nav className="navbar">
      <Typography variant="h4" className="navbar-heading">
        Flight App
      </Typography>
      <Button variant="contained" onClick={()=>setLogin && setLogin(null)} className="logout-button">
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
