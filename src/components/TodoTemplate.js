import './TodoTemplate.scss';
import logo from '../img/logo.png';

const TodoTemplate = ({ children }) => {
  return (
  <div className="TodoTemplate">
    <div className="app-title">
      <img 
        className="logo"
        src={logo}
        alt="logo"/>
    </div>
    <div className="content" >{children}</div>
  </div>
  );
};

export default TodoTemplate;