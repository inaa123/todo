import './TodoTemplate.css';
import logo from '../img/logo4.png';

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