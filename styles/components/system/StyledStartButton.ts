import styled from 'styled-components';

const StyledStartButton = styled.button`
  background-color: red;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  width: ${({ theme }) => theme.sizes.startbutton.width};
`;

export default StyledStartButton;
