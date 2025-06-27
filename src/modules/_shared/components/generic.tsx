import styled, { css } from 'styled-components';

export const Container = styled.main`
	max-width: 90rem;
	margin: 0 auto;
	padding: 2rem 1rem;
`;
export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	}
`;
export const Title = styled.h1`
	font-size: 2rem;
	color: #fff;
	margin: 0;
`;
export const AppButton = styled.button`
	background: #7345fc;
	color: #fff;
	border: none;
	border-radius: 0.5rem;
	padding: 0.5rem 1.5rem;
	font-size: 1.1rem;
	cursor: pointer;
	transition: background 0.2s;
	&:hover {
		background: #9572fd;
	}
`;

export const CardStyles = css`
	background: #fff;
	color: #222;
	border-radius: 1rem;
	padding: 1.5rem;
	position: relative;
	display: flex;
	flex-direction: column;
`;

export const Card = styled.div`
	${CardStyles}
	box-shadow: -4px -4px 0px -1px #7345fc inset;
	-webkit-box-shadow: -4px -4px 0px -1px #7345fc inset;
	-moz-box-shadow: -4px -4px 0px -1px #7345fc inset;
	transition: box-shadow 0.2s ease-in-out;

	&:hover {
		box-shadow: -0px -0px 0px -1px #7345fc inset;
		-webkit-box-shadow: -0px -0px 0px -1px #7345fc inset;
		-moz-box-shadow: -0px -0px 0px -1px #7345fc inset;
	}
`;
