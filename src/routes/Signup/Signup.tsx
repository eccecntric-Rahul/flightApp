import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Signup.css';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const SignupPage = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = () => {
  };

  return (
    <div className="signup-page">
      <Container maxWidth="sm">
        <Paper className="signup-paper" elevation={3}>
          <Typography variant="h4" align="center" className="signup-title">
            Sign Up
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
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
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
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
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  required
                  className="form-input"
                  fullWidth
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
              <Button type="submit" variant="contained" fullWidth>
                Sign Up
              </Button>
            </Form>
          </Formik>
        </Paper>
      </Container>
    </div>
  );
};

export default SignupPage;
