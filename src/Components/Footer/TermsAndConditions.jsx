import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Terms and Conditions</h1>

      <div className="space-y-6 text-lg">
        <section>
          <h2 className="text-2xl font-semibold">Use of the Website</h2>
          <ul className="list-disc pl-6">
            <li>You must be at least [14] years old to use our website or make purchases.</li>
            <li>You are responsible for maintaining the confidentiality of your account information, including your username and password.</li>
            <li>You agree to provide accurate and current information during the registration and checkout process.</li>
            <li>You may not use our website for any unlawful or unauthorized purposes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Product Information and Pricing</h2>
          <ul className="list-disc pl-6">
            <li>We strive to provide accurate product descriptions, images, and pricing information. However, we do not guarantee the accuracy or completeness of such information.</li>
            <li>Prices are subject to change without notice. Any promotions or discounts are valid for a limited time and may be subject to additional terms and conditions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Orders and Payments</h2>
          <ul className="list-disc pl-6">
            <li>By placing an order on our website, you are making an offer to purchase the selected products.</li>
            <li>We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity.</li>
            <li>You agree to provide valid and up-to-date payment information and authorize us to charge the total order amount, including applicable taxes and shipping fees.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p>Our liability for any damages arising from the use of our website or products shall be limited to the amount paid for the specific product(s) in question. We are not liable for any indirect, incidental, or consequential damages.</p>
        </section>


        <section>
          <h2 className="text-2xl font-semibold">Changes to the Terms</h2>
          <p>We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page with a revised "last updated" date.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
