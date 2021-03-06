import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./Redux/store";
import React, {useEffect} from 'react';
import {todosActions} from './Redux/actions';

//Componens
import Todo from './Components/Todo';

function TodoApp() {
  const dispatch = useDispatch();
  const {loading, error, items} = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(todosActions.fetchTodos());
  }, []);

  return (
    <div className="App">
      {loading && 'Fetching todos...'}
      {error && 'Error while fetching todos...'}
      {items && items.map((item, index) => (<Todo key={index} todo={item} />))}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
