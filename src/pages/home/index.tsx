import { Container } from './styles'

import {Langs} from '../../components/Langs'
import {Footer} from '../../components/Footer'
import {About} from '../../components/About';
import {MediaSocial} from '../../components/MediaSocial';
import {Projects} from '../../components/Projects'

export function Home() {
	return (
		<Container>
			<About />
			<Langs />
			<MediaSocial />
			<Projects />
			<Footer />
		</Container>
	);
}