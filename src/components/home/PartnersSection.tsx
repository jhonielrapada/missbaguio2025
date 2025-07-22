export default function PartnersSection() {
  return (
    <section id="partners" className="min-h-screen  py-20 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-purple-800">Our Partners</h2>
        <p className="text-lg text-gray-700">
          We’re proud to partner with these amazing organizations...
        </p>

        {/* Side-by-side container */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sponsor Tiers */}
          <div className="w-full lg:w-1/2 space-y-12">
            {/* Platinum */}
            <div>
              <h3 className="text-2xl font-semibold">Platinum Sponsors</h3>
              <div className="flex flex-wrap justify-center gap-6 mt-4">
                <div className="h-40 w-60 flex items-center justify-center bg-white border rounded shadow-sm">
                  <img
                    src="/logo/images.png"
                    className="max-h-full max-w-full object-contain"
                    alt="BB Company Logo"
                  />
                </div>
                <div className="h-40 w-60 flex items-center justify-center bg-white border rounded shadow-sm">
                  <img
                    src="/logo/bb.jpg"
                    className="max-h-full max-w-full object-contain"
                    alt="BB Company Logo"
                  />
                </div>
              </div>
            </div>

            {/* Gold */}
            <div>
              <h3 className="text-2xl font-semibold">Gold Sponsors</h3>
              <div className="flex flex-wrap justify-center gap-6 mt-4">
                <div className="h-40 w-60 flex items-center justify-center bg-white border rounded shadow-sm">
                  <img
                    src="/logo/cc.png"
                    className="max-h-full max-w-full object-contain"
                    alt="BB Company Logo"
                  />
                </div>
                <div className="h-40 w-60 flex items-center justify-center bg-white border rounded shadow-sm">
                  <img
                    src="/logo/bb.jpg"
                    className="max-h-full max-w-full object-contain"
                    alt="BB Company Logo"
                  />
                </div>
              </div>
            </div>

            {/* Silver */}
            <div>
              <h3 className="text-2xl font-semibold">Silver Sponsors</h3>
              <div className="flex flex-wrap justify-center gap-6 mt-4">
                <div className="h-40 w-60 flex items-center justify-center bg-white border rounded shadow-sm">
                  <img
                    src="/logo/bb.jpg"
                    className="max-h-full max-w-full object-contain"
                    alt="BB Company Logo"
                  />
                </div>
                <div className="h-40 w-60 flex items-center justify-center bg-white border rounded shadow-sm">
                  <img
                    src="/logo/images.png"
                    className="max-h-full max-w-full object-contain"
                    alt="BB Company Logo"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Partner Form */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Become a Partner
            </h3>
            <form className="space-y-6 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your company name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message / Proposal
                </label>
                <textarea
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  rows={4}
                  placeholder="Tell us why you want to partner with Miss Baguio"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition"
              >
                Submit Partnership Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
