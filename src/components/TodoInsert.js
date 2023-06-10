import { useCallback, useState } from 'react';
import { MdAdd, MdAddCircle } from 'react-icons/md';
import './TodoInsert.scss';
// import { 아이콘이름 } from 'react-icons/md'; => https://react-icons.github.io/react-icons/#/icons/md

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(''); //value값 초기화

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <div>
      <div className="open">
        <MdAddCircle />
      </div>
      
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input 
          placeholder="할 일을 입력하세요" 
          value={value}
          onChange={onChange}
        />
        <button type="submit" >
          <MdAdd />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;