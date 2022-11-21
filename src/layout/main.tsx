import { Container, ContainerProps, useToast } from '@nature-ui/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function MainLayout(props: ContainerProps) {
	const { message } = useSelector((state: RootState) => ({
		message: state.message,
		counter: state.counter,
	}));

	const toast = useToast();
	useEffect(() => {
		if (message.showMessage) {
			toast({
				title: message.title || '',
				description: message.description || '',
				status: message.type || 'warning',
				duration: 9000,
				isClosable: true,
			});
		}
	}, [message, toast]);

	return (
		<Container centered size='sm'>
			{props.children}
		</Container>
	);
}
