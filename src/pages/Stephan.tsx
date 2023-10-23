import { Link } from 'react-router-dom';
import { Student, Content, Description, NameStudent, ImageStudent } from '../components/Students';


export function Stephan() {
    return (
        <>
        <Link style={{ textDecoration: 'none', color: 'white', margin: '30px' }} to='/'>Home</Link>

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

