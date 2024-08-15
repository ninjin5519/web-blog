import Layout from "@/components/Layout";
import MyContext from "@/provider/search-provider";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <MyContext>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </MyContext>
  );
}
