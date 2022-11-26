import React from 'react'

import Styles from './css.module.scss'
import logo from './img/logo.png'

import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function HomePage() {

    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


  return (
    <div className={Styles.pageStyle}>
        <div className={Styles.container}>
            <div className={Styles.signUpContainer}>
                <div className={Styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={Styles.title}>
                    <Typography variant="h4" component="h2">Nice to see you!</Typography>
                </div>
                <div className={Styles.container__fields}>
                    <TextField
                        id="outlined-name"
                        type={"email"}
                        value={values.email}
                        onChange={handleChange('email')}
                        label="E-mail"
                    />
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                </div>
                <div className={Styles.link}>
                    <Link href="#" underline="hover">Forgot password?</Link>
                </div>
                <div className={Styles.container__btn}>
                    <Button variant="contained" size="large">Log in</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
