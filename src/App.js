import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef
  }
`
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>Todo List</TodoTemplate>
    </>
  );
}

export default App;
