import styled from "styled-components";

export const HeaderPage = styled.header`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        justify-content: center;
    }
`;

export const HeaderTittle = styled.h1`
    justify-content: flex-start;
    padding-top: 20px;
`;