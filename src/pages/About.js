import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Learn more about our journey, mission, and team behind Sports Central.
          </p>
        </section>

        {/* Section 1: Ownership */}
        <section className="container mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
            Meet the Owner
          </h2>
          <p className="text-gray-700 leading-relaxed text-center">
            Sports Central was founded by <strong>Syed Ahmed Ali Shah</strong>, a passionate sports enthusiast. His mission is to create a one-stop platform for athletes, fans, and sports lovers to explore the best gear, insights, and news.
          </p>
        </section>

        {/* Section 2: Mission */}
        <section className="bg-white py-12 px-6 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-center">
            We aim to inspire the next generation of athletes and sports fans by providing top-notch equipment, insightful articles, and a community-driven platform.
          </p>
        </section>

        {/* Section 3: History */}
        <section className="container mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
            Our Journey
          </h2>
          <p className="text-gray-700 leading-relaxed text-center">
            Starting in 2024, Sports Central has grown from a small website to a global platform serving thousands of sports enthusiasts worldwide.
          </p>
        </section>

        {/* Section 4: Vision */}
        <section className="bg-white py-12 px-6 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-center">
            To be the leading platform where sports lovers can discover, engage, and excel in their passions.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
