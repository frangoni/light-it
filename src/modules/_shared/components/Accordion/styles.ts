import styled from 'styled-components';

export const Trigger = styled.div`
	cursor: pointer;
	padding: 0.5rem;
	border-bottom: 1px solid #ddd;
	transition: background 0.3s ease-in-out;

	&:hover {
		background: #f0f0f0;
	}
`;

export const Content = styled.div`
	display: grid;
	grid-template-rows: minmax(0, 0fr);
	padding: 0.5rem;
	background: #f9f9f9;
	border-top: 1px solid #ddd;
	color: #333;
	transition: all 0.3s ease-in-out;

	.content {
		overflow: hidden;
	}

	&.isOpen {
		grid-template-rows: minmax(0, 1fr);
	}
`;
