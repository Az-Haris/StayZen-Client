import { Helmet } from "react-helmet-async";

const Help = () => {
  return (
    <>
      <Helmet>
        <title>Help & Support | StayZen</title>
      </Helmet>
      <div className="min-h-screen  flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl  shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold  text-center mb-6">Help & Support</h1>
          <p className="text-lg text-center mb-8">
            Need assistance? Find answers to common questions or contact our support team.
          </p>

          <div className="space-y-6">
            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg">1. How do I book a stay?</h3>
                  <p className=" mt-1">
                    Simply search for your destination, select your preferred stay, and complete the booking process.
                  </p>
                </div>
                <div className="p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg">2. What is the cancellation policy?</h3>
                  <p className="mt-1">
                    Cancellation policies vary by property. Check the cancellation terms before booking.
                  </p>
                </div>
                <div className="p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg ">3. How do I contact customer support?</h3>
                  <p className="mt-1">
                    You can contact our support team via email or live chat. Details are provided below.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div>
              <h2 className="text-2xl font-semibold">Contact Support</h2>
              <p className=" mt-2">
                If you need further assistance, feel free to reach out to us:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Email: <a href="mailto:support@stayzen.com" className="text-blue-600 hover:underline">support@stayzen.com</a></li>
                <li>Phone: <span className="font-medium">+1 (234) 567-890</span></li>
                <li>Live Chat: Available from 9 AM - 10 PM (Mon-Sat)</li>
              </ul>
            </div>

            {/* Troubleshooting Section */}
            <div>
              <h2 className="text-2xl font-semibold">Troubleshooting</h2>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li><strong>Forgot Password?</strong> Reset your password <a href="/reset-password" className="text-blue-600 hover:underline">here</a>.</li>
                <li><strong>Payment Issues?</strong> Check your bank details or try an alternative payment method.</li>
                <li><strong>Website Not Loading?</strong> Clear your browser cache or try another device.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">
              Still need help? Visit our <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a> or email us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
