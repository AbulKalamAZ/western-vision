import React from 'react';

import { DialogContent, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";
import CloseIcon from '../../assets/close.svg';
import './modal.css';

const ContactModal = ({showDialog, close}) => {
    

  return (
      <DialogOverlay
        className="dialog-overlay"
        isOpen={showDialog}
        onDismiss={close}
      >
        <DialogContent className="dialog-content">
            

            <div className='modal-header'>
                <h2>Let us know your requirements</h2>

                <button className="close-button" onClick={close}>
                    <img src={CloseIcon} alt='close-icons' />
                </button>
            </div>

            <div className='modal-body'>
                <form className="contact-form">
                    <div className="input-container">
                        <input type="text" id="name" name="name" placeholder="Your name" required />
                    </div>

                    <div className="input-container">
                        <input type="email" id="email" name="email" placeholder="Your email" required />
                    </div>

                    <div className="input-container">
                        <input type="text" id="phone" name="phone" placeholder="Your phone number" />
                    </div>

                    <div className="input-container">
                        <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
                    </div>
                    <button className="send-btn">Send</button>
                </form>
            </div>
        </DialogContent>
      </DialogOverlay>
  )
}

export default ContactModal