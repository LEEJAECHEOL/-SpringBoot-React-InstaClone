import { Button, Card, Form, Input, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import styled from "styled-components";
import AppLayout from "../../components/AppLayout";
import { ProfileForm } from "../../style";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const formTailLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14, offset: 6 },
};
const edit = () => {
  return (
    <>
      <AppLayout>
        <Card>
          <ProfileForm {...formItemLayout}>
            <Form.Item
              className="profile-image-wrap"
              label={
                <>
                  <img
                    src="/images/profile.jpeg"
                    className="profile-image"
                    alt="profile-image"
                  />
                </>
              }
            >
              <span>username</span>
            </Form.Item>
            <Form.Item
              name="name"
              label="이름"
              rules={[
                {
                  required: true,
                  message: "이름을 입력해주세요.",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item className="explain" {...formTailLayout}>
              <span>
                사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을
                사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.
              </span>
            </Form.Item>
            <Form.Item
              name="username"
              label="사용자 이름"
              rules={[
                {
                  required: true,
                  message: "사용자 이름을 입력해주세요.",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item className="explain" {...formTailLayout}>
              <span>
                대부분의 경우 14일 이내에 사용자 이름을 다시 username(으)로
                변경할 수 있습니다
              </span>
            </Form.Item>
            <Form.Item name="website" label="웹사이트">
              <Input placeholder="웹사이트" />
            </Form.Item>
            <Form.Item name="intoduce" label="소개">
              <TextArea />
            </Form.Item>
            <Form.Item className="explain" {...formTailLayout}>
              <span>
                <b>개인 정보</b>
                <br /> 비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의
                개인 정보를 입력하세요. 공개 프로필에는 포함되지 않습니다.
              </span>
            </Form.Item>
            <Form.Item
              name="email"
              label="이메일"
              rules={[
                {
                  required: true,
                  message: "이메일을 입력해주세요.",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="tel"
              label="전화번호"
              rules={[
                {
                  required: true,
                  message: "전화번호 입력해주세요.",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="성별" name="gender">
              <Select placeholder="성별 선택">
                <Option key={1} value="남자">
                  남자
                </Option>
                <Option key={2} value="여자">
                  여자
                </Option>
              </Select>
            </Form.Item>
            <Form.Item {...formTailLayout}>
              <Button type="primary" htmlType="submit">
                제출
              </Button>
            </Form.Item>
          </ProfileForm>
        </Card>
      </AppLayout>
    </>
  );
};

export default edit;
