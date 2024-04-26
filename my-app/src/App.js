import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/main';
import Courseslist from './components/courseslist/courseslist';
import {Routes,
  Route,
  BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Course from './components/course/courses';
import CourseslistApi from './components/courseslist/courseslistApi';
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
      <Route path = "*" element = {<Error/>}></Route>
      
      {/* <Main></Main> */}
      {/* <Courseslist> </Courseslist> */}
      
      {/* <Footer> </Footer> */}
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
