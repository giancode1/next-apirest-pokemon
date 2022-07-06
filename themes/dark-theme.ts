import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',

    },
    components: {  //nos permite hacer los cambios de todos los elementos de material
        //siempre usar Mui al inicio
        MuiAppBar:{ 
            defaultProps:{
                elevation: 0,
            },
            styleOverrides: {
                root:{
                    backgroundColor: '#4a148c',
                }
            }
        }
    }
});