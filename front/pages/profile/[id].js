import { Row } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileGet } from "../../actions/user";
import AppLayout from "../../components/AppLayout";
import ProfileInfo from "../../components/ProfileInfo";
import { ExploreCol } from "../../style";

const profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  useEffect(() => {
    if (id) {
      const data = {
        id: id,
      };
      dispatch(profileGet(data));
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>프로필 | InstaClone</title>
      </Head>
      <AppLayout>
        <ProfileInfo profile={profile} />
        <Row gutter={[8, 8]}>
          {profile &&
            profile.user.posts.map((post) => (
              <ExploreCol key={post.id} span={8}>
                <img src={process.env.imageUrl + post.postImageUrl} alt="" />
              </ExploreCol>
            ))}
        </Row>
      </AppLayout>
    </>
  );
};

export default profile;
