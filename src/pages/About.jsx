import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | StayZen</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">About StayZen</h1>
          <p className="text-gray-600 text-lg text-center mb-8">
            Welcome to <span className="font-semibold text-blue-600">StayZen</span> – your ultimate destination for a seamless and stress-free accommodation experience.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Who We Are</h2>
              <p className="text-gray-600 mt-2">
                At StayZen, we believe that finding the perfect place to stay should be effortless. Whether you’re traveling for business, leisure, or an extended stay, our platform ensures a hassle-free booking experience with top-rated accommodations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
              <p className="text-gray-600 mt-2">
                Our mission is to provide a <span className="font-semibold">comfortable, secure, and convenient</span> lodging experience for every traveler. We handpick accommodations that ensure <span className="font-semibold">quality, safety, and affordability</span>, making your stay as relaxing as possible.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Why Choose StayZen?</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                <li><span className="font-semibold text-blue-600">Handpicked Stays</span> – Carefully curated accommodations for quality and comfort.</li>
                <li><span className="font-semibold text-blue-600">Seamless Booking</span> – A smooth and intuitive platform for quick reservations.</li>
                <li><span className="font-semibold text-blue-600">Customer-Centric Approach</span> – We prioritize your needs with top-notch support.</li>
                <li><span className="font-semibold text-blue-600">Secure & Reliable</span> – Verified stays for a safe and pleasant experience.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 font-semibold">📍 Explore. Book. Stay Zen.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
