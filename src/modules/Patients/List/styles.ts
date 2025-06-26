import styled from 'styled-components';

export const ListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 1.5rem;
	justify-content: start;
	margin: 2rem 0;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
