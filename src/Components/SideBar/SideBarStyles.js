import { makeStyles } from "@mui/styles";
import logo from "./logo-white-small.svg";

export const useSideBarStyles = makeStyles((theme) => ({
  menuBtn: {
    position: "absolute !important", //override mui button styles
    width: "15px",
    height: "32px",
    top: "37px",
    left: "80%",
    background: "red",
    zIndex: "1",
    //PC
    [theme.breakpoints.up("md")]: {
      display: "none !important", //override mui button styles
    },
  },
  sidebarContainer: {
    background: theme.palette.primary.main,
    width: "100%",
    position: "absolute",
    minHeight: "100vh",
    transform: "translateX(-100%)",
    transition: "300ms ease-in",
    zIndex: "1",

    //PC
    [theme.breakpoints.up("md")]: {
      width: "255px",
      position: "relative",
      transform: "translateX(0)",
    },
  },

  menuOpen: {
    transform: "translateX(0)",
  },

  logo: {
    width: "131px",
    height: "32px",
    background: `url(${logo})`,
    marginLeft: "50%",
    transform: "translateX(-50%)",
    marginTop: "37px",

    //PC
    [theme.breakpoints.up("md")]: {
      marginLeft: "0",
      transform: "translateX(0)",
      marginInlineStart: "54px",
    },
  },

  sideList: {
    listStyle: "none",
    marginTop: "59px",

    "& li": {
      display: "flex",
      alignItems: "center",
      height: "56px",
      cursor: "pointer",
      position: "relative",
    },

    "& li:hover": {
      background: theme.palette.primary.sideHover,
    },
  },

  active: {
    position: "absolute",
    content: "",
    left: "0",
    top: "0",
    bottom: "0",
    width: "3px",
    background: theme.palette.primary.sideTextColor,
  },

  icon: {
    width: "16px",
    height: "16px",
    marginLeft: "calc(50% - 59px)",
    transform: "translateX(-calc(50% - 59px))",
    color: theme.palette.primary.sideTextColor,
    //PC
    [theme.breakpoints.up("md")]: {
      marginLeft: "0",
      transform: "translateX(0)",
      marginInlineStart: "32px",
    },
  },

  title: {
    marginInlineStart: "24px",
    color: theme.palette.primary.sideTextColor,
  },
}));
