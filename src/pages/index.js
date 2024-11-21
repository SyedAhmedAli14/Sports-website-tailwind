import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Welcome to Sports Central</h1>
          <p className="text-lg">Your one-stop shop for all things sports!</p>
        </section>

        {/* Slider Section */}
        <section className="container mx-auto py-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">Featured Sports</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Replace the placeholder images with actual ones */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDLXc2hk2SNyG6kokVmBVbDqhKCPKhloPoTw&s"
              alt="Sport 1"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVYJXsw4pq3R4YHcXO90h8rpuHZNdgQjusw&s"
              alt="Sport 2"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTHA9cVxj463E02NqPn9-0EbBWSY8wBLBHdA&s"
              alt="Sport 3"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq61OD7oY6r0QHndA2isY8Ftl6G-6ICAb3oQ&s"
              alt="Sport 4"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>

        <section className="container mx-auto py-8">
  <h2 className="text-2xl font-bold mb-4 text-center text-black">Our Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Product 1 */}
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1V6N6jBc4zMxi-5UG6xQpwyDuXzVWYsThg&s"
        alt="Product 1"
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2 text-black">Product 1</h3>
      <p className="text-gray-700">A great product for sports enthusiasts.</p>
    </div>

    {/* Product 2 */}
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MAhoWWhe_5Hkh1htIt15tpQ0yZrPs2DgaQ&s"
        alt="Product 2"
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2 text-black">Product 2</h3>
      <p className="text-gray-700">Take your game to the next level.</p>
    </div>

    {/* Product 3 */}
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwPZe7F04ZIx8X9VzP-WPVHB3wmRV6vti_A&s"
        alt="Product 3"
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2 text-black">Product 3</h3>
      <p className="text-gray-700">Perfect for professional players.</p>
    </div>
  </div>
 </section>
      </main>
      <Footer />
    </>
  );
}
