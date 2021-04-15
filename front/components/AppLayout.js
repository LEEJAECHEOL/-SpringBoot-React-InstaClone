import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import MyHeader from "./MyHeader";
import { Global } from "./style";

const AppLayout = ({ children }) => {
  return (
    <>
      <Global />
      <MyHeader />
      <Content>
        <Row gutter={8}>
          <Col xs={24} md={4} xl={6}></Col>
          <Col xs={24} md={16} xl={12}>
            {children}
          </Col>
          <Col xs={24} md={4} xl={6}></Col>
        </Row>
      </Content>
    </>
  );
};

export default AppLayout;
