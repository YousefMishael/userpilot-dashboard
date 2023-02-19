import React from "react";
import { useTheme } from "@mui/material/styles";
import { useNotFoundStyles } from "./NotFoundStyles";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function NotFound() {
  const theme = useTheme();
  const styles = useNotFoundStyles(theme);

  return (
    <div className={styles.notFoundCon}>
      <img
        className={styles.img}
        src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
        alt="Not Found IMG"
      />
      <h3>Not Found...</h3>
      <Link to={"/"} className={styles.link}>
        <ArrowBackIosIcon />
        &nbsp;Return to home page
      </Link>
    </div>
  );
}
