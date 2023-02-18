import { makeStyles } from "@mui/styles";

export const usePageHeaderStyles = makeStyles((theme) => ({
  headerCon: {
    display: "flex",
    backgroud: theme.palette.primary.secondary,
    justifyContent: "space-between",
    // width: "100%",
    flex: 1,
  },

  title: {
    marginTop: "37px",
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "30px",
    letterSpacing: "0.3px",
    marginInlineStart: "30px",

    /* grayscale / black */

    color: theme.palette.primary.titleColor,
  },

  profCon: {
    marginTop: "69px",
    marginInlineEnd: "33px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    gap: "14px",

    //PC
    [theme.breakpoints.up("md")]: {
      marginTop: "37px",
    },
  },

  name: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "20px",
    /* or 143% */

    textAlign: "right",
    letterSpacing: "0.2px",

    /* grayscale / black */

    color: theme.palette.primary.titleColor,
  },

  avatar: {
    zIndex: "-1",
  },
}));
