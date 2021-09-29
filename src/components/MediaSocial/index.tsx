import { useEffect } from 'react';
import  {AiFillGithub} from 'react-icons/ai';
import Aos from 'aos';

import devGit from '../../images/svgs/devGit.svg';

import { Container, Content, Github } from './styles';

export function MediaSocial() {
  useEffect(() => {
		Aos.init({duration: 1000});
	}, []);

  return (
    <Container>
      <Content>
        <Github>
          <img data-aos="fade-right" src={devGit} alt="Boneco programando"/>
          <div>
            <h1 data-aos="fade-down">Já acessou meu 
              <span> GitHub? </span> 
            </h1>
            <p data-aos="fade-up">Se você quiser dar uma olhada melhor em alguns dos meus projetos você pode dar uma passada no meu github !
            </p>
            <a data-aos="fade-up" href="https://github.com/nicolasteofilo" target="_blank"><AiFillGithub/>Clique aqui</a>
          </div>
        </Github>
      </Content>
    </Container>
  );
}
