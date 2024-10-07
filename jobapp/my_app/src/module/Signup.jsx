import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Divider, Grid } from '@mui/material';
import { FaFacebookF, FaGoogle } from 'react-icons/fa'; // React icons for Facebook and Google
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: { xs: '90%', sm: '300px' }, // Adjusted width for smaller screens
          margin: '30px auto',
          padding: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background
          boxShadow: '0px 0px 8px rgba(0,0,0,1.1)', // Stronger shadow for contrast
          borderRadius: '8px',
        }}
      >
        {/* Step 1: Signup page heading */}
        <Typography variant="h6" align="center" gutterBottom sx={{ color: '#2A2A2A' }}>
          Sign up
        </Typography>

        {/* Step 2: Small content */}
        <Typography variant="body2" align="center" gutterBottom sx={{ marginBottom: '8px' }}>
          Sign up to see job vacancies from Companies
        </Typography>

        {/* Step 3: Login with Facebook and Google */}
        <Grid container spacing={1} justifyContent="center" sx={{ marginBottom: '8px' }}>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<FaFacebookF />}
              sx={{ backgroundColor: '#3b5998', color: '#fff', fontSize: '0.8rem', padding: '5px 8px' }}
            >
              Facebook
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<FaGoogle />}
              sx={{ backgroundColor: '#db4437', color: '#fff', fontSize: '0.8rem', padding: '5px 8px' }}
            >
              Google
            </Button>
          </Grid>
        </Grid>

        {/* Step 4: Divider with 'OR' */}
        <Divider sx={{ marginY: '8px' }}>OR</Divider>

        {/* Step 5-11: Signup form */}
        <Box component="form" sx={{ marginTop: '10px' }} noValidate autoComplete="off">
          {/* Step 5: Name */}
          <TextField fullWidth label="fullname" margin="dense" variant="outlined" size="small"/> 

          {/* Step 6: Email */}
          <TextField fullWidth label="email" margin="dense" variant="outlined" size="small" />

          {/* Step 7: Mobile Number */}
          <TextField fullWidth label=" phoneNo" margin="dense" variant="outlined" size="small" />

          {/* Step 8: Qualification */}
          <TextField fullWidth label="Qualification" margin="dense" variant="outlined" size="small" />

          {/* Step 9: Password */}
          <TextField fullWidth label="password" type="password" margin="dense" variant="outlined" size="small" />

          {/* Step 10: Confirm Password */}
          <TextField fullWidth label="Confirm Password" type="password" margin="dense" variant="outlined" size="small" />

          {/* Step 11: Choose File */}
          <Grid container spacing={2} alignItems="center" sx={{ marginTop: '10px', marginBottom: '10px' }}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                sx={{ fontSize: '0.8rem', padding: '5px 8px', backgroundColor: '#2f2f2f', color: 'white' }}
              >
                Choose File
                <input type="file" hidden onChange={handleFileChange} />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{color:'white', fontStyle: 'italic', wordBreak: 'break-word' }}>
                {selectedFile ? selectedFile.name : 'No file selected'}
              </Typography>
            </Grid>
          </Grid>

          {/* Step 12: Signup button */}
          <Link to="/login">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: '#1A1A1A',
                color: '#fff',
                fontSize: '0.9rem',
                padding: '8px 12px',
                marginBottom: '8px',
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Box>

        {/* Step 13: Small content about terms */}
        <Typography variant="body2" align="center" color="textSecondary" gutterBottom sx={{ marginTop: '6px' }}>
          By signing up, you agree to our <Link href="#">Terms</Link>, <Link href="#">Data Policy</Link> and <Link href="#">Cookies Policy</Link>.
        </Typography>

        {/* Step 14: Already have an account? */}
        <Typography variant="body2" align="center" sx={{ marginTop: '4px' }}>
          Have an account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </>
  );
};

export default Signup;
