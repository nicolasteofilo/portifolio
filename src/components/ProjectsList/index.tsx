import { useEffect } from 'react';
import { domination } from '../../Json/projects';
import Aos from 'aos';

import "aos/dist/aos.css";

import { Container, Content, Section, Cards, Card } from './styles';

export function ProjectsList() {
	useEffect(() => {
		Aos.init({duration: 1000});
	}, []);

	return (
	<Container>
		<Content>
			<Section>
				<Cards data-aos="fade-right">
					{
						domination.map((value) => (
							<Card 
								key={value.id}
								style={{borderBottom: `${value.borderBottom}`}}
							>

								<i className="backgroundImgProject" >{value.background}</i>
								<br />
								<h1 className="nameProject" >{value.name}</h1>
								<p className="descriptionProject" > {value.description}</p>
								<br />
								<p className="techsProject" >Techs: {value.techs}</p>
								<br />
								<a  href={value.url} target="_blank" className="buttonProject" >Acessar Projeto</a>
								<br />
								<br />
								
							</Card>
						))
					}
				</Cards>
			</Section>
		</Content>
	</Container>
	);
}
