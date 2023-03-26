import * as React from 'react';
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
import './Reg.style.css'



const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className='wrapper'>
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                paddingTop: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white'
            }}
            >
            <Typography component="h1" variant="h5" id="reg_text">
                რეგისტრაცია
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        autoFocus
                        placeholder="კომპანიის სახელი"
                        placeholderTextColor="red"
                        inputProps={{
                            style: { 
                                color: 'white' 
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        placeholder="იმეილი"
                        placeholderTextColor="red"
                        inputProps={{
                            style: { 
                                color: 'white' 
                                }
                            }}
                        
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        className='regInput'
                        required
                        fullWidth
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        placeholder="პაროლი"
                        placeholderTextColor="red"
                        
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        type="password" 
                        id="password"
                        autoComplete="new-password"
                        placeholder="პაროლის გამეორება"
                        placeholderTextColor="red"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="დამახსოვრება"
                        />
                    </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        id="btn"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                    რეგისტრაცია
                    </Button>
                    <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/Auth">
                             გაქვს უკვე ანგარიში? გაიარე ავტორიზაცია
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            </Box>
          
        </Container>
        </ThemeProvider>
    </div>
  );
}




