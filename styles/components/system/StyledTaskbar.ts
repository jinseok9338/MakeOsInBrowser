import styled from 'styled-components';

const styledTaskbar = styled.nav`
  background-color: #777;
  bottom: 0;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  left: 0;
  position: fixed;
  right: 0;
  width: ${({ theme }) => theme.sizes.taskbar.width};
`;

export default styledTaskbar;
