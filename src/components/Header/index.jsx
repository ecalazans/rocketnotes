import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from './styles';


export function Header() {

  const { signOut, user } = useAuth();

  return(
    <Container>

      <Profile to="/profile">
        <img src="https://github.com/ecalazans.png"
             alt="Foto do usuário"
        />

         <div>
            <span>Bem-vindo</span>
            <strong>{user.name}</strong>
         </div>
      </Profile>

      <Logout onClick={ signOut } title="Sair">
        <RiShutDownLine />
      </Logout>
      
    </Container>
  )
}