import {
  Download,
  Heart,
  MessageCircle,
  Users,
  Camera,
  Share,
  Plus,
  Bell,
  Search,
  Home,
} from "lucide-react";
import logo from "../public/logo2.png";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="px-6 py-6 border-b border-zinc-800">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center">
              <img src={logo} alt="" />
            </div>
            <span className="text-xl font-semibold text-zinc-100">Wishpr</span>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-zinc-400 hover:text-zinc-100 transition-colors">
            <span className="text-sm">Sign In</span>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="py-20 text-center">
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-zinc-400">Join the community</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light text-zinc-100 mb-6 leading-tight">
              Share your wishes
              <br />
              <span className="font-medium text-zinc-300">with the world</span>
            </h1>

            <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect with friends, share your dreams, and inspire each other.
              The social platform where wishes come alive through community
              support.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="https://expo.dev/artifacts/eas/w4GzQ5Z9y7AMQY1bgS5ewp.apk
"
                className="flex items-center space-x-3 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 px-8 py-4 rounded-lg font-medium transition-colors w-full sm:w-auto">
                <Download className="w-5 h-5" />
                <span>Download for iOS</span>
              </a>

              <a
                href="https://expo.dev/artifacts/eas/w4GzQ5Z9y7AMQY1bgS5ewp.apk
"
                className="flex items-center space-x-3 border border-zinc-700 text-zinc-100 hover:bg-zinc-900 px-8 py-4 rounded-lg font-medium transition-colors w-full sm:w-auto">
                <Download className="w-5 h-5" />
                <span>Get on Android</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-12 text-center">
              <div>
                <div className="text-2xl font-semibold text-zinc-100">2M+</div>
                <div className="text-sm text-zinc-500">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-zinc-100">10M+</div>
                <div className="text-sm text-zinc-500">Wishes Shared</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-zinc-100">4.8</div>
                <div className="text-sm text-zinc-500">App Rating</div>
              </div>
            </div>
          </section>

          {/* Phone Mockup */}
          <section className="py-20">
            <div className="relative max-w-xs mx-auto">
              <div className="bg-zinc-800 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-zinc-950 rounded-[2rem] overflow-hidden border border-zinc-800">
                  {/* Status bar */}
                  <div className="bg-zinc-900 h-8 rounded-t-[2rem] flex items-center justify-center">
                    <div className="w-20 h-1 bg-zinc-700 rounded-full"></div>
                  </div>

                  {/* App content */}
                  <div className="h-[500px] bg-zinc-950">
                    {/* App header */}
                    <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center">
                          <Heart className="w-4 h-4 text-zinc-900" />
                        </div>
                        <span className="font-semibold text-zinc-100">
                          Wishpr
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Bell className="w-5 h-5 text-zinc-400" />
                        <MessageCircle className="w-5 h-5 text-zinc-400" />
                      </div>
                    </div>

                    {/* Feed content */}
                    <div className="p-4 space-y-4">
                      {/* Post 1 */}
                      <div className="bg-zinc-900 rounded-xl border border-zinc-800">
                        <div className="p-4">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            <div>
                              <p className="text-sm font-medium text-zinc-100">
                                Sarah Chen
                              </p>
                              <p className="text-xs text-zinc-500">
                                2 hours ago
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-zinc-200 mb-3">
                            Just booked my trip to Tokyo! ✈️ Dreams do come true
                            when you work for them 🌸
                          </p>
                          <div className="flex items-center justify-between text-zinc-400">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Heart className="w-4 h-4" />
                                <span className="text-xs">24</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="w-4 h-4" />
                                <span className="text-xs">5</span>
                              </div>
                            </div>
                            <Share className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Post 2 */}
                      <div className="bg-zinc-900 rounded-xl border border-zinc-800">
                        <div className="p-4">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                            <div>
                              <p className="text-sm font-medium text-zinc-100">
                                Alex Kumar
                              </p>
                              <p className="text-xs text-zinc-500">1 day ago</p>
                            </div>
                          </div>
                          <p className="text-sm text-zinc-200 mb-3">
                            Finally launched my startup! 🚀 Thanks to everyone
                            who supported my wish
                          </p>
                          <div className="flex items-center justify-between text-zinc-400">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Heart className="w-4 h-4" />
                                <span className="text-xs">89</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="w-4 h-4" />
                                <span className="text-xs">12</span>
                              </div>
                            </div>
                            <Share className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4">
                      <div className="flex items-center justify-around">
                        <Home className="w-6 h-6 text-zinc-100" />
                        <Search className="w-6 h-6 text-zinc-400" />
                        <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center">
                          <Plus className="w-4 h-4 text-zinc-900" />
                        </div>
                        <Heart className="w-6 h-6 text-zinc-400" />
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 border-t border-zinc-800">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-zinc-100 mb-4">
                Built for connection
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Everything you need to share your dreams and connect with a
                supportive community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-6 h-6 text-zinc-300" />
                </div>
                <h3 className="font-medium text-zinc-100 mb-3">
                  Share Stories
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Post photos, videos, and updates about your wishes and
                  progress.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-6 h-6 text-zinc-300" />
                </div>
                <h3 className="font-medium text-zinc-100 mb-3">
                  Build Community
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Connect with friends, follow inspiring people, and build
                  meaningful relationships.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-6 h-6 text-zinc-300" />
                </div>
                <h3 className="font-medium text-zinc-100 mb-3">
                  Stay Connected
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Chat with friends, comment on posts, and get support from the
                  community.
                </p>
              </div>
            </div>
          </section>

          {/* Social Features */}
          <section className="py-20 border-t border-zinc-800">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-light text-zinc-100 mb-6">
                  More than just wishes
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-100 mb-2">
                        Like & Support
                      </h3>
                      <p className="text-zinc-400 text-sm">
                        Show support for friends' wishes and celebrate their
                        achievements together.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-100 mb-2">
                        Real-time Chat
                      </h3>
                      <p className="text-zinc-400 text-sm">
                        Direct messaging and group chats to stay connected with
                        your network.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Share className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-100 mb-2">
                        Share Progress
                      </h3>
                      <p className="text-zinc-400 text-sm">
                        Keep your community updated with milestones and
                        breakthrough moments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                    Join the Movement
                  </h3>
                  <p className="text-zinc-400 mb-6">
                    Be part of a global community working towards their dreams
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold text-zinc-100">
                        2M+
                      </div>
                      <div className="text-xs text-zinc-500">Members</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-zinc-100">
                        50M+
                      </div>
                      <div className="text-xs text-zinc-500">Interactions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 text-center border-t border-zinc-800">
            <h2 className="text-3xl font-light text-zinc-100 mb-4">
              Start sharing your story
            </h2>
            <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
              Download Wishpr and join millions of people sharing their dreams
              and supporting each other.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://expo.dev/artifacts/eas/w4GzQ5Z9y7AMQY1bgS5ewp.apk
"
                className="flex items-center justify-center space-x-3 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 px-8 py-4 rounded-lg font-medium transition-colors">
                <Download className="w-5 h-5" />
                <span>Download Wishpr</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center">
                <Heart className="w-3 h-3 text-zinc-900" />
              </div>
              <span className="font-medium text-zinc-100">Wishpr</span>
            </div>
            <div className="flex space-x-8 text-sm text-zinc-400">
              <a href="#" className="hover:text-zinc-100 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-zinc-100 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-zinc-100 transition-colors">
                Community
              </a>
              <a href="#" className="hover:text-zinc-100 transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
            © 2025 Wishpr. Connect your dreams.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
