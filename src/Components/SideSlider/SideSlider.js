import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSideSliderStyles } from "./SideSliderStyles";

function SideSlider() {
  const theme = useTheme();
  const styles = useSideSliderStyles(theme);
  //prettier-ignore
  const [sliderContent,] = useState(false);

  return (
    <div
      className={`${styles.sliderContainer} ${
        sliderContent && styles.openSlider
      }`}
    >
      SideSlider
    </div>
  );
}

export default SideSlider;
