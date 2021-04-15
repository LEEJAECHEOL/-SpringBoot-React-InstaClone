import React from "react";
import { Button, Card, Form, Input, Layout } from "antd";
import styled from "styled-components";
import { GoogleOutlined } from "@ant-design/icons";
import Link from "next/link";
const LoginLayout = styled(Layout)`
  background-color: #fff;
  height: 100vh;
  min-height: 830px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginCard = styled(Card)`
  border-color: #dbdbdb;
  width: 400px;
  text-align: center;
  img {
    width: 200px;
  }
  .ant-card-body {
    padding: 30px 50px;
  }
`;
const JoinCard = styled(LoginCard)`
  margin-top: 10px;
  color: #333;
  .ant-card-body {
    padding: 25px 0;
    font-size: 15px;
  }
  a {
    margin-left: 5px;
  }
`;
const LoginForm = styled(Form)`
  margin-top: 30px;
  input {
    height: 36px;
  }
  .ant-form-item {
    margin-bottom: 6px;
  }
  .ant-form-item:last-child {
    margin-top: 14px;
    button {
      background-color: #0095f6;
      width: 100%;
      border-radius: 4px;
    }
  }
  .ant-input-password input {
    height: 26px;
  }
  .ant-form-item-explain-error {
    text-align: left;
    padding-left: 5px;
  }
`;
const DivOr = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  color: #8e8e8e;
  div:nth-child(2) {
    flex: 2;
  }
  div:nth-child(1),
  div:nth-child(3) {
    flex: 4;
    height: 1px;
    border-top: 1px solid #dbdbdb;
  }
`;
const SocialLogin = styled.div`
  button {
    color: #bbb;
  }
  button:hover {
    background-color: #fff;
  }
`;

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
          <Link href="/login">
            <a>가입하기</a>
          </Link>
        </JoinCard>
      </LoginLayout>
    </>
  );
};

export default Home;
