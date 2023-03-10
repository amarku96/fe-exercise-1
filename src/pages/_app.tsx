import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Movies from '../components/Movies/Movies'
import "./style.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Movies />
}
