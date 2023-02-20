import React from "react";
import { useTheme } from "@mui/material/styles";
import { useUserDetailSliderStyles } from "./UserDetailSliderStyles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useAppContext } from "../../../Utils/Utils";

function UserDetailSlider({ user }) {
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
            src={user?.picture?.medium}
          />
          <div className={styles.name}>
            {user?.name?.first} {user?.name?.last}
          </div>
          <p className={styles.desc}>
            {user?.location?.street?.name} {user?.location?.state},{" "}
            {user?.location?.city} {user?.location?.street?.number}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetailSlider;
