import React, { useState } from "react";
import { Layout, Menu, Dropdown, Button, Space, Avatar } from "antd";
import { Link, useHistory } from "react-router-dom";
import api from "../services/api";
import { store } from "../services/store";
import Icon from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  let history = useHistory();

  const logoutHandler = (event) => {
    //dispatch({ type: "logout" });
    //api.signout();
    history.push("/login");
  };

  const userDropdownMenu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>
        <a
          onClick={(e) => {
            e.preventDefault();
            logoutHandler();
          }}
        >
          Sign out
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header>
      <Space align="start">
        <a href="/">Vault</a>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Markets</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Space>
      <div className="user-dropdown">
        <Avatar
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            marginRight: "20px",
          }}
        >
          U
        </Avatar>
        <Dropdown overlay={userDropdownMenu}>
          <a id="username" onClick={(e) => e.preventDefault()}>
            User
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
