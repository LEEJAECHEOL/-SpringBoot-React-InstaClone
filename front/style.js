import { Card, Col, Form, Layout } from "antd";
import styled from "styled-components";

export const LoginLayout = styled(Layout)`
  background-color: #fff;
  height: 100vh;
  min-height: 830px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginCard = styled(Card)`
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
export const JoinCard = styled(LoginCard)`
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
export const LoginForm = styled(Form)`
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
export const DivOr = styled.div`
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

export const SocialLogin = styled.div`
  button {
    color: #bbb;
  }
  button:hover {
    background-color: #fff;
  }
`;

// explore col
export const ExploreCol = styled(Col)`
  position: relative;
  img {
    width: 100%;
  }
`;

// profile edit
export const ProfileForm = styled(Form)`
  .profile-image-wrap .ant-form-item-control-input {
    margin-top: 4px;
    span {
      font-size: 20px;
      font-weight: 600;
    }
  }
  .ant-form-item-label .profile-image {
    position: relative;
    width: 40px;
    margin-top: 10px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
  .ant-form-item-label > label::after {
    content: "";
  }
  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    content: "";
  }
  .ant-form-item {
    margin-bottom: 12px;
  }
  .explain span {
    color: rgba(0, 0, 0, 0.3);
  }
`;
