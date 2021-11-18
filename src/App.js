import './App.css';
import Navbar from './components/navbar';
import SearchResult from './components/searchResult';
import Container from 'react-bootstrap/Container'
import Body from './components/Body';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <SearchResult/>
        <Body/>
      </Container>
      <Footer/>
      
    </div>
  );
}

export default App;
