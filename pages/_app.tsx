import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactTooltip from "react-tooltip";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReactTooltip />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
