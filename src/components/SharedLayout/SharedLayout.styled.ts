import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 32px;

  border-bottom: 1px solid black;
  > nav {
    display: flex;
  }
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 16px 16px;
`;
export const Link = styled(NavLink)`
  width: 115px;
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: rgba(71, 28, 169, 0.8);
  }
`;
