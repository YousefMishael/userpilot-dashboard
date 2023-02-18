import React from "react";
import { useTheme } from "@mui/material/styles";
import { useUserDetailSliderStyles } from "./UserDetailSliderStyles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useAppContext } from "../../../Utils/Utils";

function UserDetailSlider() {
  const theme = useTheme();
  const styles = useUserDetailSliderStyles(theme);
  const context = useAppContext();

  function closeSlide() {
    context.setSliderDetails({
      ...context.sliderDetails,
      open: false,
    });
  }

  return (
    <div className={styles.userSldrContainer}>
      <ArrowBackIosIcon className={styles.back} onClick={closeSlide} />
      <div className={styles.sldrBgImg} />
      <div className={styles.sldrContent}>
        <div className={styles.sldrConWrapper}>
          <img
            className={styles.avatar}
            alt="Jones Ferdinand"
            src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
          />
          <div className={styles.name}>Name</div>
          <p className={styles.desc}>Description</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetailSlider;
