import '../styles/globals.css'
import withReactRouter from "../next/with-react-router";
import { QueryClientProvider, QueryClient } from "react-query"

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default withReactRouter(MyApp);
