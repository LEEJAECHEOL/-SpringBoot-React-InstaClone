import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { post } from "../actions/post";
import AppLayout from "../components/AppLayout";
import { DivOr, ImageUpload, WriteCard, WriteForm } from "../style";

const normFile = (e) => {
  return e && e.fileList;
};

const write = () => {
  const [fileList, setFileList] = useState(null);
  const dispatch = useDispatch();

  const handleBefore = useCallback((file) => {
    setFileList(file);
    return false;
  }, []);

  const onFinish = useCallback(
    (values) => {
      values.file = fileList;
      values.tags = values.tags.replace(/(\s*)/g, "");
      dispatch(post(values));
    },
    [fileList]
  );

  return (
    <>
      <AppLayout>
        <WriteCard>
          <img alt="logo" src="/images/logo.jpg" />
          <DivOr black>
            <div></div>
            <div>사진 업로드</div>
            <div></div>
          </DivOr>
          <WriteForm onFinish={onFinish} initialValues={{ isFilter: false }}>
            <Form.Item
              name="file"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: "이미지를 선택해주세요!" }]}
            >
              <ImageUpload
                name="file"
                accept="image/*"
                listType="picture"
                maxCount={1}
                onPreview={() => false}
                beforeUpload={handleBefore}
              >
                <Button icon={<UploadOutlined />}>이미지 선택</Button>
              </ImageUpload>
            </Form.Item>
            <Form.Item
              name="caption"
              rules={[
                {
                  required: true,
                  message: "제목을 작성해주세요!",
                  type: "string",
                },
              ]}
            >
              <Input placeholder="제목" />
            </Form.Item>
            <Form.Item
              name="tags"
              rules={[
                {
                  required: true,
                  message: "테그를 작성해주세요!",
                  type: "string",
                },
              ]}
            >
              <Input placeholder="태그" />
            </Form.Item>

            <span className="write-info">
              작성 방법 : #태그명#태그명2 띄어쓰기 없이 연달아 작성
            </span>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                업로드
              </Button>
            </Form.Item>
          </WriteForm>
        </WriteCard>
      </AppLayout>
    </>
  );
};

export default write;
