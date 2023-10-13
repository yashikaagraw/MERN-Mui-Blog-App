// import Header from './Components/Header';
// import MainContent from './Components/MainContent';
// //import Grid from '@mui/material/Grid';
// //import { featuredPosts } from './data/Data';
// //import Postcard from './Components/Postcard';
// //import { ToastContainer, toast } from 'react-toastify';

//   import 'react-toastify/dist/ReactToastify.css';
// function App() {

//   // const notify = () =>toast.error('🦄 Wow so easy!', {
//   //   position: "top-right",
//   //   autoClose: 5000,
//   //   hideProgressBar: false,
//   //   closeOnClick: true,
//   //   pauseOnHover: true,
//   //   draggable: true,
//   //   progress: undefined,
//   //   theme: "light",
//   //   });

//   return (
//     <>
//     <Header/>
//     <MainContent/> 
//     <br /> 
    
//     {/* <button onClick={notify}
//     >Notify !</button>

//     <ToastContainer /> */}
//     </>
    
//   );
// }

// export default App;


import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
        <Header/>
    <MainContent/> 
      </ThemeProvider>
      
    </ColorModeContext.Provider>
  );
}