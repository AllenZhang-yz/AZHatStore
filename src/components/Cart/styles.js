import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart',
}))`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  margin-left: 16px;
  > div:last-child {
    padding-left: 8px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
