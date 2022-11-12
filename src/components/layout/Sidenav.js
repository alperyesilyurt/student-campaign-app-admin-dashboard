import {
  AppstoreOutlined,
  TableOutlined,
  UserAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        <span>Dashboard</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/dashboard">
            <span className="icon">
              <AppstoreOutlined />
            </span>
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/tables">
            <span className="icon">
              <TableOutlined />
            </span>
            <span className="label">Tables</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/users">
            <span className="icon">
              <TableOutlined />
            </span>
            <span className="label">Users</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/companies">
            <span className="icon">
              <AppleOutlined />
            </span>
            <span className="label">Companies</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item className="menu-item-header" key="5">
          Account Pages
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to="/profile">
            <span className="icon">
              <UserOutlined />
            </span>
            <span className="label">Profile</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="7">
          <NavLink to="/sign-in">
            <span className="icon">
              <UserAddOutlined />
            </span>
            <span className="label">Sign In</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="8">
          <NavLink to="/sign-up">
            <span className="icon">
              <UserSwitchOutlined />
            </span>
            <span className="label">Sign Up</span>
          </NavLink>
        </Menu.Item>
      </Menu>
      <div className="aside-footer">
        <div
          className="footer-box"
          style={{
            background: color,
          }}
        >
          <span className="icon" style={{ color }}>
            <AppstoreOutlined />
          </span>
          <h6>Need Help?</h6>
          <p>Please check our docs</p>
          <Button type="primary" className="ant-btn-sm ant-btn-block">
            DOCUMENTATION
          </Button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
