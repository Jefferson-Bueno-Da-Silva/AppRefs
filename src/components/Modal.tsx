import React, { forwardRef, useCallback, useState, useImperativeHandle } from 'react';

export interface ModalHandles {
  OpenModal: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const [ visible, setVisible ] = useState(false)

  const OpenModal = useCallback(() => {
    setVisible(true)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      OpenModal
    }
  })
  
  const handleCloseModal = useCallback(() => {
    setVisible(false)
  }, [])
  
  
  if(!visible){
    return null;
  }
  return (
    <div>
      Modal Aberto
      <button onClick={handleCloseModal} > Fechar modal </button>
    </div>
  );
}

export default forwardRef(Modal);