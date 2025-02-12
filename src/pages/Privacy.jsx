import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | StayZen</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl  shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
          <p className=" text-lg text-center mb-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use StayZen.
          </p>

          <div className="space-y-6">
            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
              <p className=" mt-2">
                We collect personal information such as your name, email, phone number, and booking details when you use our platform.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>To process bookings and provide our services.</li>
                <li>To improve our website experience and customer support.</li>
                <li>To send important updates and promotional offers.</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-semibold">3. Data Security</h2>
              <p className=" mt-2">
                We implement strict security measures to protect your data from unauthorized access, disclosure, or alteration.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="text-2xl font-semibold">4. Cookies and Tracking</h2>
              <p className=" mt-2">
                We use cookies to enhance your browsing experience. You can control cookie settings through your browser.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-semibold ">5. Third-Party Services</h2>
              <p className=" mt-2">
                We may share limited data with trusted third parties for payment processing and analytics.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-semibold">6. Your Rights</h2>
              <p className=" mt-2">
                You have the right to access, update, or delete your personal information. Contact us for any privacy-related requests.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">
              If you have any questions about our Privacy Policy, feel free to <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
