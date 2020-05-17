import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  Box,
  Container,
  colors,
  Typography,
} from "@material-ui/core";
import Parallax from "../../components/parallax";
import MenuGallery from "./components/MenuGallery";
import MenuGalleryItem from "./components/MenuGalleryItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      overflow: "hidden",
    },
    container: {
      backgroundColor: colors.grey[900],
    },
  })
);

export default function Homepage() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.header}>
        <Parallax imageSource="/images/stock-computer-laptop.jpg" />
      </Box>
      <Container className={classes.container}>
        <Box paddingTop={5}>
          <MenuGallery>
            <MenuGalleryItem
              title="Title"
              caption="Short Description"
              image="/images/stock-computer-laptop.jpg"
            />
            {new Array(8).fill("").map((elem, index) => (
              <MenuGalleryItem
                title="Title"
                caption="Short Description"
                key={index}
                id={index + 50}
              />
            ))}
          </MenuGallery>
        </Box>
      </Container>
    </div>
  );
}
