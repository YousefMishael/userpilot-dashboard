import React from "react";
import { TableCell } from "@mui/material";

function CustomTabelCell({ title, styles, desc }) {
  return (
    <TableCell>
      <div className={styles.contactContainer}>
        <span className={styles.rowTtitle}>{title}</span>
        <span className={styles.rowDesc}>{desc}</span>
      </div>
    </TableCell>
  );
}

export default CustomTabelCell;
