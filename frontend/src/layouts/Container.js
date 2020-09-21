import React, { useState } from "react";
import { Layout, Button } from "antd";
import { Route, Link, Switch, useHistory, withRouter } from "react-router-dom";
import api from "../services/api";

import { Navbar } from "./index";
import { Home, Login } from "../pages";

const { Content } = Layout;

const Container = withRouter((props) => {
  let history = useHistory();

  return (
    <Switch>
      <Layout>
        <Navbar />

        <Content
          style={{
            margin: "12px 8px",
            padding: 0,
            background: "#fff",
            minHeight: "calc(100vh - 114px)",
          }}
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Content>
      </Layout>
    </Switch>
  );
});

export default Container;
