import { Card } from "antd";
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
        margin-bottom: 0;
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
