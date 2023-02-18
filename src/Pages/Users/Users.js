import React from "react";
import { useTheme } from "@mui/material/styles";
import { useUsersStyles } from "./UsersStyles";
import PageHeader from "../../Components/PageHeader/PageHeader";
import CustomTable from "../../Components/CustomTable/CustomTable";
import TextField from "@mui/material/TextField";
import { useAppContext } from "../../Utils/Utils";
import UserDetailSlider from "./SubComponents/UserDetailSlider";

function Users() {
  const theme = useTheme();
  const styles = useUsersStyles(theme);
  const context = useAppContext();

  function handleShowUserDetails(id) {
    context.setSliderDetails({
      content: <UserDetailSlider userId={id} />,
      open: true,
    });
  }

  return (
    <div className={styles.usersContainer}>
      <PageHeader title={"Users"} />

      <div className={styles.ticketsContainer}>
        <div className={styles.ticketsHead}>
          <span className={styles.ticketTitle}>All Users</span>
          <div className={styles.filterContainer}>
            <TextField
              label="Gender"
              variant="outlined"
              size={"small"}
              style={{ zIndex: 0 }}
            />
            <TextField
              label="Nationality"
              variant="outlined"
              size={"small"}
              style={{ zIndex: 0 }}
            />
          </div>
        </div>
        <CustomTable showUser={handleShowUserDetails} />
      </div>
    </div>
  );
}

export default React.memo(Users);
