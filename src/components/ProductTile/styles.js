import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const ProductTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;

  > ${StyledLink} {
    border: 1px solid black;
    text-decoration: none;
    display: block;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    color: black;

    &:hover {
      color: white;
      background: black;
    }
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 20px;
`;

export const Description = styled.div`
  color: #999;
  text-align: left;
  padding: 0 20px 10px 20px;
  height: 50px;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  font-style: italic;
  padding: 20px;
  font-weight: bold;
  margin-top: auto;
`;
