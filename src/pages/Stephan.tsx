import { Student, Content, Description, NameStudent, ImageStudent, StyledLink } from '../components/Students';


export function Stephan() {
    return (
        <>
        <StyledLink to='/'>Home</StyledLink>

        <Student selected>
          <ImageStudent src="https://avatars.githubusercontent.com/u/109179158?v=4" alt="Stephan" />
          <Content>
            <NameStudent>Stephàn Costa</NameStudent>
            <Description>
                <ul>
                    <li>Simpático</li>
                    <li>Resolutivo</li>
                    <li>Comunicativo</li>
                </ul>
            </Description>
          </Content>
        </Student>


        </>
    );
}

