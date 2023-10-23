import { Link } from 'react-router-dom';
import { Student, Content, Description, NameStudent, ImageStudent } from '../components/Students';


export function Yuri() {
    return (
        <>
        <Link style={{ textDecoration: 'none', color: 'white', margin: '30px' }} to='/'>Home</Link>

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

