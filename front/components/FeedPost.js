import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { FeedCard } from "./style";

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
const FeedPost = ({ post }) => {
  const onFinish = () => {};

  return (
    <>
      <FeedCard
        title={
          <>
            <div className="feed-profile">
              <img
                src={
                  post.user.profileImageUrl !== null
                    ? process.env.imageUrl + post.user.profileImageUrl
                    : "/images/noprofile.jpg"
                }
                alt="profile"
              />
              <svg>
                <circle cx="20" cy="20" r="18" />
              </svg>
            </div>
            <span>{post.user.username}</span>
          </>
        }
      >
        <div className="feed-image">
          <img src={process.env.imageUrl + post.postImageUrl} alt="mainImage" />
        </div>
        <div className="feed-like">
          <span className="feed-like-btn">
            {post.likeState ? <HeartFilled /> : <HeartOutlined />}
          </span>
          <span className="feed-like-count">
            <b>{post.likeCount}</b> likes
          </span>
        </div>
        <div className="feed-tag">
          {post.tags.map((tag) => (
            <>
              <span key={"tag-" + tag.id}>#{tag.name}</span>
            </>
          ))}
        </div>
        <div className="feed-content">{post.caption}</div>
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
