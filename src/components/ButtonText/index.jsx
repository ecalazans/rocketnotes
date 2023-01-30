import { Container } from './styles';

// atribuindo valor padrão para o isActive caso eu não o informe
// nos meus componentes, quando ele for chamado/utilizado
export function ButtonText({ title, isActive = false, ...rest }) {
  return(

    <Container
      type="button"
      isActive={isActive}
      {...rest}
    >
      {title}
    </Container>
  );
}