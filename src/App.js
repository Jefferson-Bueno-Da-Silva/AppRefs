import React, { useCallback, useRef } from 'react'
import Modal from './components/Modal.js'

function App() {
  const modalRef = useRef(null)

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
