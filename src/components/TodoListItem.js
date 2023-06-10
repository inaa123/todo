import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
  RiDeleteBin6Fill,
  RiEditLine
} from 'react-icons/ri'
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />}
        <div className="text">{text}</div>
      </div>
      <div className="update">
        <RiEditLine />
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <RiDeleteBin6Fill />
      </div>
    </div>
  );
};

export default TodoListItem;