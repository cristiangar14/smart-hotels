import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { authUser, getAuth } from './loginSlice';
import styles from './Login.module.css';
import { Rol } from '../../utils/types/user.type';
import { AuthState } from '../../utils/types/auth.types';

const theme = createTheme();


// Define Schema of validation with yup

const loginSchema = Yup.object().shape(
  {
      email: Yup.string().email('Invalid Email Format').required('Email is required'),
      password: Yup.string().required('Password is required')
  }
)

export const Login=()=> {

  const auth: AuthState = useAppSelector(authUser);
  const dispatch = useAppDispatch();

  let navigate = useNavigate();
  let token = sessionStorage.getItem('token')

  useEffect(() => {
    if (auth.dataUser) {
      const {_id, rol} = auth.dataUser;
      if (token && (rol === Rol.ADMIN || rol === Rol.AGENT_TRAVEL)) {
          navigate('/dashboard')
      }
      
      if (token && (rol === Rol.CUSTOMER)) {
        navigate(`/user/${_id}`)
      }
    }

  }, [auth])
  

  // We define the initial credentials
  const initialCredentials = {
    email: '',
    password: '',
  }

  const formik = useFormik({
    initialValues: initialCredentials,
    validationSchema: loginSchema,
    onSubmit: async(values) => {
      dispatch(getAuth(values))
    }
  })

  
   

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}



