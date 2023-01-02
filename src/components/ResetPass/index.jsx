import React from 'react'
// import { Link as RouterLink  } from 'react-router-dom';

import Styles from './css.module.scss'
import logo from './img/logo.png'

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function ResetPass() {

    const [values, setValues] = React.useState({
        password: '',
        repeatPassword: '',
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
        <Paper elevation={2} className={Styles.container}>
            <div className={Styles.signUpContainer}>
                <div className={Styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={Styles.title}>
                    <Typography variant="h4" component="h2">Reset password</Typography>
                </div>
                <div className={Styles.container__fields}>
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">New password</InputLabel>
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
                        label="New password"
                    />
                    </FormControl>
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Repeat password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'repeatPassword'}
                        value={values.repeatPassword}
                        onChange={handleChange('repeatPassword')}
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
                        label="Repeat password"
                    />
                    </FormControl>
                </div>
                <div className={Styles.container__btn}>
                    <Button color="success" variant="contained" size="large">Reset password</Button>
                </div>
            </div>
        </Paper>
    </div>
  )
}
