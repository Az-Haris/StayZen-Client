import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | StayZen</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl  shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-center mb-6">Terms & Conditions</h1>
          <p className=" text-lg text-center mb-8">
            Welcome to StayZen! Please read these Terms & Conditions carefully before using our services.
          </p>

          <div className="space-y-6">
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="mt-2">
                By accessing and using StayZen, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.
              </p>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-semibold">2. User Responsibilities</h2>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>You must provide accurate and up-to-date information.</li>
                <li>Do not misuse the platform or engage in fraudulent activities.</li>
                <li>You are responsible for maintaining the confidentiality of your account.</li>
              </ul>
            </div>

            {/* Booking & Payments */}
            <div>
              <h2 className="text-2xl font-semibold">3. Booking & Payments</h2>
              <p className=" mt-2">
                All bookings are subject to availability. Payments must be made securely through our platform, and cancellation policies apply.
              </p>
            </div>

            {/* Cancellations & Refunds */}
            <div>
              <h2 className="text-2xl font-semibold">4. Cancellations & Refunds</h2>
              <p className=" mt-2">
                Cancellation requests must be made within the specified timeframe. Refund eligibility depends on the property’s policy.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-semibold ">5. Limitation of Liability</h2>
              <p className=" mt-2">
                StayZen is not responsible for any loss, injury, or damage caused by third-party accommodations or services.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-semibold ">6. Changes to Terms</h2>
              <p className="mt-2">
                We reserve the right to update these Terms & Conditions at any time. Continued use of our services implies acceptance of any changes.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">
              If you have any questions, please <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
