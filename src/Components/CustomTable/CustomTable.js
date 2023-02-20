import React, { useState, useRef } from "react";
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

function CustomTable(props) {
  const theme = useTheme();
  const styles = useCustomTableStyles(theme);
  const rowsNum = useRef(props.defaultRowsNum);
  const currPage = useRef(0);

  function onRowsChanged(e) {
    if (e.target.value === rowsNum.current) return;
    if ("getData" in props) {
      props.getData(e.target.value, currPage.current);
    }
    rowsNum.current = parseInt(e.target.value);
  }

  function onPageChanged(action) {
    //dont do any action if the fetch function didn't passed
    if (!("getData" in props)) return;

    if (action === "next") {
      props.getData(rowsNum.current, currPage.current + 1);
      currPage.current += 1;
    } else {
      if (currPage.current > 0) {
        props.getData(rowsNum.current, currPage.current - 1);
        currPage.current -= 1;
      }
    }
  }

  return (
    <div className={styles.cTableContainer}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={styles.tableHeader}>
              {props.headers.map((cell, idx) => (
                <TableCell key={idx.toString()}>{cell}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={styles.tbody}>{props.data}</TableBody>
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
          value={rowsNum.current}
          onChange={onRowsChanged}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
        <span>
          <ArrowBackIosIcon
            className={styles.arrow}
            onClick={onPageChanged.bind(null, "back")}
          />
        </span>
        <span>
          <ArrowForwardIosIcon
            className={styles.arrow}
            onClick={onPageChanged.bind(null, "next")}
          />
        </span>
      </div>
    </div>
  );
}

CustomTable.defaultProps = {
  headers: [],
  data: [],
  getData: () => {},
  showUser: () => {},
};

export default React.memo(CustomTable);
