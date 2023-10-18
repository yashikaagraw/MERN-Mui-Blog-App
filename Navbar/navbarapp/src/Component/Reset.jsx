import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Link from '@mui/material/Link';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Reset password for email: ' + email);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password for email: ' + email);
  };

  

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card>
            <CardContent>
        <Typography component="h1" variant="h7">
          Reset Password
        </Typography>
        <Typography>
            Enter your email for a password reset link
        </Typography>
        <br />
        <Divider />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleResetPassword();
          }}
          style={{ marginTop: '16px' }}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Email,phone & username"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
        </form>
        <Link
        component= "button"
        variant="body2"
        style={{marginTop: '16px'}}
        onClick={handleForgotPassword}
        >
            Forgot Email?
        </Link>
         <br />
         <br />
         <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
            Send Reset Link
          </Button>
          <Link
        component= "button"
        variant="body2"
        style={{marginTop: '16px'}}
        onClick={handleForgotPassword}
        >
            Back to Sign in 
        </Link>
        </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ResetPassword;

