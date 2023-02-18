import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";
import { useTheme } from "@mui/material/styles";
import { useMainLayoutStyle } from "./MainLayoutStyles";
import SideSlider from "../../Components/SideSlider/SideSlider";
import { AppContext } from "../../Utils/Utils";

function MainLayout() {
  const theme = useTheme();
  const styles = useMainLayoutStyle(theme);
  const [sliderDetails, setSliderDetails] = useState({
    open: false,
    content: "",
  });

  return (
    <AppContext.Provider value={{ sliderDetails, setSliderDetails }}>
      <div className={styles.container}>
        <SideBar />
        <Outlet />
        <SideSlider open={sliderDetails.open} content={sliderDetails.content} />
      </div>
    </AppContext.Provider>
  );
}

export default MainLayout;
