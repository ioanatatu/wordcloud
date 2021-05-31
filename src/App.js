import './App.css';

// components
import DataCard from './containers/DataCard/DataCard';

// data
import data from './object.json';

function App() {
   return (
      <div className='App'>
         <DataCard data={data.topics} title='Word Cloud' />
      </div>
   );
}

export default App;
