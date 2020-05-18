import React from "react";
import {
  makeStyles,
  createStyles,
  Typography,
} from "@material-ui/core";

interface SectionDividerProps {
  children: React.ReactNode[] | React.ReactNode;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.dark,
      width: "100%",
      height: "5em",
      textAlign: "center",
      marginTop: "2em",
      marginBottom: "2em",
      position: "relative"
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
  })
);

const SectionDivider = (props: SectionDividerProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {props.children || <Typography>Section Divider</Typography>}
      </div>
    </div>
  );
};

export default SectionDivider;
