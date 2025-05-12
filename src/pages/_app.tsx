import { AppProgressBar } from "next-nprogress-bar";
import { AppProps } from "next/app";
import "~/constants/styles/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProgressBar color={"#0076FF"} />
      <Component {...pageProps} />
    </>
  );
}
