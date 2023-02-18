import React from "react";
import { useTheme } from "@mui/material/styles";
import { useCustomTableStyles } from "./CustomTableStyles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function CustomTable() {
  const theme = useTheme();
  const styles = useCustomTableStyles();

  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24),
    createData("Ice cream sandwich", 237, 9.0, 37),
    createData("Eclair", 262, 16.0, 24),
    createData("Cupcake", 305, 3.7, 67),
    createData("Gingerbread", 356, 16.0, 49),
  ];

  return (
    <div className={styles.cTableContainer}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={styles.tableHeader}>
              <TableCell>User</TableCell>
              <TableCell>Contact Information</TableCell>
              <TableCell>Registration Date</TableCell>
              <TableCell>Country/Post Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.tbody}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "& .MuiTableCell-body:nth-child(1)": {
                    paddingInlineStart: "32px",
                  },
                }}
              >
                <TableCell>
                  <div className={styles.nameContainer}>
                    <img
                      src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
                      alt="user"
                    />
                    <div className={styles.nameWrapper}>
                      <span className={styles.rowTtitle}>Bessie Cooper</span>
                      <span className={styles.rowDesc}>29/72 asdas</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={styles.contactContainer}>
                    <span className={styles.rowTtitle}>
                      yousef.mishael1998@gmail.com
                    </span>
                    <span className={styles.rowDesc}>0592222889</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={styles.contactContainer}>
                    <span className={styles.rowTtitle}>May 25, 2019</span>
                    <span className={styles.rowDesc}>6:30 PM</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={styles.contactContainer}>
                    <span className={styles.rowTtitle}>Palestine</span>
                    <span className={styles.rowDesc}>Jerusalem</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.tableActionsCon}>
        <span className={styles.selectLabel}>Rows per page:&nbsp;&nbsp;</span>
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            width: "65px",
            height: "18px",
          }}

          // value={age}
          // onChange={handleChange}
          // input={<BootstrapInput />}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
        <span>
          <ArrowBackIosIcon className={styles.arrow} />
        </span>
        <span>
          <ArrowForwardIosIcon className={styles.arrow} />
        </span>
      </div>
    </div>
  );
}

export default React.memo(CustomTable);
