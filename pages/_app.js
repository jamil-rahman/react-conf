import Layout from "../components/Layout";
import "../styles/globals.css";
import "react-big-calendar-like-google/lib/css/react-big-calendar.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
