import styled from 'styled-components';

const styledTaskbar = styled.nav`
  backdrop-filter: ${({ theme }) => `blur(${theme.sizes.taskbar.blur})`};
  background-color: ${({ theme }) => theme.colors.taskbar};
  bottom: 0;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  left: 0;
  position: fixed;
  right: 0;
  width: ${({ theme }) => theme.sizes.taskbar.width};
`;

export default styledTaskbar;
