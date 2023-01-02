import React from 'react'
import { Link as RouterLink  } from 'react-router-dom';

import Styles from './css.module.scss'
import logo from './img/logo.png'

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function ForgotPass() {

    const [values, setValues] = React.useState({
        email: '',
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };


  return (
    <div className={Styles.pageStyle}>
        <Paper elevation={2} className={Styles.container}>
            <div className={Styles.signUpContainer}>
                <div className={Styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={Styles.title}>
                    <Typography variant="h4" component="h2">Forgot password</Typography>
                </div>
                <div className={Styles.container__fields}>
                    <TextField
                        id="outlined-name"
                        type="email"
                        value={values.email}
                        onChange={handleChange('email')}
                        label="E-mail"
                    />
                </div>
                <div className={Styles.container__btn}>
                    <Button color="success" variant="contained" size="large">Reset password</Button>
                    <Divider sx={{margin:'20px 0'}}>or</Divider>
                    <Button component={RouterLink} to="/login" variant="contained" size="large">Back to login</Button>
                </div>
            </div>
        </Paper>
    </div>
  )
}
