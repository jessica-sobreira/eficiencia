import { Student, Content, Description, NameStudent, ImageStudent, StyledLink } from '../components/Students';


export function Jessica() {
    return (
        <>
        <StyledLink to='/'>Home</StyledLink>
        <Student selected>
          <ImageStudent src="https://avatars.githubusercontent.com/u/117686537?v=4" alt="Jéssica" />
          <Content>
            <NameStudent>Jéssica Sobreira</NameStudent>
            <Description>
                <ul>
                    <li>Comunicativa</li>
                    <li>Colaborativa</li>
                    <li>Dedicada</li>
                </ul>
            </Description>
          </Content>
        </Student>


        
            
        </>
    );
}

