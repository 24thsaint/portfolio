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
import SectionDivider from "../../components/section-divider";

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
              title="Curriculum Vitae"
              caption="A formal introduction"
              image="/images/stock-cv.jpg"
              link="/curriculum-vitae"
            />
            <MenuGalleryItem
              title="About Me"
              caption="For silly things"
              image="/images/stock-about-me.jpg"
            />
          </MenuGallery>
          <SectionDivider>
            <Typography variant="h5">Portfolio</Typography>
          </SectionDivider>
          <MenuGallery>
            <MenuGalleryItem
              title="Image Compression"
              caption="Using Discrete Cosine Transform"
              image="/images/stock-image-compression.jpg"
            />
            <MenuGalleryItem
              title="Lottery Analysis"
              caption="When I was obsessed with gambling"
              image="/images/stock-lottery.jpg"
            />
            <MenuGalleryItem
              title="Wine House"
              caption="Blockchain-based asset tracking"
              image="/images/stock-ethereum.jpg"
            />
            {new Array(6).fill("").map((elem, index) => (
              <MenuGalleryItem
                title="Coming Soon"
                caption="Wait for it..."
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
