import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import classes from './PaymentForm.module.css'
import PaymentSuccessfullModel from './PaymentSuccessfullModel';

function PaymentForm() {
    const [paymentOption,setPaymentOption] = useState('')
    const [cardNumb, setCardNumb] = useState("")
    const [expiry,setExpiry] = useState("")
    const [cvvNumb,setCvvNumb] = useState("")
    const [cardPayment, setCardPayment] = useState(true)
    const [bank,setBank]=useState('')
      const [show,setShow]=useState(false)
    const handleSubmitcardNUmber = (e) => {
        e.preventDefault()
       setCardNumb(e.target.value)
    }
    const handleSubmitsetExpiry = (e) => {
        e.preventDefault()
       setExpiry(e.target.value)
    }
    const handleSubmitCvv = (e) => {
        e.preventDefault()
       setCvvNumb(e.target.value)
    }
    const handleSelectOption = (e) => {
        setPaymentOption(e.target.value)
    }
    const handleSelectBank = (e) =>{
        setBank(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(cardNumb,expiry,cvvNumb)
        if(!cardNumb || !expiry || !cvvNumb){
            alert('please Fill the Details')
        }else{
            setShow(true)
        }
        
    }
    

    return ( 
        <Container fluid className={classes.mainContainer}>
        <h5>Payment Method</h5>
              <hr />
        <label htmlFor="">Select Payment Option</label>
        <br />
        <select name="" id="" onChange={handleSelectOption} className={classes.selectPaymentDesign}> 
            <option value="" disabled selected hidden>Payment Methods</option>
            <option value="card_payment">Credit Card</option>
            <option value="internet_banking">Internet Banking</option>
        </select>
        <hr />
          {paymentOption === 'card_payment' && (
        <form action="" className={classes.FormDisplay}>
            <label htmlFor="">Card Number: </label>
            <input className='form-control' type="number" value={cardNumb} placeholder='0123 4567 8910'  onChange={handleSubmitcardNUmber}/>
            <label htmlFor="">Expiry: </label>
            <input className='form-control'  type="number" value={expiry} placeholder='MM/YY' onChange={handleSubmitsetExpiry}/>
            <label htmlFor="" >CVV: </label>
            <input className="form-control" type="password" placeholder='***' value={cvvNumb}  onChange={handleSubmitCvv}/>
            <hr />
            <Button variant='success' className={classes.paymentBtn} type='submit' onClick={handleSubmit}>Pay Now</Button>
        </form>
      )}

        {paymentOption === 'internet_banking' && (
        <form action="" className={classes.FormDisplay}>
            <label>Select Bank</label>
            <select name="" id="" onChange={handleSelectBank} className={classes.selectBank}> 
            <option value="" disabled selected hidden>Select Bank</option>
            <option value="UBI">UBI</option>
            <option value="SBI">SBI</option>
            <option value="HDFC">HDFC</option>
            <option value="ICICI">ICICI</option>
            <option value="Axis">Axis</option>
            </select>
            <Button variant='success' className={classes.paymentBtn} type='submit' onClick={handleSubmit}>Pay Now</Button>
        </form>
      )}
      <PaymentSuccessfullModel open={show} close={()=>setShow (false)}/>
        </Container>
     );
}

export default PaymentForm;