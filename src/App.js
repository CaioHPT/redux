import Sidebar from './components/SideBar';
import Video from './components/Video'
import { Provider } from 'react-redux'
import Store from './store'

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <div className="divApp">
          <Video />
          <Sidebar />
        </div>
      </Provider>
    </div>
  );
}

export default App;
