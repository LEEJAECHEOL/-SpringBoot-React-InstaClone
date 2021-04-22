import { SettingOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileCard, ButtonModal } from "./style";
import { useRouter } from "next/router";
import {
  changeProfileImage,
  followPost,
  followDelete,
  followListGet,
} from "../actions/user";
import userSlice from "../reducers/userSlice";
import FollowList from "./FollowList";

const ProfileInfo = ({ profile }) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const {
    principal,
    isFollowPostLoading,
    isFollowDeleteLoading,
    followList,
  } = useSelector((state) => state.user);

  console.log(followList);

  // setting modal
  const [isSettingModalVisible, setIsSettingModalVisible] = useState(false);
  const showSettingModal = useCallback(() => {
    if (id == (principal && principal.id)) {
      setIsSettingModalVisible(true);
    } else {
      alert("사용 권한이 없습니다.");
    }
  }, [id]);
  const handleSettingCancel = useCallback(() => {
    setIsSettingModalVisible(false);
  }, []);

  // profileImage Select modal
  const [
    isProfileSelectModalVisible,
    setIsProfileSelectModalVisible,
  ] = useState(false);
  const showProfileSelectModal = useCallback(() => {
    if (id == (principal && principal.id)) {
      setIsProfileSelectModalVisible(true);
    }
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

  const logoutBtn = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  // follow 버튼
  const followBtn = useCallback(() => {
    const data = {
      id: id, // follow할 아이디
      profileId: null, // 현재 프로필 id (null : 다른 프로필에서 팔로우 리스트에서 아닌 구독 하기누를때)
    };
    dispatch(followPost(data));
  }, [id]);

  // unfollow 버튼
  const unfollowBtn = useCallback(() => {
    const data = {
      id: id, // follow할 아이디
      profileId: null, // 현재 프로필 id (null : 다른 프로필에서 팔로우 리스트에서 아닌 구독 취소누를때)
    };
    dispatch(followDelete(data));
  }, [id]);

  // follow List
  const [isFollowListModalVisible, setIsFollowListModalVisible] = useState(
    false
  );
  // FollowList 모달창 뛰우기
  const followListBtn = useCallback(() => {
    const data = {
      id: id,
    };
    dispatch(followListGet(data));
    setIsFollowListModalVisible(true);
  }, [id]);

  const handleFollowListCancel = useCallback(() => {
    setIsFollowListModalVisible(false);
  }, []);
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
                profile && principal && profile.user.id !== principal.id
                  ? profile.user.profileImageUrl !== null
                    ? process.env.imageUrl + profile.user.profileImageUrl
                    : "/images/noprofile.jpg"
                  : principal && principal.profileImageUrl !== null
                  ? process.env.imageUrl + principal.profileImageUrl
                  : "/images/noprofile.jpg"
              }
              alt="profileImage"
              onClick={showProfileSelectModal}
            />
          </div>
        </div>
        <div className="profile-info">
          <div>
            <div className="profile-info-username-group">
              <span>{profile && profile.user.username}</span>
              {principal && id == principal.id ? (
                <>
                  <Button>
                    <Link href="/write">
                      <a>사진등록</a>
                    </Link>
                  </Button>
                  <SettingOutlined onClick={showSettingModal} />
                </>
              ) : (
                <>
                  {profile && profile.followState ? (
                    <Button
                      onClick={unfollowBtn}
                      loading={isFollowDeleteLoading}
                    >
                      구독취소
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      onClick={followBtn}
                      loading={isFollowPostLoading}
                    >
                      구독하기
                    </Button>
                  )}
                </>
              )}
            </div>
            <div className="profile-info-follow-group">
              <span>
                게시물 <b>{profile && profile.postCount}</b>
              </span>
              <span className="profile-info-follow" onClick={followListBtn}>
                구독정보 <b>{profile && profile.followCount}</b>
              </span>
            </div>
            <div className="profile-info-name-group">
              {profile && profile.user.name}
              <p>{profile && profile.user.intro}</p>
            </div>
          </div>
        </div>
      </ProfileCard>
      {/* follow List modal */}
      <Modal
        title="구독 정보"
        footer={false}
        visible={isFollowListModalVisible}
        onCancel={handleFollowListCancel}
      >
        {followList.length !== 0 ? (
          followList.map((follow, index) => (
            <FollowList
              key={index}
              follow={follow}
              profileId={profile.user.id}
            />
          ))
        ) : (
          <p>구독 리스트가 비었습니다.</p>
        )}
      </Modal>

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
        <Button type="text" onClick={logoutBtn}>
          로그아웃
        </Button>
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
