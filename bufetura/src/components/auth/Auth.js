import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Auth.style.css'

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
    <div className='wrapper'>
      <Container  component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" id="auth_text">
            ავტორიზაცია
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
             inputProps={{
               style: { 
                   backgroundColor: '', 
                   color: 'white' 
                   }
              }}
              placeholder="იმეილი"
              placeholderTextColor="red"
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="პაროლი"
              placeholderTextColor="red"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="დამახსოვრება" color="primary" />}
              label="დამახსოვრება"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              id="btn"
              sx={{ mt: 3, mb: 2 }}
            >
              ავტორიზაცია
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/PassForget" variant="body2">
                  დაგავიწყდათ პაროლი?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Reg" variant="body2">
                  {"არ გაქვს ანგარიში? გაიარე რეგისტრაცია"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
    </ThemeProvider>
  );
}