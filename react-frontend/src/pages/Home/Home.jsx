import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
  selectCurrentUserId,
} from "../../features/auth/authSlice";

const Home = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const id = useSelector(selectCurrentUserId);
  console.log(id + "-" + user + "-" + token);
  return (
    <>
      <div className="home-layout">
        <Header />
      </div>
    </>
  );
};

export default Home;
