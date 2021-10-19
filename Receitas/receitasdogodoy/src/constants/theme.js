import { createTheme } from "@material-ui/core";
import {primaryColor, secondaryColor} from "./colors";




const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,},    
    
    },
    text: { 
        primary:  secondaryColor
    }
  });

  export default theme;