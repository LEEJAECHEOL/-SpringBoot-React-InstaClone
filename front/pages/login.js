import React, { useCallback, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Link from "next/link";
import {
  DivOr,
  JoinCard,
  FormCard,
  LoginForm,
  LoginLayout,
  SocialLogin,
} from "../style";
import { login } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, loginError } = useSelector((state) => state.user);
  const onFinish = useCallback((values) => {
    dispatch(login(values));
  }, []);

  useEffect(() => {
    if (loginError) {
      alert("사용자 이름 또는 비밀번호를 확인해주세요!");
    }
  }, [loginError]);

  return (
    <>
      <LoginLayout>
        <FormCard>
          <img alt="logo" src="/images/logo.jpg" />
          <LoginForm onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "사용자 이름을 입력해주세요!" },
              ]}
            >
              <Input placeholder="사용자 이름" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "비밀번호를 입력해주세요!" }]}
            >
              <Input.Password placeholder="비밀번호" autoComplete="on" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
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
        </FormCard>
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

export default Login;
