import styled from 'styled-components';

export const DivFun = styled.div`
  width: 300px;
  height: 100%;
  position: relative;
  display: flex;
  background-color: unset;

  .list-grid {
    background-color: rgb(5 159 149 / 0.46);
    flex: 1;
    max-width: 300px;
    display: flex;
    flex-direction: column;

    .fun-bar {
      display: flex;
      height: 70px;
      align-items: center;
      padding: 0 12px;
      position: relative;

      .search {
        position: relative;
        flex: 1;
        height: 36px;
        border-radius: 18px;
        border: none;
        font-size: 14px;
        color: #333;

        input {
          width: 82%;
          height: 100%;

          font-size: 14px;
          padding-left: 35px;
          padding-right: 15px;
          padding-top: 2px;

          border: none;
          border-radius: 18px;
          background-color: rgba(255, 255, 255, 0.9);

          outline: none;
          overflow: visible;
        }
        .icon-btn {
          width: 32px;
          height: 32px;

          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 5px;
        }
      }

      .icon-search {
        font-size: 22px;
        position: absolute;
        left: 20px;
        top: 22px;
        color: #666;
      }

      .icon-add {
        width: 40px;
        height: 40px;
        display: block;
      }
    }
  }
`;