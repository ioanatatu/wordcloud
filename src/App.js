import './App.css';

// components
import DataCard from './containers/DataCard/DataCard';

// data
import data from './object.json';

function App() {
   return (
      <div className='App' title='app'>
         <DataCard data={data.topics} title='Word Cloud' />
      </div>
   );
}

export default App;
