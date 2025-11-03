const About = () => {
  return (
    <div className="bg-[#f5f5dc]">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">About Elegance</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe that great style shouldn't come at the cost of quality. Our mission is to create
              timeless pieces that elevate your wardrobe and stand the test of time.
            </p>
          </div>

          <div className="h-96 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] rounded-lg flex items-center justify-center text-gray-600 text-xl">
            About Us Hero Image
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, Elegance was born from a simple idea: fashion should be both beautiful
                  and responsible. We started with a small collection of essential pieces, focusing on
                  quality craftsmanship and sustainable materials.
                </p>
                <p>
                  Today, we've grown into a globally recognized brand, but our core values remain the same.
                  Every piece in our collection is thoughtfully designed and ethically produced, ensuring
                  that you look good and feel good about your choices.
                </p>
                <p>
                  We work directly with skilled artisans and manufacturers who share our commitment to
                  excellence and sustainability. From fabric selection to final stitching, every step of
                  our process is carefully considered.
                </p>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] rounded-lg flex items-center justify-center text-gray-600">
              Story Image
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-16">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="h-48 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] rounded-lg mb-6 flex items-center justify-center text-gray-600">
                Quality Icon
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We never compromise on quality. Every piece is crafted with premium materials and
                exceptional attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="h-48 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] rounded-lg mb-6 flex items-center justify-center text-gray-600">
                Sustainability Icon
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Environmental responsibility guides our decisions, from sourcing materials to packaging
                and shipping.
              </p>
            </div>

            <div className="text-center">
              <div className="h-48 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] rounded-lg mb-6 flex items-center justify-center text-gray-600">
                Timeless Icon
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Timeless Design</h3>
              <p className="text-gray-600 leading-relaxed">
                We create pieces that transcend trends, offering classic styles that remain relevant
                season after season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-16">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Creative Director', 'Head of Design', 'Sustainability Lead', 'Production Manager'].map(
              (role, index) => (
                <div key={index} className="text-center">
                  <div className="h-64 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8d0] rounded-lg mb-4 flex items-center justify-center text-gray-600">
                    Team Member
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">Team Member</h3>
                  <p className="text-gray-600">{role}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Join Our Journey</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of our community and stay updated with our latest collections and sustainability
            initiatives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="bg-white text-gray-900 px-10 py-4 font-medium hover:bg-[#8b7355] hover:text-white transition-colors"
            >
              Shop Now
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white px-10 py-4 font-medium border-2 border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;