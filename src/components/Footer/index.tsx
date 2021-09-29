import { Container, Content } from './styles';

const date = new Date();

const year = date.getFullYear();

export function Footer() {
	return (
		<Container>
			<Content>
				<div>
					<p>&copy; CopyRight {year} by</p> <span>Nicolas Teófilo</span>
				</div>
			</Content>
		</Container>
	);
}