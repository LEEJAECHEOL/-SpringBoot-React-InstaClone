import { SettingOutlined, UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileCard, ButtonModal } from "./style";
import { useRouter } from "next/router";
import { changeProfileImage } from "../actions/user";

const ProfileInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const principal = useSelector((state) => state.user.principal);
  // setting modal
  const [isSettingModalVisible, setIsSettingModalVisible] = useState(false);
  const showSettingModal = useCallback(() => {
    if (id === (principal && principal.id)) {
      setIsSettingModalVisible(true);
    } else {
      alert("사용 권한이 없습니다.");
    }
  }, []);
  const handleSettingCancel = useCallback(() => {
    setIsSettingModalVisible(false);
  }, []);

  // profileImage Select modal
  const [
    isProfileSelectModalVisible,
    setIsProfileSelectModalVisible,
  ] = useState(false);
  const showProfileSelectModal = useCallback(() => {
    console.log(id);
    setIsProfileSelectModalVisible(true);
  }, [id]);
  const handleProfileSelectCancel = useCallback(() => {
    setIsProfileSelectModalVisible(false);
  }, []);
  // 이미지 변경 버튼 누를 시
  const clickProfileImage = useCallback(() => {
    setIsProfileSelectModalVisible(false);
    document.querySelector("#input-file-image").click();
  }, []);
  // 이미지 선택 후 input file 이 onChange가 되는 경우
  const onChangeProfileImage = useCallback(
    (e) => {
      const data = {
        id: id,
        file: e.target.files[0],
      };
      dispatch(changeProfileImage(data));
    },
    [id]
  );

  return (
    <>
      <ProfileCard bordered={false}>
        <div className="profile-image">
          <input
            type="file"
            id="input-file-image"
            name="file"
            onChange={onChangeProfileImage}
            accept="image/*"
          />
          <div>
            <img
              src={
                principal &&
                (principal.profileImageUrl !== null
                  ? process.env.imageUrl + principal.profileImageUrl
                  : "/images/noprofile.jpg")
              }
              alt="profileImage"
              onClick={showProfileSelectModal}
            />
          </div>
        </div>
        <div className="profile-info">
          <div>
            <div className="profile-info-username-group">
              <span>{principal && principal.username}</span>
              <Button>
                <Link href="/write">
                  <a>사진등록</a>
                </Link>
              </Button>
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
            <div className="profile-info-name-group">
              {principal && principal.name}
            </div>
          </div>
        </div>
      </ProfileCard>
      {/* setting modal */}
      <ButtonModal
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
      </ButtonModal>
      {/* profile select modal */}
      {principal &&
        (id == principal.id ? (
          <ButtonModal
            footer={false}
            centered={true}
            closable={false}
            visible={isProfileSelectModalVisible}
            onCancel={handleProfileSelectCancel}
          >
            <h2 className="modal-header">프로필 사진 바꾸기</h2>
            <Button type="text" onClick={clickProfileImage}>
              사진업로드
            </Button>
            {principal && principal.profileImageUrl && (
              <Button
                type="text"
                className="red"
                onClick={handleProfileSelectCancel}
              >
                현재 사진 삭제
              </Button>
            )}
            <Button type="text" onClick={handleProfileSelectCancel}>
              취소
            </Button>
          </ButtonModal>
        ) : null)}
    </>
  );
};

export default ProfileInfo;
