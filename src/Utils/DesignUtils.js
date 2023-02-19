import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#363740",
      sideTextColor: "#dde2ff",
      sideHover: "#363749",
      secondary: "#e5e5e5",
      backgroundColor: "#F7F8FC",
      tableRowTitleColor: "#252733",
      tableRowDescColor: "#C5C7CD",
      white: "#ffffff",
      ticketsBorderCol: "#DFE0EB",
      tableHeadColor: "#9FA2B4",
      sldrHeadBgClr: "#2050AD",
      sldrDescClr: "#87888C",
      linkShadow: "rgba(221, 226, 255, 0.3)",
      linkHoverShadow: "rgba(0, 0, 0, 0.3)",
    },
  },
  typography: {
    fontFamily: "Mulish",
  },
});
