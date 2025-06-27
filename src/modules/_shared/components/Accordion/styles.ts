import styled from 'styled-components';

export const Trigger = styled.div`
	cursor: pointer;
	padding: 0.25rem;
	border-bottom: 1px solid #ddd;
	transition: background 0.3s ease-in-out;

	&:hover {
		background: #f0f0f0;
	}
`;

export const Content = styled.div`
	display: grid;
	grid-template-rows: minmax(0, 0fr);
	background: #f9f9f9;
	border-top: 1px solid #ddd;
	color: #333;
	transition: all 0.3s ease-in-out;

	.content {
		overflow: hidden;
		padding: 0.5rem 0.5rem;
	}

	&.isOpen {
		grid-template-rows: minmax(0, 1fr);
	}
`;

export const AccordionWrapper = styled.div`
	border-radius: 0.5rem;
	margin-bottom: 1rem;
	overflow: hidden;
`;
