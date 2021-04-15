import { SettingOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { ProfileCard } from "./style";

const SettingModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 10px;
  }
  .ant-modal-body {
    padding: 5px 0;
    button {
      width: 100%;
      height: 50px;
      :not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      :hover {
        background-color: #fff;
        color: #1890ff;
      }
    }
  }
`;
const FollowModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 10px;
  }
  .ant-modal-body {
    padding: 5px 0;
    button {
      width: 100%;
      height: 50px;
      :not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      :hover {
        background-color: #fff;
        color: #1890ff;
      }
    }
  }
`;

const ProfileInfo = () => {
  // setting modal
  const [isSettingModalVisible, setIsSettingModalVisible] = useState(false);
  const showSettingModal = () => {
    setIsSettingModalVisible(true);
  };
  const handleSettingCancel = () => {
    setIsSettingModalVisible(false);
  };

  return (
    <>
      <ProfileCard bordered={false}>
        <div className="profile-image">
          <div>
            <img src="/images/profile.jpeg" alt="" />
          </div>
        </div>
        <div className="profile-info">
          <div>
            <div className="profile-info-username-group">
              <span>username</span>
              <Button>사진등록</Button>
              <SettingOutlined onClick={showSettingModal} />
            </div>
            <div className="profile-info-follow-group">
              <span>
                게시물 <b>9</b>
              </span>
              <span className="profile-info-follow">
                구독정보 <b>9</b>
              </span>
            </div>
            <div className="profile-info-name-group">name</div>
          </div>
        </div>
      </ProfileCard>
      {/* setting modal */}
      <SettingModal
        footer={false}
        centered={true}
        closable={false}
        visible={isSettingModalVisible}
        onCancel={handleSettingCancel}
      >
        <Button type="text">
          <Link href="/profile/edit">
            <a>회원정보 변경</a>
          </Link>
        </Button>
        <Button type="text">로그아웃</Button>
        <Button type="text" onClick={handleSettingCancel}>
          취소
        </Button>
      </SettingModal>
    </>
  );
};

export default ProfileInfo;
