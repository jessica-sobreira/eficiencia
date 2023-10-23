import { Link } from 'react-router-dom';
import { Student, Content, Description, NameStudent, ImageStudent } from '../components/Students';


export function Gabriel() {
    return (
        <>
        <Link style={{ textDecoration: 'none', color: 'white', margin: '30px' }} to='/'>Home</Link>

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

