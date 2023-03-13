import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { themeDefault, Button } from 'diffuse-ds'

import './index.css'

const App = () => (
  <ThemeProvider theme={themeDefault}>
    <Button>teste</Button>
  </ThemeProvider>
)
ReactDOM.render(<App />, document.getElementById('app'))
