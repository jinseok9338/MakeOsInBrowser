import styled from 'styled-components';

const StyledStartButton = styled.button.attrs(() => ({
  type: 'button'
}))`
  bottom: 0;
  display: flex;
  height: 100%;
  left: 0;
  place-content: center;
  place-items: center;
  position: absolute;
  width: ${({ theme }) => theme.sizes.startbutton.width};
`;

export default StyledStartButton;
