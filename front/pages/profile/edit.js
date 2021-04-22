import { Button, Card, Form, Input, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../components/AppLayout";
import { ProfileForm } from "../../style";
import { profileGet, profilePut } from "../../actions/user";
import Password from "antd/lib/input/Password";
import { useForm } from "antd/lib/form/Form";
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
  const dispatch = useDispatch();
  const { principal, profile } = useSelector((state) => state.user);
  const [form] = useForm();

  useEffect(() => {
    if (principal) {
      const data = {
        id: principal.id,
      };
      dispatch(profileGet(data));
    }
  }, [principal]);
  useEffect(() => {
    if (profile) {
      form.setFieldsValue({
        name: profile.user.name,
        website: profile.user.website,
        intro: profile.user.intro,
        email: profile.user.email,
        phone: profile.user.phone,
        gender: profile.user.gender,
      });
    }
  }, [profile]);

  const onSubmit = useCallback(
    (values) => {
      values.id = principal.id;
      console.log(values);
      dispatch(profilePut(values));
    },
    [principal]
  );

  return (
    <>
      <AppLayout>
        <Card>
          <ProfileForm {...formItemLayout} form={form} onFinish={onSubmit}>
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
              <span>{profile && profile.user.username}</span>
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
              name="password"
              label="비밀번호"
              rules={[
                {
                  required: true,
                  message: "비밀번호를 입력해주세요.",
                },
              ]}
            >
              <Password />
            </Form.Item>
            <Form.Item name="website" label="웹사이트">
              <Input placeholder="웹사이트" />
            </Form.Item>
            <Form.Item name="intro" label="소개">
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
              name="phone"
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
