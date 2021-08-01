import styled from 'styled-components';

const StyledTaskbarEntries = styled.ol`
  background-color: purple;
  height: 100%;
  left: ${({ theme }) => theme.sizes.startbutton.width};
  position: absolute;
  right: ${({ theme }) => theme.sizes.clock.width};
  width: 100%;
`;

export default StyledTaskbarEntries;
