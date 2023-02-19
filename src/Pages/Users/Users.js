import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { useUsersStyles } from "./UsersStyles";
import PageHeader from "../../Components/PageHeader/PageHeader";
import CustomTable from "../../Components/CustomTable/CustomTable";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppContext } from "../../Utils/Utils";
import UserDetailSlider from "./SubComponents/UserDetailSlider";
import { request } from "../../Utils/ApiUtils";
import { genders, nationalities } from "./Utils/Utils";
import { useDebounce } from "../../Utils/Utils";

const DEFAULT_TABLE_ROWS_NUM = 8;

function Users() {
  const theme = useTheme();
  const styles = useUsersStyles(theme);
  const context = useAppContext();
  const [users, setUsers] = useState([]);
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const lastFetchType = useRef("normal");

  //used to call API after 300ms of entering filter value to avoid calling API on every chacter entering
  const debouncedGender = useDebounce(gender, 300);
  const debouncedNationality = useDebounce(nationality, 300);

  function handleShowUserDetails(user) {
    context.setSliderDetails({
      content: <UserDetailSlider user={user} />,
      open: true,
    });
  }

  async function getUsers(rowsNum = DEFAULT_TABLE_ROWS_NUM, page = 0) {
    let url;
    if (lastFetchType.current === "normal") {
      url = `https://randomuser.me/api?results=${rowsNum}`;
      if (page) url += "&page=" + page;
    } else {
      if (lastFetchType.current === "gender")
        url = `https://randomuser.me/api/?gender=${debouncedGender}`;
      else
        url = `https://randomuser.me/api?results=${rowsNum}&nat=${nationality.nat}`;
    }

    let resp = await request(url, "GET");

    if (resp.status === 200) setUsers(resp.data?.results);
  }

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (debouncedGender) {
      getUsers();
      lastFetchType.current = "filter";
    }
  }, [debouncedGender]);

  function handelFilter(type, val, newVal) {
    if (type === "gender") {
      if (typeof newVal === "string") {
        setGender(newVal);
      } else if (newVal && newVal.inputValue) {
        // Create a new value from the user input
        setGender(newVal.inputValue);
      } else {
        setGender(newVal);
      }
    } else {
      //filter by nationality
      if (typeof newVal === "string") {
        setNationality(newVal);
      } else if (newVal && newVal.inputValue) {
        // Create a new value from the user input
        setNationality(newVal.inputValue);
      } else {
        setNationality(newVal);
      }
    }
  }

  return (
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
                  // value={gender}
                  // onChange={handelFilter.bind(null, "gender")}
                  // style={{ zIndex: 0 }}
                />
              )}
            />

            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              options={nationalities}
              style={{ zIndex: 0, width: "197.12px" }}
              size={"small"}
              value={nationality}
              onChange={handelFilter.bind(null, "nationality")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size={"small"}
                  label="Nationality"
                  variant="outlined"
                  // value={gender}
                  // onChange={handelFilter.bind(null, "gender")}
                  // style={{ zIndex: 0 }}
                />
              )}
            />
          </div>
        </div>
        <CustomTable
          showUser={handleShowUserDetails}
          defaultRowsNum={DEFAULT_TABLE_ROWS_NUM}
          getData={getUsers}
          data={users}
        />
      </div>
    </div>
  );
}

export default React.memo(Users);
