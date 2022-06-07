import React, { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { snackbar } from '../../redux/common/commonActions';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionLeft(props) {
	return <Slide {...props} direction="left" />;
}

export default function SnackbarMessage() {
	const [state, setState] = React.useState({
		vertical: 'top',
		horizontal: 'right'
	});
	const data = useSelector(state => state.snackbarReducer);
	const [transition, setTransition] = React.useState(undefined);
	const dispatch = useDispatch();

	const { vertical, horizontal } = state;

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		dispatch(
			snackbar({
				open: false,
				message: data.message,
				status: data.status
			})
		);
	};

	useEffect(() => {
		setTransition(() => TransitionLeft);
	}, []);

	return (
		<Stack spacing={2} sx={{ width: '100%' }}>
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={data?.open}
				autoHideDuration={1500}
				onClose={handleClose}
				key={transition?.name}
				TransitionComponent={transition}
			>
				<Alert
					onClose={handleClose}
					severity={data?.status}
					sx={{ textTransform: 'capitalize' }}
				>
					{data?.message}
				</Alert>
			</Snackbar>
		</Stack>
	);
}
