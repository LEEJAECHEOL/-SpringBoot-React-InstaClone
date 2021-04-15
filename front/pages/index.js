import React from "react";
import { Button, Form, Input } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Link from "next/link";
import {
  DivOr,
  JoinCard,
  LoginCard,
  LoginForm,
  LoginLayout,
  SocialLogin,
} from "./style";

// Insta는 처음 페이지가 로그인임.
const Home = () => {
  const onFinish = () => {};
  return (
    <>
      <LoginLayout>
        <LoginCard>
          <img alt="logo" src="/images/logo.jpg" />
          <LoginForm onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="전화번호, 사용자 이름 또는 이메일" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="비밀번호" autoComplete="on" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                로그인
              </Button>
            </Form.Item>
          </LoginForm>
          <DivOr>
            <div></div>
            <div>또는</div>
            <div></div>
          </DivOr>
          <SocialLogin>
            <Button className="" icon={<GoogleOutlined />} type="text">
              Google Login
            </Button>
          </SocialLogin>
        </LoginCard>
        <JoinCard>
          계정이 없으신가요?
          <Link href="/join">
            <a>가입하기</a>
          </Link>
        </JoinCard>
      </LoginLayout>
    </>
  );
};

export default Home;
