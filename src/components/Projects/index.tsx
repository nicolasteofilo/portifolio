import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import Aos from "aos";

import { Container, Content, Github } from "./styles";

import { ProjectsList } from '../ProjectsList'

export function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <Content>
        <Github>
          <div>
            <h1 data-aos="fade-down">
              Alguns dos meus<span> Projetos </span>{" "}
            </h1>
            <p data-aos="fade-up">
              Se você quiser dar uma olhada em alguns dos meus projetos você
              pode dar uma passada no meu github !
            </p>
            <a
              data-aos="fade-up"
              href="https://github.com/nicolasteofilo"
              target="_blank"
            >
              <AiFillGithub />
              Clique aqui
            </a>
          </div>
          <ProjectsList />
        </Github>
      </Content>
    </Container>
  );
}
