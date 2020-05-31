import React from 'react';
import GlobalStyle, { Container } from './styles'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App: React.FC = () =>(
  <>
    <Container>
      <Header />
      <Main/>
      <Footer/>
    </Container>
    <GlobalStyle />
  </>
);


export default App;
