import { Container, Profile } from './styles';


export function Header() {
  return(
    <Container>

      <Profile>
        <img src="https://github.com/ecalazans.png"
             alt="Foto do usuário"
        />

         <div>
            <span>Bem-vindo</span>
            <strong>Erick D. Calazans</strong>
         </div>
      </Profile>
      
    </Container>
  )
}