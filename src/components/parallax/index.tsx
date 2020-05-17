import React, { useRef } from "react";
import { makeStyles, createStyles, Typography } from "@material-ui/core";

interface Props {
  imageSource: string;
}

const Parallax = (props: Props) => {
  const bannerRef = useRef<HTMLImageElement>(null);

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        textAlign: "center",
        position: "relative",
      },
      banner: {
        width: "100%",
        height: "25em",
        objectFit: "cover",
      },
      innerContent: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    })
  );

  let classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src={props.imageSource}
        alt="parallax"
        className={classes.banner}
        ref={bannerRef}
      />
      <div className={classes.innerContent}>
        <Typography variant="h2">Noren Arevalo</Typography>
        <Typography variant="caption">Rave</Typography>
      </div>
    </div>
  );
};

export default Parallax;
