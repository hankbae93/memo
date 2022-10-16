import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Timer from "./components/timer";

const client = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={client}>
			<div className='App'>
				<Timer />
			</div>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
