import React, { useCallback, useRef } from 'react'
import Modal, { ModalHandles } from './components/Modal'

function App() {
  const modalRef = useRef<ModalHandles>(null)

  const handleOpenModal = useCallback(() => {
    modalRef.current?.OpenModal()
  }, [])

  return (
    <div>
      <button onClick={handleOpenModal}>Abrir modal</button>

      <Modal ref={modalRef} />
    </div>
  )
}

export default App
