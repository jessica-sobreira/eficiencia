import { Link } from 'react-router-dom';
import { Student, Content, Description, NameStudent, ImageStudent } from '../components/Students';


export function Jessica() {
    return (
        <>
        <Link style={{ textDecoration: 'none', color: 'white', margin: '30px' }} to='/'>Home</Link>

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

