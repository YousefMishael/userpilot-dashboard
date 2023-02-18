import React from "react";
import { useTheme } from "@mui/material/styles";
import { useUsersStyles } from "./UsersStyles";
import PageHeader from "../../Components/PageHeader/PageHeader";
import CustomTable from "../../Components/CustomTable/CustomTable";
import TextField from "@mui/material/TextField";

function Users() {
  const theme = useTheme();
  const styles = useUsersStyles(theme);

  return (
    <div className={styles.usersContainer}>
      <PageHeader title={"Users"} />

      <div className={styles.ticketsContainer}>
        <div className={styles.ticketsHead}>
          <span className={styles.ticketTitle}>All Users</span>
          <div className={styles.filterContainer}>
            <TextField label="Gender" variant="outlined" size={"small"} />
            <TextField label="Nationality" variant="outlined" size={"small"} />
          </div>
        </div>
        <CustomTable />
      </div>
    </div>
  );
}

export default Users;
