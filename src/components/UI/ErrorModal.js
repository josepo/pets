import Card from './Card';
import Button from './Button';

import css from './ErrorModal.module.css';

const ErrorModal = ({ msg, onClose }) =>
{
   return (
      <>
         <div className={ css.backdrop } onClick={ onClose }/>
         <Card className={ css.modal }>
            <header className={ css.header }>
               <h2>Error</h2>
            </header>
            <div className={ css.content }>
               <p>{ msg }</p>
            </div>
            <footer className={ css.actions }>
               <Button onClick={ onClose }>Ok</Button>
            </footer>
         </Card>
      </>
   );
}

export default ErrorModal;