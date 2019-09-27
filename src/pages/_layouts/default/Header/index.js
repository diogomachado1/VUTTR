import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { HeaderContainer, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import { ButtonTerciary } from '~/components/Button';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <HeaderContainer>
      <div>
        <nav>
          <Link to="/dashboard">
            <h1>VUTTR</h1>
          </Link>
        </nav>
        <Profile>
          <span>{profile.name}</span>
          <Link to="/profile">Meu Perfil</Link>
        </Profile>
        <ButtonTerciary color="danger" type="button" onClick={handleSignOut}>
          Sair
        </ButtonTerciary>
      </div>
    </HeaderContainer>
  );
}
