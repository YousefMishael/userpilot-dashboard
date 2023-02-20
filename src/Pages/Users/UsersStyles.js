import { makeStyles } from "@mui/styles";

export const useUsersStyles = makeStyles((theme) => ({
  usersContainer: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    background: theme.palette.primary.backgroundColor,
    marginBottom: "32px",
  },

  ticketsContainer: {
    marginTop: "58px",
    background: theme.palette.primary.white,
    border: `1px solid ${theme.palette.primary.ticketsBorderCol}`,
    marginInlineStart: "30px",
    marginInlineEnd: "33px",
  },

  ticketsHead: {
    display: "flex",
    justifyContent: "space-between",
    height: "40px",
    alignItems: "center",
    marginBottom: "45px",
  },
  ticketTitle: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: theme.typography.lFontSize,
    lineHeight: "24px",
    marginTop: "32px",
    marginInlineStart: "32px",
    /* identical to box height */

    letterSpacing: "0.4px",

    /* grayscale / black */

    color: theme.palette.primary.tableRowTitleColor,
  },

  filterContainer: {
    display: "flex",
    gap: "13.77px",
    marginInlineEnd: "19px",
    marginTop: "19px",
  },
}));
