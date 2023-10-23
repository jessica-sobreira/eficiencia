import { Link } from 'react-router-dom';
import { Student, Content, Description, NameStudent, ImageStudent } from '../components/Students';


export function Tanara() {
    return (
        <>
        <Link style={{ textDecoration: 'none', color: 'white', margin: '30px' }} to='/'>Home</Link>

        <Student selected>
          <ImageStudent src="https://media.licdn.com/dms/image/C4D03AQHY69elQf-D2A/profile-displayphoto-shrink_800_800/0/1630435860458?e=1703721600&v=beta&t=87zcDroa84K_anmSZL-IY49DZZroeDyemqRVELLrimQ" alt="Tanara" />
          <Content>
            <NameStudent>Tanara Fillmann</NameStudent>
            <Description>
                <ul>
                    <li>Resiliente</li>
                    <li>Dedicada</li>
                    <li>Persistente</li>
                </ul>
            </Description>
          </Content>
        </Student>


        </>
    );
}

