import 'reflect-metadata';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppModule } from '@/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppModule>
      <Component {...pageProps} />
    </AppModule>
  );
}
