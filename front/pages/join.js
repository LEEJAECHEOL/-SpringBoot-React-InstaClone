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
const Join = () => {
  const onFinish = () => {};
  return (
    <>
      <LoginLayout>
        <LoginCard>
          <img alt="logo" src="/images/logo.jpg" />
          <h3 style={{ color: "#8E8E8B" }}>
            친구들의 사진과 동영상을 보려면 가입하세요.
          </h3>
          <LoginForm onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="휴대폰 번호 또는 이메일 주소" />
            </Form.Item>

            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="성명" />
            </Form.Item>

            <Form.Item
              name="nickName"
              rules={[
                { required: true, message: "Please input your nickName!" },
              ]}
            >
              <Input placeholder="사용자 이름" />
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
                가입
              </Button>
            </Form.Item>
          </LoginForm>
        </LoginCard>
        <JoinCard>
          계정이 있으신가요?
          <Link href="/">
            <a>로그인</a>
          </Link>
        </JoinCard>
      </LoginLayout>
    </>
  );
};

export default Join;
