import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth, UserType } from '../../contexts/AuthContext';
import { commonGet } from '../../methods';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { InputAdornment } from '@mui/material';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const navigate = useNavigate();
  const [showPwd,setShowPwd]=useState(true);
  const {setLogin}=useAuth();
  const initialValues = {
    email: '',
    password: '',
  };
  const togglePasswordVisibility = () => {
    setShowPwd(!showPwd);
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = async(values:{email:string,password:string}) => {
    try {
      const resp= await commonGet('login',{...values}) as {status:number,data:any} ;
      if(resp.status===200){
        setLogin && setLogin(JSON.stringify(resp.data)as UserType)
        toast("Successfully LoggedIn")
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleSignup=()=>{
    navigate('/signup')
  }

  return (
    <div className="login-page">
      <Container maxWidth="sm">
        <Paper className="login-paper" elevation={3}>
          <Typography variant="h4" align="center" className="login-title">
            Sign In
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="login-form">
              <div className="form-group">
                <Field
                  as={TextField}
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  className="form-input"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <Field
                  as={TextField}
                  label="Password"
                  variant="outlined"
                  type={showPwd?"password":"text"}
                  className="form-input"
                  name="password"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <span onClick={togglePasswordVisibility}>
                          {showPwd ? <AiOutlineEye />: <AiOutlineEyeInvisible />}
                        </span>
                      </InputAdornment>
                    ),
                  }}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                className="login-button"
                fullWidth
              >
                Log In
              </Button>
            <p className='sign-up-text'>
              Don't Have account ? 
              <span className='sign-up-button' onClick={handleSignup}>
              Sign Up
              </span>
              </p> 
            </Form>
          </Formik>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
