import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import Navigate from "../../../utils/navigate";

interface MenuGalleryItemProps {
  title: string;
  caption: string;
  image?: string;
  id?: number;
  link?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "25em",
    },
    galleryImage: {
      width: "100%",
      height: "10em",
    },
    galleryItem: {
      padding: "5%",
    },
    contentArea: {
      backgroundColor: theme.palette.secondary.dark,
    },
  })
);

const MenuGalleryItem = (props: MenuGalleryItemProps) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Card onClick={() => {
        if (props.link) {
          Navigate(props.link)
        }
      }}>
        <CardActionArea>
          <CardMedia
            className={classes.galleryImage}
            image={
              props.image ||
              `https://i.picsum.photos/id/${props.id}/536/354.jpg`
            }
            title={props.title}
          />
          <CardContent className={classes.contentArea}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.caption}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MenuGalleryItem;
