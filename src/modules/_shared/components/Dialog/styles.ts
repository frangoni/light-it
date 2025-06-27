import { keyframes, styled } from 'styled-components';
import { CardStyles } from '../generic';

const SlideUp = keyframes`
  from {
    transform: translateY(5rem) scale(0.8);
	opacity: 0;
  }
  to{
    transform: translateY(0rem) scale(1);
	opacity: 1;
  }`;

export const StyledDialog = styled.dialog`
	position: fixed;
	width: 100vw;
	height: 100vh;
	border: none;
	background: transparent;
	z-index: -1;

	#closeModal {
		position: absolute;
		top: 2rem;
		right: 5rem;
		font-size: 1.5rem;
	}

	&[open] {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 3;
		backdrop-filter: blur(1rem);
		--webkit-backdrop-filter: blur(1rem);
		background-color: rgba(0, 0, 0, 0.5);

		& > div {
			animation: ${SlideUp} 0.5s ease forwards;
		}
	}
`;

export const DialogContent = styled.div`
	max-width: 90vw;
	min-width: 30vw;
	max-height: 90svh;
	overflow-y: auto;
	overflow-x: hidden;
	padding: 1rem;
	margin-inline: -1rem;

	color: rgba(255, 255, 255, 0.9);
`;

export const DialogCard = styled.div`
	${CardStyles}
	background-color: rgba(255, 255, 255, 0.75);
`;
