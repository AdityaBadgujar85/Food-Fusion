import React from "react";
import classes from "./PaymentSuccessfullModel.module.css";

function PaymentSuccessfullModel(props) {
    const open = props.open
    const close = props.close
    if(!open){
        return null;
    }
  return (
    <div className={classes.backdrop} onClick={close }>
      <div className={classes.modalBox}>
        <h3 className={classes.title}>Payment Successful</h3>
        <p className={classes.text}>Thank you for your order</p>
        <button className={classes.button} onClick={close}>OK</button>
      </div>
    </div>
  );
}

export default PaymentSuccessfullModel;
