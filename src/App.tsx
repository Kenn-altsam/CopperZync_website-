import { Smartphone, ArrowDown, Star, Download, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FCEABB] via-[#FFFFFF] to-[#F5C242]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-[#F5C242]/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src="/logo_coin.png?v=1" 
                alt="CopperZync Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#F8B500] to-[#F5C242] bg-clip-text text-transparent">
              CopperZync
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* App Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-3xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img 
                src="/logo_coin.png?v=1" 
                alt="CopperZync App Icon" 
                className="w-32 h-32 object-cover"
              />
            </div>
          </div>

          {/* App Title & Description */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Experience
            <span className="bg-gradient-to-r from-[#F8B500] to-[#F5C242] bg-clip-text text-transparent"> CopperZync</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover the power of seamless connectivity and enhanced productivity with our innovative mobile application designed for the modern world.
          </p>

          {/* Animated Arrow */}
          <div className="mb-8 flex justify-center">
            <div className="animate-bounce">
              <ArrowDown className="w-8 h-8 text-[#F8B500]" />
            </div>
          </div>

          {/* App Store Button */}
          <div className="mb-16">
            <a 
              href="https://apps.apple.com/kz/app/copperzync-coin-identifier/id6749579071" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#F8B500] to-[#F5C242] text-white px-12 py-6 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover:from-[#F5C242] hover:to-[#F8B500] group"
            >
              <Download className="w-6 h-6 group-hover:animate-pulse" />
              <span>Download on App Store</span>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowDown className="w-4 h-4 rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#F5C242]/20">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F8B500] to-[#F5C242] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">Experience the highest quality features designed with attention to every detail.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#F5C242]/20">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F8B500] to-[#F5C242] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Optimized performance ensuring smooth and responsive user experience.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#F5C242]/20">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F8B500] to-[#F5C242] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mobile First</h3>
              <p className="text-gray-600">Designed specifically for mobile devices with intuitive touch interactions.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-[#F5C242]/30">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-6">Join thousands of users who have already discovered the power of CopperZync.</p>
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#F8B500] to-[#F5C242] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Get CopperZync Now</span>
              <ArrowDown className="w-4 h-4 rotate-[-45deg]" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-[#F5C242]/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/logo_coin.png?v=1" 
                alt="CopperZync Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-gray-700">CopperZync</span>
          </div>
          <p className="text-gray-500 text-sm">© 2025 CopperZync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;