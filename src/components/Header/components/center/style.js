import styled from 'styled-components';

export const CenterWrapper = styled.section`
  .search_bar {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 0 8px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};
    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primaryColor};
      color: #fff;
    }
  }
`;
