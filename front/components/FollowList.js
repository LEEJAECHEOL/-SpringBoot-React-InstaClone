import { Button } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { followPost, followDelete } from "../actions/user";

const FollowListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  div {
    :first-child {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      span {
        margin-left: 10px;
        font-size: 16px;
      }
    }
  }
`;

const FollowList = ({ follow, profileId }) => {
  const dispatch = useDispatch();
  const followBtn = useCallback(() => {
    const data = {
      id: follow.userId, // follow할 아이디
      profileId: profileId, // 현재 프로필 id
    };
    dispatch(followPost(data));
  }, []);

  // unfollow 버튼
  const unfollowBtn = useCallback(() => {
    const data = {
      id: follow.userId, // follow할 아이디
      profileId: profileId, // 현재 프로필 id
    };
    dispatch(followDelete(data));
  }, []);
  return (
    <>
      <FollowListContainer>
        <div>
          <img
            src={
              follow.profileImageUrl !== null
                ? process.env.imageUrl + follow.profileImageUrl
                : "/images/noprofile.jpg"
            }
            alt=""
          />
          <span>{follow.username}</span>
        </div>
        <div>
          {follow.equalState === 0 ? (
            follow.followState === 1 ? (
              <Button onClick={unfollowBtn}>구독취소</Button>
            ) : (
              <Button type="primary" onClick={followBtn}>
                구독하기
              </Button>
            )
          ) : null}
        </div>
      </FollowListContainer>
    </>
  );
};

export default FollowList;
