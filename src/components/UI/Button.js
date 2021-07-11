import css from './Button.module.css';

const Button = ({ type, onClick, children }) =>
{
   return (
      <button className={ css.button } type={ type || 'button' } onClick={ onClick }>
         { children }
      </button>
   );
}

export default Button;