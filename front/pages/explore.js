import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Col, Row } from "antd";
import styled from "styled-components";

const ExploreCol = styled(Col)`
  position: relative;
  img {
    width: 100%;
  }
`;

const explore = () => {
  return (
    <>
      <Head>
        <title>탐색 | InstaClone</title>
      </Head>
      <AppLayout>
        <Row gutter={[8, 8]}>
          <ExploreCol span={8}>
            <img src="/images/profile.jpeg" alt="" />
          </ExploreCol>
          <ExploreCol span={8}>
            <img src="/images/cat1.jpg" alt="" />
          </ExploreCol>
          <ExploreCol span={8}>
            <img src="/images/profile.jpeg" alt="" />
          </ExploreCol>
          <ExploreCol span={8}>
            <img src="/images/profile.jpeg" alt="" />
          </ExploreCol>
          <ExploreCol span={8}>
            <img src="/images/profile.jpeg" alt="" />
          </ExploreCol>
          <ExploreCol span={8}>
            <img src="/images/profile.jpeg" alt="" />
          </ExploreCol>
          <ExploreCol span={8}>
            <img src="/images/profile.jpeg" alt="" />
          </ExploreCol>
          <ExploreCol span={8}>
            <img src="/images/profile.jpeg" alt="" />
          </ExploreCol>
        </Row>
      </AppLayout>
    </>
  );
};

export default explore;
