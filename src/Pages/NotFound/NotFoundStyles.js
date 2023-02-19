import { makeStyles } from "@mui/styles";

export const useNotFoundStyles = makeStyles((theme) => ({
  notFoundCon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    background: theme.palette.primary.main,
    width: "100vw",
    height: "100vh",

    "& h3": {
      color: theme.palette.primary.sideTextColor,
    },
  },

  img: {
    width: "250px",
    height: "250px",
    borderRadius: "5px",
  },

  link: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.sideTextColor,
    border: `1px solid ${theme.palette.primary.ticketsBorderCol}`,
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "300ms ease-in",
    boxShadow: `3px 3px 2px 1px ${theme.palette.primary.linkShadow}`,
    //     -webkit-box-shadow: 6px 4px 15px 1px rgba(0,0,0,0.71);
    // -moz-box-shadow: 6px 4px 15px 1px rgba(0,0,0,0.71);

    "&:hover": {
      background: theme.palette.primary.ticketsBorderCol,
      color: theme.palette.primary.main,
      boxShadow: `3px 3px 2px 1px ${theme.palette.primary.linkHoverShadow}, 
        4px 4px 3px 1px ${theme.palette.primary.linkHoverShadow}, 
        5px 5px 4px 1px ${theme.palette.primary.linkHoverShadow}`,
    },
  },
}));
