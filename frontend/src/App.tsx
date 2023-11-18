import './App.css'
import Router from './Router'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
        retry: false,
        // eslint-disable-next-line no-magic-numbers
        cacheTime: 1000,
        // eslint-disable-next-line no-magic-numbers
        staleTime: 0,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App
