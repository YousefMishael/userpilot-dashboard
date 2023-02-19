import { makeStyles } from "@mui/styles";

export const useUserDetailSliderStyles = makeStyles((theme) => ({
  userSldrContainer: {
    width: "100%",
    height: "100%",
    background: "#FFFFFF",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    position: "relative",

    //PC
    [theme.breakpoints.up("md")]: {
      width: "545px",
    },
  },

  sldrBgImg: {
    width: "100%",
    height: "158px",
    background: theme.palette.primary.sldrHeadBgClr,

    //PC
    [theme.breakpoints.up("md")]: {
      width: "546px",
    },
  },

  sldrContent: {
    position: "relative",
  },

  sldrConWrapper: {
    position: "absolute",
    width: "345.5px",
    height: "335.5px",
    left: "50%",
    top: "-66px",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    width: "132px",
    height: "132px",
    borderRadius: "50%",
  },

  name: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "20px",
    marginTop: "22px",
    /* identical to box height, or 111% */

    textAlign: "center",
    letterSpacing: "0.2px",

    /* grayscale / black */

    color: theme.palette.primary.tableRowTitleColor,
  },

  desc: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    /* identical to box height, or 114% */

    textAlign: "center",
    letterSpacing: "0.1px",
    marginTop: "10px",

    color: theme.palette.primary.sldrDescClr,
  },

  back: {
    position: "absolute",
    left: "32px",
    top: "37px",
    cursor: "pointer",
    color: theme.palette.primary.sideTextColor,
  },
}));
