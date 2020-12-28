import styled from 'styled-components';

export const DivMessage = styled.div`
  flex: 1;
  padding: 8px 10px 0 10px;
  overflow-y: auto;
  overflow-x: hidden;
  .message-item {
    display: flex;
    margin-right: 54px;
    margin-bottom: 10px;
    position: relative;

    .message-content {
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow: hidden;

      .item-nickname {
        height: 20px;
        display: flex;
        align-items: flex-end;

        .nickname {
          color: #333;
          font-size: 13px;
          user-select: text;
          margin-right: 4px;
        }

        .time {
          color: #666;
          font-size: 12px;
        }
      }

      .content-block {
        display: flex;
        position: relative;
        padding-right: 30px;
        max-width: -webkit-fill-available;

        .content {
          display: inline-block;
          color: #555;
          font-size: 14px;
          background-color: rgba(255, 255, 255, 0.8);
          padding: 6px 8px;
          border-radius: 8px;
          border-top-left-radius: 0px;
          min-height: 16px;
          margin-top: 3px;
          max-width: -webkit-fill-available;

          .text-message {
            user-select: text;
            word-break: break-word;
            overflow: hidden;
          }
        }
      }
    }
  }
`;