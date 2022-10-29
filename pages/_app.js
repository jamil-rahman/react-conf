import Layout from "../components/Layout";
import "../styles/globals.css";
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.react-finland.fi/graphql",
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
