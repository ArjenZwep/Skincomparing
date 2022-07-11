import { makeStyles } from '@material-ui/core/styles';

const comparisonStyles = makeStyles(theme => ({
    content:{
      paddingTop: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    skinGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)"
    }
    
}));

export default comparisonStyles;