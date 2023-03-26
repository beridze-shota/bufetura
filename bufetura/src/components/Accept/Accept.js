import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




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
            
            <Typography component="h1" variant="h5" id='new_fs'>
               ახალი პაროლი დაყენებულია
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Button
                        type="submit"
                        fullWidth
                        id="btn"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        <Link href='/'>
                            დადასტურება
                        </Link>
                    </Button>
            </Box>
            </Box>
          
        </Container>
        </ThemeProvider>
    </div>
  );
}







