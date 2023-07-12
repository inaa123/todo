import { useCallback, useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';
import './TodoInsert.css';
// import { 아이콘이름 } from 'react-icons/md'; => https://react-icons.github.io/react-icons/#/icons/md

const TodoInsert = ({onInsertToggle, onInsert, selectedTodo, onUpdate}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      
      e.preventDefault();
      onInsert(value);
      setValue(''); //value값 초기화
      onInsertToggle();
    },
    [onInsert, value],
  );
  
  //수정버튼 눌렀을 때  text 보이게..., 
  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form className="TodoInsert" onSubmit={ //onSubmit함수가 selecteTodo여부에 따라 있는경우 없는경우 나눠야함
        selectedTodo 
        ? () => {
          onUpdate(selectedTodo.id, value)
        } 
        : onSubmit
        }
      >
      <input 
          placeholder="할 일을 입력하세요" 
          value={value}
          onChange={onChange}
        />
        <button type="submit" >
          <HiArrowUp />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;