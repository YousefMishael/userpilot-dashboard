import { makeStyles } from "@mui/styles";

export const useCustomTableStyles = makeStyles((theme) => ({
  cTableContainer: {
    display: "flex",
    flexDirection: "column",
  },

  tableHeader: {
    "& .MuiTableCell-head": {
      fontFamily: theme.typography.fontFamily,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "18px",
      /* identical to box height */

      letterSpacing: "0.2px",

      /* grayscale / gray */

      color: theme.palette.primary.tableHeadColor,
    },
    "& .MuiTableCell-head:nth-child(1)": {
      paddingInlineStart: "32px",
    },
  },
  tbody: {
    "& .MuiTableCell-body": {
      cursor: "pointer",
    },
    "& .MuiTableRow-root:hover": {
      background: theme.palette.primary.ticketsBorderCol,
    },
  },

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
    fontSize: "14px",
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
    fontSize: "12px",
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

  tableActionsCon: {
    marginTop: "27px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: "0 32px 30px 32px",
  },

  selectLabel: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    /* or 143% */

    letterSpacing: "0.3px",

    /* grayscale / gray */

    color: theme.palette.primary.tableHeadColor,
  },

  arrow: {
    color: theme.palette.primary.tableHeadColor,
    cursor: "pointer",
  },
}));
