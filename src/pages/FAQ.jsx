import { Helmet } from "react-helmet-async";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQs | StayZen</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl  shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold  text-center mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-center mb-8">
            Find answers to the most commonly asked questions about StayZen.
          </p>

          <div className="space-y-6">
            {/* Booking & Reservations */}
            <div>
              <h2 className="text-2xl font-semibold ">
                Booking & Reservations
              </h2>
              <div className="mt-4 space-y-4">
                <div className=" p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg ">
                    1. How do I book a stay?
                  </h3>
                  <p className=" mt-1">
                    Simply search for your preferred location, select an
                    accommodation, and follow the checkout process.
                  </p>
                </div>
                <div className=" p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg ">
                    2. Can I modify my reservation?
                  </h3>
                  <p className=" mt-1">
                    Yes, modifications depend on the property&apos;s policies.
                    Please check your booking details or contact support.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment & Refunds */}
            <div>
              <h2 className="text-2xl font-semibold ">Payment & Refunds</h2>
              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg ">
                    3. What payment methods do you accept?
                  </h3>
                  <p className="mt-1">
                    We accept credit/debit cards, PayPal, and select digital
                    wallets.
                  </p>
                </div>
                <div className="p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg ">
                    4. How do refunds work?
                  </h3>
                  <p className=" mt-1">
                    Refund eligibility depends on the cancellation policy.
                    Refunds are processed within 7-10 business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Account & Support */}
            <div>
              <h2 className="text-2xl font-semibold ">Account & Support</h2>
              <div className="mt-4 space-y-4">
                <div className=" p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg ">
                    5. How do I reset my password?
                  </h3>
                  <p className=" mt-1">
                    Click on the &quot;Forgot Password&quot; link on the login
                    page to reset your password.
                  </p>
                </div>
                <div className="p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg ">
                    6. How can I contact customer support?
                  </h3>
                  <p className=" mt-1">
                    Reach out to us via email at{" "}
                    <a
                      href="mailto:support@stayzen.com"
                      className="text-blue-600 hover:underline"
                    >
                      support@stayzen.com
                    </a>{" "}
                    or use the live chat feature.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg  font-semibold">
              Still have questions?{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact Us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
