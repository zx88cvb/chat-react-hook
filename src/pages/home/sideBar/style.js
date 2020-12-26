import styled from 'styled-components';

export const DivSideBar = styled.div`
  width: 80px;
  min-width: min-content;
  background-color: var(--primary-color-8);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  .avatar {
    margin-top: 50px;
    cursor: pointer;
  }
`;