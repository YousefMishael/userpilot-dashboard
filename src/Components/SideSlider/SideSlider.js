import React from "react";
import { useTheme } from "@mui/material/styles";
import { useSideSliderStyles } from "./SideSliderStyles";

function SideSlider() {
  const theme = useTheme();
  const styles = useSideSliderStyles(theme);

  return <div className={styles.sliderContainer}>SideSlider</div>;
}

export default SideSlider;
