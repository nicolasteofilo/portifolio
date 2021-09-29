import { FiGithub, FiInstagram } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/all';
import { FaLinkedin } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { MdComputer } from 'react-icons/md';

import waves from '../../images/svgs/waves.svg';
import nicolasProfile from '../../images/png/profile.jpeg';

import { Container, Content, Profile } from './styles';

export function About() {
  return (
    <Container>
      <img src={waves} alt=""/>
      <Content>
        <Profile>
          <img src={nicolasProfile} alt=""/>
          <aside>
            <a href="https://www.linkedin.com/in/nicolasteofilo" target="_blank" title="Linkedin">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/onicolasteofilo" target="_blank" title="Instagram">
              <FiInstagram />
            </a>
            <a href="https://github.com/nicolasteofilo" target="_blank" title="Github">
              <FiGithub />
            </a>
          </aside>
          <div>
            <span><TiLocation /> Ribeirão Preto, Brasil</span>
            <span><MdComputer /> Desenvolvedor Front-end</span>
          </div>
        </Profile>
        <section>
          <div>
            <h1>Olá, me chamo <span>Nicolas Teófilo</span></h1>
            <p>Seja bem vindo ao meu portifolio, aqui você encontrará minhas habilidades e alguns dos meus projetos já realizados.
            <br />Atualmente sou desenvolvedor<span> Front-end Web</span> !
            </p>
          </div>
        </section>
      </Content>
    </Container>
  );
}