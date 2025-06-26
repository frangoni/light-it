import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Patients from './modules/Patients';
import { ToastContainer, Bounce } from 'react-toastify';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Patients />
			<ToastContainer
				position='bottom-left'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				transition={Bounce}
			/>
		</QueryClientProvider>
	);
}

export default App;
