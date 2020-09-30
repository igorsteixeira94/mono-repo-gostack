import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  height: 64px;
`;

export const Content = styled.div`
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    a {
      display: flex;
      align-items: center;
    }

    img {
      padding-right: 10px;
      border-radius: 1px solid red;
    }

    h1 {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
