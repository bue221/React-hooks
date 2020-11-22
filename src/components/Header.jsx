import React from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  black: {
    color: "white",
  },
  btnBlack: {
    color: "white",
    border: "1px solid white",
  },
  Header: {
    display: "flex",
    justifyContent: "space-around",
    padding: "2rem",
    alignItems: "center",
  },
});

const Header = ({ onClick, darkMode }) => {
  const classes = useStyles();

  return (
    <div className={classes.Header}>
      <h1 className={darkMode && classes.black}>Curso de React hooks</h1>
      <div>
        <Button
          variant="outlined"
          onClick={onClick}
          className={darkMode && classes.btnBlack}
        >
          {darkMode ? "brillante" : "oscuro"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
