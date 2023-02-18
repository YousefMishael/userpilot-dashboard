import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";
import { useTheme } from "@mui/material/styles";
import { useMainLayoutStyle } from "./MainLayoutStyles";
import SideSlider from "../../Components/SideSlider/SideSlider";

function MainLayout() {
  const theme = useTheme();
  const styles = useMainLayoutStyle(theme);

  return (
    <div className={styles.container}>
      <SideBar />
      <Outlet />
      <SideSlider />
    </div>
  );
}

export default MainLayout;
