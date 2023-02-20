import { makeStyles } from "@mui/styles";

export const useTabelCellsStyles = makeStyles((theme) => ({
  nameContainer: {
    display: "flex",
    alignItems: "center",
    gap: "24px",

    "& img": {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
    },
  },

  nameWrapper: {
    display: "flex",
    flexDirection: "column",
  },

  rowTtitle: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: theme.typography.fontSize,
    lineHeight: "20px",
    /* identical to box height, or 143% */

    letterSpacing: "0.2px",

    /* grayscale / black */

    color: theme.palette.primary.tableRowTitleColor,
  },

  rowDesc: {
    fontFamily: theme.typography.fontFamily,
    fontstyle: "normal",
    fontWeight: "400",
    fontSize: theme.typography.sFontSize,
    lineHeight: "16px",
    /* identical to box height, or 133% */

    letterSpacing: "0.1px",

    /* grayscale / gray light */

    color: theme.palette.primary.tableRowDescColor,
  },

  contactContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));
