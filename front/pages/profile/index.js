import { Row } from "antd";
import React from "react";
import AppLayout from "../../components/AppLayout";
import ProfileInfo from "../../components/ProfileInfo";
import { ExploreCol } from "../../style";

const profile = () => {
  return (
    <>
      <AppLayout>
        <ProfileInfo />
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

export default profile;
