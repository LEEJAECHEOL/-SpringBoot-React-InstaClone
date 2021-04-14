import "antd/dist/antd.css";
import Head from "next/head";

import wrapper from "../store/configureStore";

// _app.js는 pages들의 공통 부분이다.
// Component는 index.js등의 공통부분을 담당한다. index.js의 리턴부분이 Component로 들어가서 <Component />이 된다.
const InstaClone = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>InstaClone</title>
      </Head>
      <Component />
    </>
  );
};

export default wrapper.withRedux(InstaClone);
