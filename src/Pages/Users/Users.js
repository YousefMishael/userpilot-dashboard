import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { useUsersStyles } from "./UsersStyles";
import PageHeader from "../../Components/PageHeader/PageHeader";
import CustomTable from "../../Components/CustomTable/CustomTable";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Outlet, useLoaderData } from "react-router-dom";
import {
  genders,
  nationalities,
  getUsers,
  DEFAULT_TABLE_ROWS_NUM,
} from "./Utils/Utils";
import { useDebounce } from "../../Utils/Utils";
import { useNavigate } from "react-router-dom";
import TableCells from "./SubComponents/TabelCells";

function Users() {
  const theme = useTheme();
  const styles = useUsersStyles(theme);
  //get initial values from loader (by fetching data from api when route)
  const [users, setUsers] = useState(useLoaderData());
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState({
    code: "",
    name: "",
  });
  const navigate = useNavigate();
  const firstRender = useRef(true);

  //used to call API after 300ms of entering filter value to avoid calling API on every chacter entering
  const debouncedGender = useDebounce(gender, 300);
  const debouncedNationality = useDebounce(nationality, 300);

  //show user by changing url and passing selected record data by router dom state to avoid calling api for the exist user data
  function handleShowUserDetails(user) {
    navigate(`/users/${user.id.value}`, { state: { user } });
  }

  async function getAllUsers(rowNum, page) {
    let users = await getUsers(
      rowNum,
      { gender, nationality: nationality?.code }, //filter by
      page
    );
    setUsers(users);
  }

  useEffect(() => {
    if (!firstRender.current) {
      getAllUsers();
    }
    firstRender.current = false;
  }, [debouncedGender, debouncedNationality]);

  function handelFilter(type, val, newVal) {
    if (type === "gender") {
      setGender(newVal);
    } else {
      console.log(type, val, newVal);
      //filter by nationality
      if (typeof newVal === "string") {
        setNationality({
          code: newVal,
          name: newVal,
        });
      } else {
        setNationality(newVal);
      }
    }
  }

  return (
    <>
      <div className={styles.usersContainer}>
        <PageHeader title={"Users"} />

        <div className={styles.ticketsContainer}>
          <div className={styles.ticketsHead}>
            <span className={styles.ticketTitle}>All Users</span>
            <div className={styles.filterContainer}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                options={genders}
                style={{ zIndex: 0, width: "197.12px" }}
                size={"small"}
                value={gender}
                onChange={handelFilter.bind(null, "gender")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size={"small"}
                    label="Gender"
                    variant="outlined"
                  />
                )}
              />

              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                options={nationalities}
                style={{ zIndex: 0, width: "197.12px" }}
                size={"small"}
                getOptionLabel={(option) => option?.name || ""}
                renderOption={(props, option) => (
                  <li {...props} key={option?.code}>
                    {option?.name}
                  </li>
                )}
                onChange={handelFilter.bind(null, "nationality")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size={"small"}
                    label="Nationality"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>
          <CustomTable
            defaultRowsNum={DEFAULT_TABLE_ROWS_NUM}
            getData={getAllUsers}
            data={<TableCells data={users} showUser={handleShowUserDetails} />}
            headers={[
              "Users",
              "Contact Information",
              "Registration Date",
              "Country/Post Code",
            ]}
          />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default React.memo(Users);
