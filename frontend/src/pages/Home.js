import React from "react";
import { PageHeader, Button } from "antd";

const Home = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Homepage"
        extra={[<Button key="3" href="/"></Button>]}
      />
    </div>
  );
};

export default Home;
