import { Card, Col, Form, Layout, Upload } from "antd";
import styled from "styled-components";

export const LoginLayout = styled(Layout)`
  background-color: #fff;
  height: 100vh;
  min-height: 830px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormCard = styled(Card)`
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
export const JoinCard = styled(FormCard)`
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
  color: ${(props) => (props.black ? "#333" : "#8e8e8e")};
  div:nth-child(2) {
    flex: 2;
    font-size: ${(props) => (props.black ? "18px" : "14px")};
  }
  div:nth-child(1),
  div:nth-child(3) {
    flex: 4;
    height: 1px;
    border-top: ${(props) => (props.black ? "2px" : "1px")} solid
      ${(props) => (props.black ? "#000" : "#dbdbdb")};
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

// 글 작성 card style
export const WriteCard = styled(Card)`
  border-color: #dbdbdb;
  text-align: center;
  img {
    width: 200px;
  }
  .ant-card-body {
    padding: 30px 50px;
  }
`;

// 글작성 이미지 업로드
export const ImageUpload = styled(Upload)`
  display: flex;
  flex-direction: column;
  align-items: center;
  .ant-upload-list {
    width: 100%;
    margin-bottom: 5px;
  }
  .ant-upload-list-picture {
    .ant-upload-list-item {
      height: inherit;
    }
    .ant-upload-list-item-thumbnail {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 200px;
      height: 100%;
      max-height: 500px;
      img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
  .ant-upload-span {
    flex-direction: column;
    text-align: center;
  }
`;

// 글작성 form style
export const WriteForm = styled(Form)`
  text-align: left;
  .ant-form-item {
    margin-bottom: 5px;
    :nth-child(3) {
      margin-bottom: 10px;
    }
  }
  span.write-info {
    position: relative;
    color: rgba(0, 0, 0, 0.4);
    top: -5px;
    left: 5px;
  }
  button {
    width: 100%;
  }
`;
