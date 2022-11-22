import React from 'react'

import Styles from './css.module.scss'
import logo from './img/logo.png'

import TextField from '@mui/material/TextField';

export default function HomePage() {
  return (
    <div className={Styles.pageStyle}>
        <div className={Styles.container}>
            <div className={Styles.signUpContainer}>
                <div className={Styles.logo}><img src={logo} alt="logo" /></div>
                <div className={Styles.title}><h1>Sing up</h1></div>
                <div className={Styles.container__fields}>
                    <TextField
                        id="outlined-name"
                        label="E-mail"
                    />
                    <TextField
                        id="outlined-name"
                        label="Password"
                    />
                </div>
                <div className={Styles.container__btn}>

                </div>
            </div>
        </div>
    </div>
  )
}
