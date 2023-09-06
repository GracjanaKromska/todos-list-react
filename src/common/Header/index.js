import { HeaderPage, HeaderTittle } from "./styled";

const Header = ({ title }) => (
  <HeaderPage>
    <HeaderTittle>{title}</HeaderTittle>
  </HeaderPage>
);

export default Header;