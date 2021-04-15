import { HeartOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { FeedCard } from "./style";

// 나중에 서버 연동할 때 컴포넌트로 분리할 예정
const feedTitle = (url, username) => {
  return (
    <>
      <div className="feed-profile">
        <img src={url} alt="profile" />
        <svg>
          <circle cx="20" cy="20" r="18" />
        </svg>
      </div>
      <span>{username}</span>
    </>
  );
};

// 나중에 서버 연동할 때 컴포넌트로 분리할 예정
const commentContent = (username, msg) => {
  return (
    <>
      <p>
        <span className="feed-comment-username">{username}</span> : {msg}
      </p>
    </>
  );
};

// 게시물
const FeedPost = () => {
  const onFinish = () => {};
  return (
    <>
      <FeedCard title={feedTitle("/images/profile.jpeg", "ccccc")}>
        <div className="feed-image">
          <img src="/images/profile.jpeg" alt="mainImage" />
        </div>
        <div className="feed-like">
          <span className="feed-like-btn">
            <HeartOutlined />
          </span>
          <span className="feed-like-count">
            <b>2</b> likes
          </span>
        </div>
        <div className="feed-tag">
          <span>#tag1</span>
          <span>#tag1</span>
        </div>
        <div className="feed-content">내용입니다 ㅎㅎ</div>
        <div className="feed-comment">
          {commentContent("username", "내용입니다.")}
          {commentContent("username", "내용입니다.")}
          {commentContent("username", "내용입니다.")}
        </div>
        <Form onFinish={onFinish}>
          <Form.Item name="content">
            <Input placeholder="댓글 달기..." />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">게시</Button>
          </Form.Item>
        </Form>
      </FeedCard>
    </>
  );
};

export default FeedPost;
