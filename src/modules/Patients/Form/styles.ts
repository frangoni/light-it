import styled from 'styled-components';

export const Field = styled.div`
	margin-bottom: 1rem;
`;
export const Label = styled.label`
	display: block;
	margin-bottom: 0.25rem;
	font-weight: 500;
	font-size: 1rem;
	color: #333;
`;
export const Input = styled.input`
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #ccc;
	background-color: #fff;
	color: #333;
	border-radius: 0.5rem;
	font-size: 1rem;
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
