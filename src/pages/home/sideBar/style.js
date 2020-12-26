import styled from 'styled-components';

export const DivSideBar = styled.div`
  width: 80px;
  min-width: min-content;
  background-color: rgb(5 159 149 / 0.78);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  .avatar {
    margin-top: 50px;
    cursor: pointer;
  }

  .button-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    .button-item {
      margin-top: 10px;
    }
  }
`;