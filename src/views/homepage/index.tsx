import React from "react";
import {
  Button,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  createStyles,
  makeStyles,
  Theme,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "1%"
    }
  })
);

export default function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="h3">Hello, I'm Rave!</Typography>
          <Divider />
          <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati porro, labore quod aperiam deserunt totam odio, autem cum, tempore alias aliquid deleniti recusandae impedit quam quidem officiis! Tempore, iusto?
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            {new Array(8).fill(true).map(() => (
              <Grid item xs direction="row">
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image="/images/stock.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
