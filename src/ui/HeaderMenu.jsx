import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import Logout from '../features/authentication/Logout';
import { HiOutlineUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const StyledHeaderMenue = styled.ul`
  display: flex;
  gap: 04rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenue>
      <li>
        <ButtonIcon>
          <HiOutlineUser onClick={() => navigate('/account')} />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenue>
  );
}

export default HeaderMenu;
