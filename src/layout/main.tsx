import {
	Button,
	Container,
	ContainerProps,
	NumberInput,
	useToast,
} from '@nature-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCount, setCount } from 'src/store/features/counter';

export default function MainLayout(props: ContainerProps) {
	const dispatch = useDispatch();
	const count = useSelector((state: RootState) => state.counter.value);
	const { message } = useSelector((state: RootState) => ({
		message: state.message,
		count: state.counter.value,
	}));
	const [limit, setLimit] = useState(12);

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
	}, [message]);

	useEffect(() => {
		// Automatically reset counter when it is less than 13
		if (count < 1) {
			dispatch(resetCount());
		}
	}, [count, dispatch]);

	const handleChangeLimit = (_, value) => {
		setLimit(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(setCount(limit));
	};

	return (
		<Container centered size='sm'>
			<form onSubmit={handleSubmit} className='my-12'>
				<NumberInput onChange={handleChangeLimit} value={limit} />
				<Button type='submit'>Set limit</Button>
				<Button
					onClick={() => {
						window.location.reload();
					}}
				>
					Reload page
				</Button>
			</form>
			{props.children}
		</Container>
	);
}
