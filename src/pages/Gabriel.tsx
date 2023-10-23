import { Student, Content, Description, NameStudent, ImageStudent, StyledLink } from '../components/Students';


export function Gabriel() {
    return (
        <>
        <StyledLink to='/'>Home</StyledLink>

        <Student selected>
          <ImageStudent src="https://avatars.githubusercontent.com/u/111029467?v=4" alt="Gabriel" />
          <Content>
            <NameStudent>Gabriel Carneiro</NameStudent>
            <Description>
                <ul>
                    <li>Trabalhador</li>
                    <li>Dedicado</li>
                    <li>Paciente</li>
                </ul>
            </Description>
          </Content>
        </Student>


        </>
    );
}

