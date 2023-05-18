import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';
import { Typography, Button } from '@mui/material';

const Navbar = () => {
  const {user,setLogin}=useAuth();
  return (
    <nav className="navbar">
      <Typography variant="h4" className="navbar-heading">
        Flight App
      </Typography>
    {user ?<Button variant="contained" onClick={()=>setLogin && setLogin(null)} className="logout-button">
      Logout
    </Button>:null}
    </nav>
  );
};

export default Navbar;
