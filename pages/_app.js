import 'react-h5-audio-player/lib/styles.css';
import '@/styles/globals.css'
import { AuthProvider } from '@/context/AuthContext'
import { MusicProvider, useMusic } from '@/context/MusicContext'
import NavBar from '@/components/NavBar'
import MusicPlayer from '@/components/HomeComponents/MusicPlayer'


export default function App({ Component, pageProps }) {
  // console.log(useMusic())
  // const {isMusicSet} = useMusic()
  return (
    <AuthProvider>
      <MusicProvider>
        <NavBar />
        <Component {...pageProps} />
        <MusicPlayer />
      </MusicProvider>
    </AuthProvider>
  )
}
