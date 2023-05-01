import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef
  }
`
function App() {
  return (
    <>
    <GlobalStyle />
      <h1>Todo List</h1>
    </>
  );
}

export default App;
