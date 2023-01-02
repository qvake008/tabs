import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from '../components/HomePage'
import Login from '../components/Login'
import Navbar from '../components/Navbar';
import Registration from '../components/Registration'
import ForgotPass from '../components/ForgotPass'
import ResetPass from '../components/ResetPass'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/tabs/",
      element: <HomePage/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/registration",
      element: <Registration/>,
    },
    {
      path: "/forgot-password",
      element: <ForgotPass/>,
    },
    {
      path: "/reset-password",
      element: <ResetPass/>,
    },
  ]);


  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode}  modeSwitch={setMode}/>
      <RouterProvider router={router} />
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
