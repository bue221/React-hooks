import React, { useState, useEffect } from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 265,
  },
  rootBlack: {
    width: 265,
    background: "#3c3e44",
    color: "white",
  },
  black: {
    background: "#3c3e44",
    color: "white",
  },
  div: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
  area: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    maxWidth: 250,
  },
});

const Caracteres = ({ darkMode }) => {
  const classes = useStyles();

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setPersonajes(data.results);
  };

  return (
    <div className={classes.div}>
      {personajes.map((personaje, index) => (
        <Card
          className={darkMode ? classes.rootBlack : classes.root}
          key={index}
        >
          <CardActionArea className={classes.area}>
            <img
              src={personaje.image}
              alt={personaje.name}
              className={classes.img}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={darkMode && classes.black}
              >
                {personaje.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={darkMode && classes.black}
              >
                {personaje.localation} {personaje.species} {personaje.gender}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              {personaje.status}
            </Button>
            <Button size="small" color="primary">
              Ver mas
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Caracteres;
