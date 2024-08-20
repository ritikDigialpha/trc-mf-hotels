import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StoreProvider from "host/providers/StoreProvider";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
