import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import FeedPost from "../components/FeedPost";
import { get } from "../actions/post";
import { LoadingOutlined } from "@ant-design/icons";
import { LoadingDiv } from "../style";

const Home = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { lastPage, posts, isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(get(page)); // 페이지 진입 시 post데이터 가져오기
  }, []);
  // 스크롤링
  useEffect(() => {
    function onScroll() {
      if (
        window.pageYOffset + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 50
      ) {
        if (!lastPage && !isLoading) {
          setPage((prev) => prev + 1);
          dispatch(get(page + 1));
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [lastPage, isLoading, posts, page]);
  return (
    <>
      <AppLayout>
        {posts.map((post) => (
          <FeedPost key={"post-" + post.id} post={post} />
        ))}
        {isLoading ? (
          <LoadingDiv key="loading">
            <LoadingOutlined />
          </LoadingDiv>
        ) : null}
      </AppLayout>
    </>
  );
};

export default Home;
