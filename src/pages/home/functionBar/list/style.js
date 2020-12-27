import styled from 'styled-components';

export const DivList = styled.div`
  flex: 1;
  overflow-y: auto;

  .list-item {
    height: 70px;
    display: flex;
    align-items: center;
    padding: 10px 16px;
    transition: background-color 0.2s;

    .item-content {
      flex: 1;
      margin-left: 12px;

      .item-row {
        display: flex;
        justify-content: space-between;
      }
      .item-title {
        margin-top: 4px;
        .name {
          color: rgb(255 255 255);
          font-size: 14px;
        }
        .time {
          color: rgb(255 255 255 / 70%);
          font-size: 12px;
          position: relative;
          top: 4px;
        }
      }

      .item-preview {
        margin-top: 6px;
        .preview {
          color: rgb(255 255 255 / 70%);
          font-size: 12px;
          width: 188px;
          height: 20px;
          line-height: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .focus {
    background-color: rgb(5 159 149 / 40%);
  }
`;