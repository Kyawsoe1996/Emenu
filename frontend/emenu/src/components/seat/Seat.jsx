import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './seat.scss'
function Seat({seats}) {
  const [isShow, invokeModal] = React.useState(false)
   
  console.log(isShow)
  const initModal = () => {
    invokeModal((prevState)=>!prevState)
  }

  const handleClick =(seat_id)=> {
    console.log("Handle Click",seat_id)
    invokeModal((prevState)=>!prevState)

  }

  return (
    <>
      <Button variant="success" onClick={initModal}>
        Select Seats
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Select Seat To Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='seats' >
                {seats.map(seat => (
                   
                         <div className='seat'title={`U are selecting ${seat.seat_no}... Click`}  key={seat.id} onClick={()=>handleClick(seat.id)}>
                           
                                {seat.seat_no}
                            
                         </div>
                   
                ))}
                

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          {/* <Button variant="dark" onClick={initModal}>
            Store
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Seat

