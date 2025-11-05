import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import classes from './PaymentForm.module.css'
function PaymentForm() {
    const [paymentOption,setPaymentOption] = useState('')
    const [cardNumb, setCardNumb] = useState("")
    const [expiry,setExpiry] = useState("")
    const [cvvNumb,setCvvNumb] = useState("")
    const [cardPayment, setCardPayment] = useState(true)
    const [bank,setBank]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(cardNumb, expiry, cvvNumb)
    }
    const handleSelectOption = (e) => {
        setPaymentOption(e.target.value)
    }
    const handleSelectBank = (e) =>{
        setBank(e.target.value)
    }
    const handleSubmitForm = () => {
        alert('your Payment is Successfully Done')
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
        <form action="" onSubmit={handleSubmit} className={classes.FormDisplay}>
            <label htmlFor="">Card Number: </label>
            <input className='form-control' type="number" value={cardNumb} placeholder='0123 4567 8910' onChange={(e) => setCardNumb(e.target.value)}/>
            <label htmlFor="">Expiry: </label>
            <input className='form-control'  type="number"  value={expiry} placeholder='MM/YY' onChange={(e)=>setExpiry(e.target.value)}/>
            <label htmlFor="" >CVV: </label>
            <input className="form-control" type="password" placeholder='***' value={cvvNumb}  onChange={(e)=> setCvvNumb(e.target.value)}/>
            <hr />
            <Button className={classes.paymentBtn} type='submit' onClick={handleSubmitForm }>Pay Now</Button>
        </form>
      )}

        {paymentOption === 'internet_banking' && (
        <form action="" onSubmit={handleSubmit} className={classes.FormDisplay}>
            <label>Select Bank</label>
            <select name="" id="" onChange={handleSelectBank} className={classes.selectBank}> 
            <option value="" disabled selected hidden>Select Bank</option>
            <option value="UBI">UBI</option>
            <option value="SBI">SBI</option>
            <option value="HDFC">HDFC</option>
            <option value="ICICI">ICICI</option>
            <option value="Axis">Axis</option>
            </select>
            <Button className={classes.paymentBtn} type='submit' onClick={handleSubmitForm }>Pay Now</Button>
        </form>
      )}
        </Container>
     );
}

export default PaymentForm;