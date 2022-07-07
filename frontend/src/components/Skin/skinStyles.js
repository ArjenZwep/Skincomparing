import { makeStyles } from '@material-ui/core/styles';

const skinStyles = makeStyles(theme => ({
    root: {
      textAlign: "center",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"

    },
    skinImg: {
      position: 'flex',
      width: "100%",
      height: "100%"
    },
    cta: {
      backgroundColor: "black",
      color: "#fff",
      display: "inline",
      textAlign: "center"
    },
    skinName: {
        fontSize: "20px",
        textAlign: "center"
    }
}));

export default skinStyles;