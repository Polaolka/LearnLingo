import { ModalStyled } from './Modal.styled';
import { IoMdClose } from 'react-icons/io';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ active = false, setActive, children }) => {


  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  useEffect(() => {
    if (active) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [active]);

  const closeModal = () => {
    setActive(false);
  };

  const handleCloseModal = e => {
    if (
      (e.type === 'click' && e.target === e.currentTarget) ||
      (e.type === 'keydown' && e.key === 'Escape')
    ) {
      setActive(false);
    }
  };

  return createPortal(
    <ModalStyled
      onClick={handleCloseModal}
      className={!active ? 'is-hidden' : ''}
    >
      <div className="modal">
        <div className="inner">
          <button type="buttn" className="close" onClick={closeModal}>
            {isSmallScreen ? (
              <RiArrowGoBackLine className="return__icon" />
            ) : (
              <IoMdClose className="close__icon" />
            )}
          </button>
          {children}
        </div>
      </div>
    </ModalStyled>,
    modalRoot
  );
};

export default Modal;
