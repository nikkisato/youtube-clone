import './App.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import RecommendedVideos from './Component/RecommendedVideos/RecommendedVideos';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
