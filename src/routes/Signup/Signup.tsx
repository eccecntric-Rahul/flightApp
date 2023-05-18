import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Signup.css';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import { useState } from 'react';
import { commonPost } from '../../methods';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SignupPage = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(true);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPwd(!showPwd);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(6, 'Password must be at least 6 characters long')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('email', values.email);
      formData.append('password', values.password);
      formData.append('name', values.name);
      const resp = await commonPost('signup', formData);
      setLoading(false);
      if (resp.status === 200 || (resp.status && resp.status.toString()[0] === '2')) {
        toast('Successfully Signed Up');
        navigate('/login');
      } else {
        toast('Error Occurred', { type: 'error' });
        setLoading(false);
      }
    } catch (error) {
      toast('Error Occurred', { type: 'error' });
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="signup-page">
      <Container maxWidth="sm">
        <Paper className="signup-paper" elevation={3}>
          <FaArrowLeft className="back-button" onClick={() => navigate('/login')} />
          <Typography variant="h4" align="center" className="signup-title">
            Sign Up
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form className="signup-form">
                <div className="form-group">
                  <TextField
                    type="text"
                    name="name"
                    label="Name"
                    variant="outlined"
                    required
                    className="form-input"
                    fullWidth
                    value={values.name}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="name" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <TextField
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    required
                    className="form-input"
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="email" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <TextField
                    type={showPwd ? 'password' : 'text'}
                    name="password"
                    label="Password"
                    variant="outlined"
                    required
                    className="form-input"
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {showPwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                          </span>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <ErrorMessage name="password" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <TextField
                    type={showPwd ? 'password' : 'text'}
                    name="confirmPassword"
                    label="Confirm Password"
                    variant="outlined"
                    required
                    className="form-input"
                    fullWidth
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error-message"
                  />
                </div>
                <Button type="submit" variant="contained" disabled={loading} fullWidth>
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </div>
  );
};

export default SignupPage;
