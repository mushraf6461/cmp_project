import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import { FaFacebookF, FaGoogle } from "react-icons/fa"; // React icons for Facebook and Google
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
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
        <Typography variant="h6" align="center"gutterBottom sx={{ color: "#1A1A1A" }}>
          Login
        </Typography>
        {/* Step 2: Small content */}
        <Typography variant="body2"align="center"gutterBottom sx={{ marginBottom: "8px" }}>
          Log in to see job vacancies from Companies
        </Typography>
        {/* Step 3: Login with Facebook and Google */}
        <Grid container spacing={1} justifyContent="center" sx={{ marginBottom: "8px" }}>
          <Grid item>
            <Button variant="contained"startIcon={<FaFacebookF />}
              sx={{backgroundColor: "#3b5998",color: "#fff",fontSize: "0.8rem",padding: "5px 8px",}}>
              Facebook
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained"startIcon={<FaGoogle />}
              sx={{backgroundColor: "#db4437",color: "#fff",fontSize: "0.8rem",padding: "5px 8px"}}>
              Google
            </Button>
          </Grid>
        </Grid>
        {/* Step 4: Divider with 'OR' */}
        <Divider sx={{ marginY: "8px" }}>OR</Divider>
        {/* Step 5-9: Login form */}
        <Box component="form"sx={{ marginTop: "10px" }}noValidateautoComplete="off">
          {/* Step 5: Email */}
          <TextField fullWidth label="email"  margin="dense" variant="outlined"size="small"/>
          {/* Step 6: Password */}
          <TextField fullWidth label="password" type="password"margin="dense"variant="outlined"size="small"/>
          {/* Step 7: Login button */}
          <Link to="/userdashboard">
          <Button fullWidth variant="contained" 
            sx={{ backgroundColor: "#1A1A1A",color: "#fff",fontSize: "0.9rem",padding: "8px 12px",marginTop: "10px",marginBottom: "10px",}}>
            Log In           </Button>
          </Link>
        </Box>
        {/* Step 8: Forgot password link */}
        <Typography variant="body2" align="center" sx={{ marginBottom: "8px" }}>
          <Link href="#">Forgot Password?</Link>
        </Typography>
        {/* Step 9: No account link */}
        <Typography variant="body2" align="center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </>
  );
};

export default Login;