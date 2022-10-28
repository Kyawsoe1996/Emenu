import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart/cart-slice'
import './seat.scss'
function Seat({seats}) {
  const cart = useSelector(state=>state.cart)
  const [isShow, invokeModal] = React.useState(false)
  const dispatch = useDispatch()
  const initModal = () => {
    invokeModal((prevState)=>!prevState)
  }

  const seatSelected = seats.map(function(seat){
    if(seat.id === cart.seat){
      return (
        <div className='seat-selected' title={`Current Seat - ${seat.seat_no}`}  key={seat.id} onClick={()=>handleClick(seat.id)}>
                           
          {seat.seat_no}
  
      </div>
      ) 
    }
    return (
      <div className='seat' title={`U are selecting ${seat.seat_no}... Click`}  key={seat.id} onClick={()=>handleClick(seat.id)}>
                           
      {seat.seat_no}
  
    </div>
    )
  })
  // console.log(selectedSeat,"Selected Seat")


  const handleClick =(seat_id)=> {
    console.log("Handle Click",seat_id)
    dispatch(cartActions.setSeat(seat_id))
    
    invokeModal((prevState)=>!prevState)

  }

  return (
    <>
      <Button variant="success" onClick={initModal}>
        {cart.seat? "Change Seats":"Select Seats"}
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Select Seat To Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='seats' >
                {/* {seats.map(seat => (
                   
                         <div className={selectedSeat} title={`U are selecting ${seat.seat_no}... Click`}  key={seat.id} onClick={()=>handleClick(seat.id)}>
                           
                                {seat.seat_no}
                            
                         </div>
                   
                ))} */}
                {seatSelected}
                

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

