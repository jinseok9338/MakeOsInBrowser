import styled from 'styled-components';

const StyledStartButton = styled.button.attrs(() => ({
  type: 'button'
}))`
  bottom: 0;
  color: ${({ theme }) => theme.colors.startbutton};
  display: flex;
  font-size: ${({ theme }) => theme.sizes.startbutton.size};
  height: 100%;
  left: 0;
  place-content: center;
  place-items: center;
  position: absolute;
  width: ${({ theme }) => theme.sizes.startbutton.width};
`;

export default StyledStartButton;
