import React, { useCallback } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { JoinCard, FormCard, LoginForm, LoginLayout } from "../style";
import { useDispatch, useSelector } from "react-redux";
import { join } from "../actions/user";

const Join = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  // 작성 시 submit
  const onFinish = useCallback((values) => {
    dispatch(join(values));
  }, []);
  return (
    <>
      <LoginLayout>
        <FormCard>
          <img alt="logo" src="/images/logo.jpg" />
          <h3 style={{ color: "#8E8E8B" }}>
            친구들의 사진과 동영상을 보려면 가입하세요.
          </h3>
          <LoginForm onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="이메일 주소" />
            </Form.Item>

            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="성명" />
            </Form.Item>

            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
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
              <Button type="primary" htmlType="submit" loading={isLoading}>
                가입
              </Button>
            </Form.Item>
          </LoginForm>
        </FormCard>
        <JoinCard>
          계정이 있으신가요?
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </JoinCard>
      </LoginLayout>
    </>
  );
};

export default Join;
