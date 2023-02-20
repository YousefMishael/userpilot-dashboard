import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAppContext } from "../../Utils/Utils";
import { getUsers } from "../Users/Utils/Utils";
import UserDetailSlider from "./SubComponents/UserDetailSlider";

function User() {
  const { userId } = useParams();
  const location = useLocation();
  const context = useAppContext();

  function handleOpenSlider(user) {
    context.setSliderDetails({
      content: <UserDetailSlider user={user} />,
      open: true,
    });
  }

  async function getRandomUser() {
    let user = await getUsers(0);
    handleOpenSlider(user[0]);
  }

  console.log("11");

  useEffect(() => {
    let { state } = location;
    if (state && userId) {
      //user showed by clicking a record on table
      if ((state.user.id = userId)) {
        //show selected record from table
        handleOpenSlider(state.user);
      } else {
        //call api to get random user
        getRandomUser();
      }
    } else {
      //call api to get random user
      getRandomUser();
    }

    return () => {
      context.setSliderDetails({
        ...context.sliderDetails,
        open: false,
      });
    };
  }, [location]);

  return <div />;
}

export default User;
