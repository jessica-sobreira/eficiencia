import { Student, Content, Description, NameStudent, ImageStudent, StyledLink } from '../components/Students';


export function Yuri() {
    return (
        <>
        <StyledLink to='/'>Home</StyledLink>

        <Student selected>
          <ImageStudent src="https://avatars.githubusercontent.com/u/127044623?v=4" alt="Yuri" />
          <Content>
            <NameStudent>Yuri Aresi</NameStudent>
            <Description>
                <ul>
                    <li>Colaborativo</li>
                    <li>Inteligente</li>
                    <li>Dedicado</li>
                </ul>
            </Description>
          </Content>
        </Student>


        </>
    );
}

