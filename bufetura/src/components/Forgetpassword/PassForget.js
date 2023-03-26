import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
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
            <Typography component="h1" variant="h5" id='fs'>
                პაროლის აღდგენა
            </Typography>
            <Typography component="h1" variant="h5" id='new_fs'>
                ჩაწერეთ ახალი პაროლი
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        className='regInput'
                        required
                        fullWidth
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        placeholder="ახლი პაროლი"
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
                        control={<Checkbox value="allowExtraEmails"  />}
                        label="დამახსოვრება"
                        />
                    </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        // fullWidth
                        id="btn"
                        variant="contained"
                        sx={{ }}
                        >
                        <Link href='/'>
                            დადასტურება
                        </Link>
                    </Button>
                    {/* <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/Auth">
                             გაქვს უკვე ანგარიში? გაიარე ავტორიზაცია
                        </Link>
                    </Grid>
                </Grid> */}
            </Box>
            </Box>
          
        </Container>
        </ThemeProvider>
    </div>
  );
}




















// import React from 'react'
// import './Reg.style.css'

// const Reg = () => {
//   return (
//     <React.Fragment>
//     <div className='wrapper'>
//         <div className='info-wrapper'>
//         <h1 className="header-reg">რეგისტრაცია</h1>
//             <div className="auth-form-container">
//                 <form action="" method="get" className='wrapper-input'>
//                     <div className='input_box1'>
//                             <label className="text-input-label" for="firstName">კომპანიის სახელი</label>
//                         <div className="form-group">
//                             <input className="text-input" type="text" name="firstName" id="firstName" placeholder="" />
//                         </div>
//                             <label className="text-input-label" for="emailword">იმეილი</label>
//                         <div className="form-group">
//                             <input className="text-input" type="emailword" name="emailword" id="emailword" />
//                         </div>
//                     </div>
//                     <div className='input-box2'>
//                             <label className="text-input-label" for="password">პაროლი</label>
//                         <div className="form-group">
//                             <input className="text-input" type="password" name="password" id="password" />
//                         </div>

//                             <label className="text-input-label" for="password">გაიმერორეთ პაროლი</label>
//                         <div className="form-group">
//                             <input className="text-input" type="password" name="password" id="confirm_password" /><br />
//                         </div>
//                     </div>
//                 </form>
//                     <button className="submit-button">
//                         registracia
//                     </button>
//                     <p>გაქვს ანგარიში?<a href="auth.html">გაიარე ავტორიზაცია</a></p>
//             </div>
//         </div>
//     </div>
//     </React.Fragment>
//   )
// }

// export default Reg
