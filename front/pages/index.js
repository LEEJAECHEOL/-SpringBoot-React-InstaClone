import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import FeedPost from "../components/FeedPost";

const Home = () => {
  return (
    <>
      <AppLayout>
        <FeedPost />
        <FeedPost />
      </AppLayout>
    </>
  );
};

export default Home;
