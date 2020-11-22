import React, { useContext } from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
//context
import ThemeContext from "../context/ThemeContext";

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

  const color = useContext(ThemeContext);

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
