import styled from 'styled-components';

const StyledTaskbarEntries = styled.li`
  border-bottom: ${({ theme }) => `
    ${theme.sizes.taskbar.entry.borderSize} solid ${theme.colors.highlight}
    `};
  display: flex;
  height: 100%;
  place-content: center;
  place-items: center;
  width: ${({ theme }) => theme.sizes.taskbar.entry.maxwidth};

  figure {
    align-items: center;
    display: flex;
    margin-bottom: ${({ theme }) => theme.sizes.taskbar.entry.borderSize};
    margin-left: 4px;
    padding: 4px;

    figcaption {
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
      letter-spacing: -0.1px;
      margin-left: 5px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    img {
      height: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
      /* margin: 2px; */
      position: relative;
      top: 1px;
      width: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
    }
  }
`;

export default StyledTaskbarEntries;
