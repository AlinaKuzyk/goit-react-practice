import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;

  justify-content: space-between;
  padding: 20px;
  width: 370px;
  background-color: white;
`;

export const BtnMenu = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  width: 32px;
  height: 32px;
  &:hover,
  &:focus {
    border-radius: 50%;
    background-color: light-grey;
  }
`;

export const ContainerDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: 0;
  padding: 8px 0;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const InsideBtn = styled.button`
  padding: 10px;
  border: none;
  background-color: white;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`;
