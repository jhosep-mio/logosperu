import { HelmetProvider } from 'react-helmet-async'
import { Routing } from './router/Routing'

function App (): JSX.Element {
  return (
    <>
        <HelmetProvider>
            <Routing />
        </HelmetProvider>
    </>
  )
}

export default App
