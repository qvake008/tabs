import React from 'react'

import Styles from './css.module.scss'

import Brightness4Icon from '@mui/icons-material/Brightness4';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {
  return (
    <div className={Styles.container}>
        <IconButton>
            <Brightness4Icon/>
        </IconButton>
    </div>
  )
}
