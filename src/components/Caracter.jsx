import React, { useState, useEffect, useReducer } from "react";
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
  favoritos: {
    margin: "3rem",
    height: "400px",
    border: "1px solid #ddd",
    background: "#f1f1f1",
    overflowX: "scroll",
    overflowY: "hidden",
  },
  item: {
    display: "inline-flex",
    width: "auto",
    gap: "3rem",
  },
});

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};

const Caracteres = ({ darkMode }) => {
  const classes = useStyles();

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  //console.log(favorites);
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setPersonajes(data.results);
  };

  return (
    <>
      <div className={classes.favoritos}>
        <h1>Favoritos</h1>
        <div className={classes.item}>
          {favorites.favorites &&
            favorites.favorites.map((personaje, index) => (
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
                      {personaje.localation} {personaje.species}{" "}
                      {personaje.gender}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    {personaje.status}
                  </Button>
                  <Button size="small" color="primary">
                    eliminar
                  </Button>
                </CardActions>
              </Card>
            ))}
        </div>
      </div>
      <h1 className={darkMode && classes.black} style={{ textAlign: "center" }}>
        Personajes
      </h1>
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
              <Button
                size="small"
                color="primary"
                onClick={() => handleClick(personaje)}
              >
                Añadir a favoritos
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Caracteres;
