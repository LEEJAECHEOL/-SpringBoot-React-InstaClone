import React from "react";
import { CompassOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";

const MyHeader = () => {
  return (
    <>
      <Header>
        <Row>
          <Col xs={24} md={4} xl={6}></Col>
          <Col xs={24} md={16} xl={12}>
            <Menu mode="horizontal">
              <Menu.Item key={1}>
                <Link href="/">
                  <a>
                    <img alt="logo" className="logo" src="/images/logo.jpg" />
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item className="right-menu" key={2}>
                <Link href="/">
                  <a>
                    <HomeOutlined />
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key={3}>
                <Link href="/explore">
                  <a>
                    <CompassOutlined />
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key={4}>
                <Link href="/profile">
                  <a>
                    <UserOutlined />
                  </a>
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col xs={24} md={4} xl={6}></Col>
        </Row>
      </Header>
    </>
  );
};

export default MyHeader;
