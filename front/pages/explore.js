import React, { useEffect } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Row } from "antd";
import { ExploreCol } from "../style";
import { useDispatch, useSelector } from "react-redux";
import { exploreGet } from "../actions/post";
import Link from "next/link";

const explore = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(exploreGet());
  }, []);
  return (
    <>
      <Head>
        <title>탐색 | InstaClone</title>
      </Head>
      <AppLayout>
        <Row gutter={[8, 8]}>
          {posts.length !== 0
            ? posts.map((post) => (
                <ExploreCol key={post.id} span={8}>
                  <Link href={`/profile/${post.user.id}`}>
                    <img
                      src={process.env.imageUrl + post.postImageUrl}
                      alt="image"
                    />
                  </Link>
                </ExploreCol>
              ))
            : "인기 게시물이 없습니다."}
        </Row>
      </AppLayout>
    </>
  );
};

export default explore;
