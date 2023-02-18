import React from "react";
import { useTheme } from "@mui/material/styles";
import { useUsersStyles } from "./UsersStyles";
import PageHeader from "../../Components/PageHeader/PageHeader";

function Users() {
  const theme = useTheme();
  const styles = useUsersStyles(theme);

  return (
    <div className={styles.usersContainer}>
      <PageHeader title={"Users"} />
    </div>
  );
}

export default Users;
