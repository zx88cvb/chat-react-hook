import styled from 'styled-components';

export const DivHeaderBar = styled.div`
  height: 70px;
  border-bottom: 1px solid rgba(208, 208, 208, 0.6);
  display: flex;
  align-items: center;
  padding: 0px 18px;
  justify-content: space-between;
  position: relative;

  .title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    b {
      font-size: 14px;
    }
  }

  .button-group {
    display: flex;
    width: 80px;

    justify-content: flex-end;

    .button-item {
      width: 40px;
      height: 40px;

      text-align: center;
      color: #a5b5c0;
      cursor: pointer;
    }
  }
`;