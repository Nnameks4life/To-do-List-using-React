import React, {useState} from 'react'
import Backdrop from './Backdrop';
import Modal from './modal/Modal';

const Todo = (props) => {

    const [showModal, setShowModal] = useState(false);
    const handleDelete = () => {
        setShowModal(true)
    }
    const closeModalHandler = () => {
      setShowModal(false);
    }
    return (
         <div className='card'>
       <h2>{props.Title}</h2>
       <div className='actions'>
       <button className='btn' onClick={handleDelete}>Delete</button>
       </div>
       {showModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
       {showModal && <Backdrop onClick={closeModalHandler}/>}
       
     </div>
    )
}

export default Todo;