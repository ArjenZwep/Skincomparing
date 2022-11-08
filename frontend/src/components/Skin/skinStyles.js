import { makeStyles } from '@material-ui/core/styles';

const skinStyles = makeStyles(theme => ({
    root: {
      textAlign: "center",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "rgb(33 45 69)"

    },

    skinImg: {
      backgroundColor: "rgb(33 45 69)",
      color: 'grey',
      position: 'flex',
      width: "100%",
      height: "100%",
      borderRadius: '20px',
      alignItems: 'center'
    },

    skinImage: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 'fit-content'
    },
    cta: {
      backgroundColor: "black",
      color: "#fff",
      display: "inline",
      textAlign: "center"
    },
    skinName: {
      textAlign: 'center'
    }
}));

export default skinStyles;