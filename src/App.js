import PostList from './components/PostList';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Add Post</h1>
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
