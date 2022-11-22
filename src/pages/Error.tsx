import { useDispatch } from 'react-redux';
import { errorMessage } from 'src/store/features/constants';
import { setMessage } from 'src/store/features/message';

export default function ErrorPage() {
	const dispatch = useDispatch();
	dispatch(
		setMessage({ ...errorMessage, description: "You're probably lost." })
	);

	return <>Opps, something went wrong!</>;
}
