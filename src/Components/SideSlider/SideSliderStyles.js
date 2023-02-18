import { makeStyles } from "@mui/styles";

export const useSideSliderStyles = makeStyles((theme) => ({
  sliderContainer: {
    position: "absolute",
    right: "0",
    border: "1px solid red",
    height: "100%",
    transform: "translateX(100%)",
  },
}));