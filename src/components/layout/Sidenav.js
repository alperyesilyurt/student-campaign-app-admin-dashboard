import {
  AppstoreOutlined,
  UserAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
  AppleOutlined,
  TagOutlined,
  MailOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Sidenav({ color }) {
  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        <span> Dashboard</span>
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
          <NavLink to="/users">
            <span className="icon">
              <UsergroupAddOutlined />
            </span>
            <span className="label">Users</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/companies">
            <span className="icon">
              <AppleOutlined />
            </span>
            <span className="label">Companies</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/campaigns">
            <span className="icon">
              <TagOutlined />
            </span>
            <span className="label">Campaigns</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/mails">
            <span className="icon">
              <MailOutlined />
            </span>
            <span className="label">Mails</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="6-1">
          <NavLink to="/contacts">
            <span className="icon">
              <MailOutlined />
            </span>
            <span className="label">Contacts</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item className="menu-item-header" key="6">
          Account Pages
        </Menu.Item>
        <Menu.Item key="7">
          <NavLink to="/profile">
            <span className="icon">
              <UserOutlined />
            </span>
            <span className="label">Profile</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="8">
          <NavLink to="/sign-in">
            <span className="icon">
              <UserAddOutlined />
            </span>
            <span className="label">Sign In</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="9">
          <NavLink to="/sign-up">
            <span className="icon" style={{ color }}>
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
