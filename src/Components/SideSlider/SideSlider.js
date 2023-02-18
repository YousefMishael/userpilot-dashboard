import React from "react";
import { useTheme } from "@mui/material/styles";
import { useSideSliderStyles } from "./SideSliderStyles";

function SideSlider(props) {
  const theme = useTheme();
  const styles = useSideSliderStyles(theme);

  return (
    <div
      className={`${styles.sliderContainer} ${props.open && styles.openSlider}`}
    >
      {props.content}
    </div>
  );
}

export default SideSlider;
