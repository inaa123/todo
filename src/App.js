import { useState, useRef, useCallback } from 'react';
import { MdAddCircle } from 'react-icons/md'
import './App.css' ;
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null); 
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링하기',
      checked: true
    }, 
    {
      id: 3,
      text: '일정관리 앱 만들어보기',
      checked: false
    }
  ]);

  //고유값 id
  // ref를 사용해서 변수 담기. id는 렌더링 정보x
  const nextId = useRef(4);

  const onInsertToggle = () => {
    if(selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //id값 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  
  const onChangeSelectedTodo = useCallback(
    todo => {
      setSelectedTodo(todo);
    }
  ); // onChangeSelectedTodo함수를 TodoListItem으로 보내준다.
  
  const onUpdate = useCallback(
    (id, text) => {
      onInsertToggle();
      setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo));
    }
  );

  return (
    <TodoTemplate>
      <TodoList 
        todos={todos} 
        onRemove={onRemove} 
        onToggle={onToggle} 
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo} //TodoList통해서 TodoListItem까지..
      />
      <div className="addButton" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle} 
          onInsert={onInsert}
          onUpdate={onUpdate}
          />
        )}
    </TodoTemplate>
  );
};

export default App;