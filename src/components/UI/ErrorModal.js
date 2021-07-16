import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';

import css from './ErrorModal.module.css';

const Backdrop = ({ onClose }) =>
   <div className={ css.backdrop } onClick={ onClose }/>;

const Overlay = ({ msg, onClose }) =>
{
   return (
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
   );
}

const ErrorModal = ({ msg, onClose }) =>
{
   return (
      <>
         {
            ReactDOM.createPortal(
               <Backdrop onClose={ onClose } />,
               document.getElementById('backdrop-root')) 
         }
         { 
            ReactDOM.createPortal(
               <Overlay msg={ msg } onClose={ onClose } />,
               document.getElementById('overlay-root'))
         }
      </>
   );
}

export default ErrorModal;