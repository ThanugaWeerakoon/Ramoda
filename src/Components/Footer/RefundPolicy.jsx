import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Refund Policy</h1>
      
      <div className="space-y-6 text-lg">
        <section>
          <h2 className="text-2xl font-semibold">Returns</h2>
          <p>We accept returns within [3] days from the date of purchase. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Refunds</h2>
          <p>Once we receive your return and inspect the item, we will notify you of the status of your refund. If your return is approved, we will initiate a refund to your original method of payment. Please note that the refund amount will exclude any shipping charges incurred during the initial purchase.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Exchanges</h2>
          <p>If you would like to exchange your item for a different size, color, or style, please contact our customer support team within [X] days of receiving your order. We will provide you with further instructions on how to proceed with the exchange.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Non-Returnable Items</h2>
          <ul className="list-disc pl-6">
            <li>Gift cards</li>
            <li>Downloadable software products</li>
            <li>Personalized or custom-made items</li>
            <li>Perishable goods</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Damaged or Defective Items</h2>
          <p>In the unfortunate event that your item arrives damaged or defective, please contact us immediately. We will arrange for a replacement or issue a refund, depending on your preference and product availability.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Return Shipping</h2>
          <p>You will be responsible for paying the shipping costs for returning your item unless the return is due to our error (e.g., wrong item shipped, defective product). In such cases, we will provide you with a prepaid shipping label.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Processing Time</h2>
          <p>Refunds and exchanges will be processed within [X] business days after we receive your returned item. Please note that it may take additional time for the refund to appear in your account, depending on your payment provider.</p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
