import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from './routes/index';
import { PicProvider } from './contexts/PicContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PicProvider>
        <Main />
      </PicProvider>
    </QueryClientProvider>
  );
}

export default App;

