import React from 'react'

import Styles from './css.module.scss'

import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export default function Navbar({onc}) {


  return (
    <div className={Styles.container}>
        <IconButton>
          <AccountCircleIcon/>
        </IconButton>
        <IconButton>
          <AddCircleIcon/>
        </IconButton>
        <IconButton onClick={onc.toggleColorMode}>
          <Brightness4Icon/>
        </IconButton>
    </div>
  )
}
