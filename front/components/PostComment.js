import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentDelete } from "../actions/post";

const PostComment = ({ postId, comment }) => {
  const { principal } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const deleteComment = useCallback(() => {
    const data = {
      postId: postId,
      id: comment.id,
    };
    dispatch(commentDelete(data));
  }, []);

  return (
    <p>
      <span className="feed-comment-username">{comment.user.username}</span> :{" "}
      {comment.content}
      {principal.id === comment.user.id ? (
        <Button type="text" icon={<DeleteOutlined />} onClick={deleteComment} />
      ) : null}
    </p>
  );
};

export default PostComment;
