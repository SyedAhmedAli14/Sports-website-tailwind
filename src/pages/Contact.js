import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Have questions? Get in touch with us today!
          </p>
        </section>

        {/* Contact Information */}
        <section className="container mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Details */}
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Email:</strong> syedahmedalis14@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +92 333 2823844
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> MA JINNAH ROAD SADDAR KARACHI
              </p>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57929.23355645912!2d67.01519255!3d24.8441321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977ec12!2sSaddar%20Town%2C%20Karachi%2C%20Sindh!5e0!3m2!1sen!2s!4v1732203976118!5m2!1sen!2s"
                className="w-full h-64 border-none"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
            Send Us a Message
          </h2>
          <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};