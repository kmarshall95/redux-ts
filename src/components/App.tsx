import {Provider} from 'react-redux';
import {store} from '../state';
import RespoitoriesList from './RepositoriesList';

const App = () => {
    return (
        <Provider store={store}>
        <div className="App">
            <h1>Search for a package</h1>
            <RespoitoriesList />
        </div>
        </Provider>
    );
};

export default App;