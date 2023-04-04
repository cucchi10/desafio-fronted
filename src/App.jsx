import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from './routes/index';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;

