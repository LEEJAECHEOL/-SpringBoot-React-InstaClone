import { Card, Modal, Upload } from "antd";
import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ant-col:first-child {
    padding-left: 0 !important;
  }

  .ant-col:last-child {
    padding-right: 0 !important;
  }
  .logo {
    width: 120px;
  }

  .ant-layout-header {
    display:flex;
    position:fixed;
    width:100%;
    height:60px;
    align-items:center;
    background:rgba(255, 255, 255);
    padding:0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    z-index: 100;
    ul{
      background:transparent;
      border-bottom:none;
    }
    .ant-menu .ant-menu-item {
      height:60px;
      margin:0 10px;
      svg {
        font-size:20px;
      }
    }
    .ant-menu .ant-menu-item.right-menu {
      margin-left:auto;
    }
  }
  .ant-layout-header .ant-row {width:100%}
  .ant-menu-horizontal{
    width: 100%;
    display:flex; 
  }
  .ant-menu-item.ant-menu-item-only-child{border-bottom: none; }
  .ant-menu-item.ant-menu-item-only-child.ant-menu-item-selected {border-bottom: 0;}
  .ant-menu-item.ant-menu-item-only-child.ant-menu-item-active:hover{border-bottom: 0;}
  .ant-menu-submenu.ant-menu-submenu-horizontal.ant-menu-overflowed-submenu{border-bottom: 0;}
  .ant-menu-submenu.ant-menu-submenu-horizontal.ant-menu-overflowed-submenu:hover{border-bottom: 0;}
  .ant-menu-item.ant-menu-item-only-child.header_right{
    margin-left:auto;
  }
  .ant-layout-content {padding-top:90px;background-color:#fafafa;min-height:100vh;}

`;

// feed Post
export const FeedCard = styled(Card)`
  margin-bottom: 25px;
  .ant-card-head {
    display: flex;
    padding: 0 10px;
    height: 56px;
  }
  .ant-card-head-title {
    display: flex;
    align-items: center;
    padding: 0;
    position: relative;

    .feed-profile {
      position: relative;
      width: 40px;
      height: 40px;
      padding: 4px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      svg {
        position: absolute;
        left: 0;
        top: 0;
        fill: none;
        stroke: #8a3ab8;
        stroke-width: 2px;
        stroke-dasharray: 1;
        stroke-dashoffset: 10;
        stroke-linecap: round;
        animation: loading 4500ms ease-in-out infinite alternate;
      }
    }
    span {
      margin-left: 10px;
    }
  }
  .ant-card-body {
    padding: 0;
    .feed-image {
      height: 600px;
      min-height: 300px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .feed-like {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      .feed-like-btn {
        font-size: 26px;
        cursor: pointer;
      }
      .feed-like-count {
        margin-top: -5px;
        padding-left: 7px;
        color: rgba(0, 0, 0, 0.3);
      }
    }
    .feed-tag {
      padding: 0 15px;
      font-size: 15px;
      display: flex;
      flex-wrap: wrap;
      span {
        color: #1890ff;
        cursor: pointer;
        margin-right: 5px;
      }
      span:hover {
        opacity: 0.7;
      }
    }
    .feed-content {
      margin-top: 10px;
      padding: 0 20px;
    }
    .feed-comment {
      margin: 10px 0;
      padding: 0 20px;
      p {
        display: flex;
        align-items: center;
        margin-bottom: 0;
        button {
          width: 16px;
          height: 16px;
          margin-left: auto;
          :hover {
            background-color: #fff;
            color: #f5222d;
          }
        }
      }
      .feed-comment-username {
        font-weight: 700;
      }
    }
    .ant-form {
      display: flex;
      input,
      button {
        height: 50px;
        border: 0;
        border-radius: 0;
        border-top: 1px solid #f0f0f0;
      }
      .ant-form-item {
        margin-bottom: 0;
      }
      .ant-form-item:first-child {
        width: 100%;
      }
      button {
        width: 80px;
        background-color: rgba(0, 0, 0, 0.01);
        color: #40a9ff;
      }
    }
  }
`;

// profile info
export const ProfileCard = styled(Card)`
  background-color: #fafafa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  margin-bottom: 20px;
  input[type="file"] {
    display: none;
  }
  .ant-card-body {
    padding: 0;
    display: flex;
    height: 200px;
    .profile-image {
      flex: 4;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        width: 80%;
        height: 80%;
        max-width: 150px;
        max-height: 150px;
        text-align: center;
        border-radius: 50%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }
    .profile-info {
      flex: 7;
      display: flex;
      align-items: center;
      padding-left: 20px;
      > div {
        display: inline-block;
        .profile-info-username-group {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          > span {
            font-size: 24px;
            margin-right: 20px;
          }
          button {
            margin-right: 10px;
          }
          svg {
            cursor: pointer;
          }
        }
        .profile-info-follow-group {
          font-size: 16px;
          margin-bottom: 20px;
          span {
            margin-right: 20px;
          }
          .profile-info-follow {
            cursor: pointer;
            :hover {
              opacity: 0.7;
            }
          }
        }
        .profile-info-name-group {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

// button style modal
export const ButtonModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 10px;
  }
  .ant-modal-body {
    padding: 5px 0;
    .modal-header {
      text-align: center;
      line-height: 60px;
      margin-bottom: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    button {
      width: 100%;
      height: 50px;
      :not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      :hover {
        background-color: #fff;
        color: #1890ff;
      }
    }
    button.red {
      color: #ff4d4f;
      :hover {
        opacity: 0.7;
      }
    }
  }
`;
