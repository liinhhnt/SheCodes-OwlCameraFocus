import React from "react";
import "./style.scss";
import DashboardImage from "../../assets/image/DashboardImage";
import { useSignoutMutation } from "../../features/auth/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  logOut,
  selectCurrentUser,
  selectCurrentUserId,
} from "../../features/auth/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { selectCurrentRoles } from "../../features/auth/authSlice";
const Dashboard = (props) => {
  const {
    logo,
    settingIcon,
    logOutIcon,
  } = DashboardImage;
  const username = useSelector(selectCurrentUser);
  const roles = useSelector(selectCurrentRoles);
  const id = useSelector(selectCurrentUserId);
  const { active, setPage } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [logout] = useSignoutMutation();
  const items = [
    [
      {
        title: "Advanced Settings",
        icon: settingIcon,
        link: "/settings",
        page: "Settings",
      },
      { title: "Log Out", icon: logOutIcon },
    ],
  ];
  const handleLogOut = async () => {
    try {
      await logout(id);
      dispatch(logOut());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={active ? "dashboard closed" : "dashboard"}>
        <div className="dashboard-header">
          <div className="logo" onClick={() => navigate("/")}>
            {logo} <div className="title"> The Eleventh </div>
          </div>
        </div>
        <div className="dashboard-body">
          {items.map((section, index) => {
            if (roles.includes("ROLE_ADMIN") && index === 1) {
              return <></>;
            }
            if (!roles.includes("ROLE_ADMIN") && index === 2) {
              return <></>;
            }
            return (
              <>
                <ul id="section" className={"section_" + index} key={index}>
                  {section.map((item, index) => {
                    return (
                      <>
                        <li
                          key={index}
                          className={
                            item.title !== "Log Out" &&
                            location.pathname === item.link
                              ? "option active"
                              : "option"
                          }
                          onClick={() => {
                            if (item.title === "Log Out") handleLogOut();
                            else {
                              setPage(item.page);
                              navigate(item.link);
                            }
                          }}
                        >
                          <div className="icon">{item.icon}</div>
                          <div className="title">{item.title}</div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
        <div className="dashboard-footer">
          <img
            src="https://thuthuatnhanh.com/wp-content/uploads/2022/06/Hinh-anh-meme-cheems-ngau.jpg"
            alt="wow"
          />
          <div className="title"> {username} </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
