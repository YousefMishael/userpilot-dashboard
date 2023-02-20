import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTabelCellsStyles } from "./TableCellsStyles";
import CustomTabelCell from "./CustomTabelCell";

function TableCells(props) {
  const theme = useTheme();
  const styles = useTabelCellsStyles(theme);

  function handleShowUser(user, e) {
    e.preventDefault();
    props.showUser(user);
  }

  console.log("1");

  return props.data.map((item, idx) => (
    <TableRow
      key={idx.toString()}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
      onClick={handleShowUser.bind(null, item)}
    >
      <TableCell>
        <div className={styles.nameContainer}>
          <img src={item.picture.thumbnail} alt="user" />
          <div className={styles.nameWrapper}>
            <span className={styles.rowTtitle}>
              {item.name.first} {item.name.last}
            </span>
            <span className={styles.rowDesc}>
              {item.location.street.name} {item.location.state},{" "}
              {item.location.city} {item.location.street.number}
            </span>
          </div>
        </div>
      </TableCell>
      <CustomTabelCell title={item.email} desc={item.cell} styles={styles} />
      <CustomTabelCell
        title={new Date(item.registered.date).toLocaleDateString("en-us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        desc={new Date(item.registered.date).toLocaleTimeString("en-us", {
          hour: "numeric",
          minute: "numeric",
        })}
        styles={styles}
      />
      <CustomTabelCell
        title={item.location.country}
        desc={item.location.postcode}
        styles={styles}
      />
    </TableRow>
  ));
}

export default TableCells;
