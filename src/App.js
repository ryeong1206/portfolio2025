// yarn add sass
// yarn add react-router-dom
// yarn add react-icons
// yarn add react-bootstrap-bootstrap

import './App.scss';

import { Routes ,Route } from 'react-router-dom';
import { Provider } from './Context';
import Home from './Home';
import Project from './component/Project';
import ProjectDetail from './component/ProjectDetail';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Provider>
      <ScrollToTop/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Project' Component={Project}/>
        <Route path='/ProjectDetail/:id' Component={ProjectDetail}/>
      </Routes>
    </Provider>
  );
}

export default App;
