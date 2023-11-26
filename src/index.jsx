import { ColorModeScript,ChakraProvider,theme } from '@chakra-ui/react';//imporitn
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ColorModeScript />
    <ChakraProvider theme={theme}>{/*if do not write inside the this tag then css not apply to this component */}
    <ColorModeSwitcher/>
    <App />
    </ChakraProvider>
    
    </>
);


