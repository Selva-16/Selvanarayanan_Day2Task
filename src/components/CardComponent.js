import React from 'react';
import './CardComponent.css';

const CardComponent = () => {
  return (
    <div className="container-fluid">
        <h3>Card Creation Using Bootstrap</h3>
        {/* card */}
        <div className="card-container">
            <div className="card">
              <div className="card-content">
              <h2 className="card-title">Credit Card</h2>
                  <p className="card-description">
                  A credit card is a financial tool that allows you to make purchases on credit, without having funds debited from your bank account.
                  </p>
                  <button className="btn btn-primary">Get It</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Visit Card</h2>
                  <p className="card-description">
                  A visiting card is a small card that is typically used to introduce oneself in social settings.
                  </p>
                  <button className="btn btn-primary">Get It</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Debit Card</h2>
                  <p className="card-description">
                  A debit card is a plastic card that allows you to make purchases and withdraw cash from your bank account.
                  </p>
                  <button className="btn btn-primary">Get It</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Gift Card</h2>
                  <p className="card-description">
                  A gift card is a prepaid card that can be used to buy goods and services from a business.
                  </p>
                  <button className="btn btn-primary">Get It</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">EMI Card</h2>
                  <p className="card-description">
                  An EMI (Equated Monthly Instalment) card is a financial product that lets you make purchases on credit and pay for them in fixed monthly installments. 
                  </p>
                  <button className="btn btn-primary">Get It</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Greeting Card</h2>
                  <p className="card-description">
                  A decorated card with a message of good wishes that is sent or given to someone on a special occasion.
                  </p>
                  <button className="btn btn-primary">Get It</button>
              </div>
            </div>
        </div>
    </div>
  );
};

export default CardComponent;
