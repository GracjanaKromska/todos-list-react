import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
 
export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;
    cursor: pointer;
`;

export const ToggleDoneButton = styled(Button)`
    background-color: ${({ theme }) => theme.color.japaneseLaurel};
        
    &:hover {
        filter: brightness(110%);
    }
`;

export const RemoveButton = styled(Button)`
    background-color: ${({ theme }) => theme.color.red};
        
    &:hover {
        filter: brightness(110%);
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.teal};

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;