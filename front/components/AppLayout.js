import {
  CompassOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Menu, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Link from "next/link";
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
