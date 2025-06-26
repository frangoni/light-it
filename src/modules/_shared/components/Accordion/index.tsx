import { useState } from 'react';
import { AccordionWrapper, Content, Trigger } from './styles';

interface IAccordionProps {
	openTitle: string;
	hideTitle: string;
	children: React.ReactNode;
}

export default function Accordion({ openTitle, hideTitle, children }: IAccordionProps) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleAccordion = () => setIsOpen(!isOpen);

	return (
		<AccordionWrapper>
			<Trigger onClick={toggleAccordion}>{isOpen ? hideTitle : openTitle}</Trigger>
			<Content className={isOpen ? 'isOpen' : ''}>
				<div className='content'>{children}</div>
			</Content>
		</AccordionWrapper>
	);
}
