import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      textAlign: "center",

    },
    appHeader: {
      backgroundColor: "#8a92db",
      minHeight: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    },
    content:{
      paddingTop: "10vh",
    },
    skinCard: {
      margin: "auto",
      height: "60vh",
      width: "33vh",
      overflow: "hidden"
    },
    skinImg: {
      position: 'relative',
      height: "100%"
    },
    versus: {
      paddingTop: "30vh"
    },
    cta: {
      backgroundColor: "black",
      color: "#fff",
      display: "inline",
      padding: "0.5rem",
      
      // -webkit-box-decoration-break: clone;
      // box-decoration-break: clone;
    },

}));

export default useStyles;