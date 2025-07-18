import styled from 'styled-components';

export const Field = styled.div`
	margin-bottom: 1rem;
`;
export const Label = styled.label`
	display: block;
	margin-bottom: 0.25rem;
	font-weight: 500;
	color: #333;
`;
export const Input = styled.input`
	width: 100%;
	padding: 0.5rem;
	border: 2px solid rgba(115, 69, 252, 0.25);
	background-color: rgba(255, 255, 255, 0.25);
	outline: none;
	color: #333;
	border-radius: 0.25rem;
	font-size: 1rem;
	transition: border-color 0.2s ease, box-shadow 0.2s ease;

	&:focus {
		border-color: #7345fc;
		box-shadow: 0 0 0 0.2rem rgba(115, 69, 252, 0.25);
	}

	&:hover {
		border-color: #7345fc;
	}
`;

export const ErrorMsg = styled.div`
	color: #d32f2f;
	font-size: 0.95rem;
	margin-top: 0.2rem;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 1rem;
`;

export const FormTitle = styled.h2`
	font-size: 1.5rem;
	color: #333;
`;
