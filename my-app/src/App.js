import './App.css';
import Header from './components/header/Header';
import Courseslist from './components/courseslist/courseslist';
import {Routes,
  Route,
  BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import CourseslistApi from './components/courseslist/courseslistApi';
import InfoAbt from './components/infoabt/infoabt';
import { useParams } from 'react-router-dom';

function App() {
  return (
   
    <Router>
    <div className="App">
    
      
      <Header> </Header>
      <Routes>
      <Route path ="/" element = {<Home />}></Route>
      <Route path = "/catalog" element = {<Courseslist />}></Route>
      <Route path = "/about" element = {<About />}></Route>
      <Route path = "/catalogapi" element = {<CourseslistApi />}> </Route>
      <Route path="/catalogapi/:id/posts" element={<InfoAbt />} />
      <Route path = "*" element = {<Error/>}></Route>
      
      

      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
