import styled from "styled-components";

export const HeaderPage = styled.header`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        justify-content: center;
    }
`;

export const HeaderTittle = styled.h1`
    max-width: 1000px;
    margin: 20px auto;
    padding-top: 20px;
`;