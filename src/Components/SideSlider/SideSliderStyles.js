import { makeStyles } from "@mui/styles";

export const useSideSliderStyles = makeStyles((theme) => ({
  sliderContainer: {
    position: "absolute",
    right: "0",
    height: "100%",
    transition: "300ms ease-in",
    transform: "translateX(100%)",

    //PC
    [theme.breakpoints.down("md")]: {
      width: "100vw",
    },
  },

  openSlider: {
    transform: "translateX(0)",
  },
}));
