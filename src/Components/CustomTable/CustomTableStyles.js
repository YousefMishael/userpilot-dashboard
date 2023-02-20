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
      fontSize: theme.typography.fontSize,
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
    fontSize: theme.typography.fontSize,
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
