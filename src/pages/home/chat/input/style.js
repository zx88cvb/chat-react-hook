import styled from 'styled-components';

export const DivInput = styled.div`
  height: 70px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  padding: 0px 20px;
  border-bottom-right-radius: 10px;
  position: relative;

  .chat-form {
    flex: 1;
    position: relative;
    margin: 0 10px;
    .chat-input {
      flex: 1;
      display: flex;
      position: relative;
      margin: 0 10px;

      .msg-input {
        flex: 1;
        padding: 0px 8px;
        height: 32px;
        line-height: 32px;
        outline: none;
        border: 1px solid rgba(208, 208, 208, 0.5);
        font-size: 14px;
        color: #666;
      }

      .icon-btn {
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 22px;
        color: #aaa;
      }
    }
  }
`