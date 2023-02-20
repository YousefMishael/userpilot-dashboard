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

  function handleShowUser(user, e) {
    e.preventDefault();
    props.showUser(user);
  }

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
          <TableBody className={styles.tbody}>
            {props.data.map((row, index) => (
              <TableRow
                key={index.toString()}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                onClick={handleShowUser.bind(null, row)}
              >
                <TableCell>
                  <div className={styles.nameContainer}>
                    <img src={row.picture.thumbnail} alt="user" />
                    <div className={styles.nameWrapper}>
                      <span className={styles.rowTtitle}>
                        {row.name.first} {row.name.last}
                      </span>
                      <span className={styles.rowDesc}>
                        {row.location.street.name} {row.location.state},{" "}
                        {row.location.city} {row.location.street.number}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={styles.contactContainer}>
                    <span className={styles.rowTtitle}>{row.email}</span>
                    <span className={styles.rowDesc}>{row.cell}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={styles.contactContainer}>
                    <span className={styles.rowTtitle}>
                      {new Date(row.registered.date).toLocaleDateString(
                        "en-us",
                        { month: "long", day: "numeric", year: "numeric" }
                      )}
                    </span>
                    <span className={styles.rowDesc}>
                      {new Date(row.registered.date).toLocaleTimeString(
                        "en-us",
                        { hour: "numeric", minute: "numeric" }
                      )}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={styles.contactContainer}>
                    <span className={styles.rowTtitle}>
                      {row.location.country}
                    </span>
                    <span className={styles.rowDesc}>
                      {row.location.postcode}
                    </span>
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
