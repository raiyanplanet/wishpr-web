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

import websiteData from "./Websitedata.json";
import DeveloperInfo from "./Developerinfo";

const icons = {
  Camera,
  Users,
  MessageCircle,
  Heart,
  Share,
};

type IconName = keyof typeof icons;

const getIcon = (iconName: string) => {
  if (iconName in icons) {
    return icons[iconName as IconName];
  }
  return Heart;
};

const App = () => {
  const data = websiteData;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="px-6 py-6 border-b border-zinc-800">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <img
                src={data.website.logo.src}
                alt={data.website.logo.alt}
                className="w-6 h-6"
              />
            </div>
            <span className="text-xl font-semibold text-zinc-100">
              {data.website.name}
            </span>
          </div>
          <a
            href={data.hero.downloadLinks[0].url}
            className="hidden md:flex items-center space-x-2 text-zinc-100 px-5 py-2 rounded-xl hover:text-zinc-100 bg-blue-600  transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm">Download</span>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="py-20 text-center">
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-zinc-400">
                {data.hero.badge.text}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light text-zinc-100 mb-6 leading-tight">
              {data.hero.title.split(" with ")[0]}
              <br />
              <span className="font-medium text-zinc-300">
                with {data.hero.title.split(" with ")[1]}
              </span>
            </h1>

            <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {data.hero.subtitle}
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {data.hero.downloadLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-lg font-medium transition-colors w-full sm:w-auto ${
                    link.primary
                      ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                      : "border border-zinc-700 text-zinc-100 hover:bg-zinc-900"
                  }`}>
                  <Download className="w-5 h-5" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-12 text-center">
              {data.hero.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-semibold text-zinc-100">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Phone Mockup */}
          <section className="py-16 sm:py-24">
            <div className="relative max-w-sm mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[3rem] blur-3xl scale-110"></div>

              <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[2.5rem] p-3 shadow-2xl border border-zinc-700/50">
                <div className="bg-zinc-950 rounded-[2rem] overflow-hidden border border-zinc-800/50 shadow-inner">
                  {/* Status bar */}
                  <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 h-10 rounded-t-[2rem] flex items-center justify-center relative">
                    <div className="w-24 h-1.5 bg-zinc-700 rounded-full"></div>
                    <div className="absolute right-4 flex items-center space-x-1">
                      <div className="w-6 h-3 border border-zinc-600 rounded-sm">
                        <div className="w-full h-full bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="h-[600px] bg-gradient-to-b from-zinc-950 to-zinc-900 relative">
                    {/* App header */}
                    <div className="flex items-center justify-between p-4 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                          <Heart className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-zinc-100">
                          {data.website.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Bell className="w-5 h-5 text-zinc-400" />
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <MessageCircle className="w-5 h-5 text-zinc-400" />
                      </div>
                    </div>

                    {/* Feed content */}
                    <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]">
                      {data.mockup.posts.map((post) => (
                        <div
                          key={post.id}
                          className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl rounded-2xl border border-zinc-700/30 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <div
                                className={`w-10 h-10 bg-gradient-to-r ${post.avatarGradient} rounded-full shadow-lg`}></div>
                              <div>
                                <p className="text-sm font-semibold text-zinc-100">
                                  {post.author}
                                </p>
                                <p className="text-xs text-zinc-500">
                                  {post.timeAgo}
                                </p>
                              </div>
                            </div>
                            <p className="text-sm text-zinc-200 mb-4 leading-relaxed">
                              {post.content}
                            </p>
                            <div className="flex items-center justify-between text-zinc-400">
                              <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2 hover:text-red-400 transition-colors cursor-pointer">
                                  <Heart className="w-4 h-4" />
                                  <span className="text-xs font-medium">
                                    {post.likes}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors cursor-pointer">
                                  <MessageCircle className="w-4 h-4" />
                                  <span className="text-xs font-medium">
                                    {post.comments}
                                  </span>
                                </div>
                              </div>
                              <Share className="w-4 h-4 hover:text-purple-400 transition-colors cursor-pointer" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/90 backdrop-blur-xl border-t border-zinc-800/50 p-4">
                      <div className="flex items-center justify-around">
                        <Home className="w-6 h-6 text-blue-400" />
                        <Search className="w-6 h-6 text-zinc-400 hover:text-purple-400 transition-colors" />
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                          <Plus className="w-5 h-5 text-white" />
                        </div>
                        <Heart className="w-6 h-6 text-zinc-400 hover:text-red-400 transition-colors" />
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"></div>
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
                {data.features.title}
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                {data.features.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {data.features.items.map((feature, index) => {
                const IconComponent = getIcon(feature.icon);
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-6 h-6 text-zinc-300" />
                    </div>
                    <h3 className="font-medium text-zinc-100 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Social Features */}
          <section className="py-20 border-t border-zinc-800">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-light text-zinc-100 mb-6">
                  {data.socialFeatures.title}
                </h2>
                <div className="space-y-6">
                  {data.socialFeatures.items.map((item, index) => {
                    const IconComponent = getIcon(item.icon);
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-zinc-300" />
                        </div>
                        <div>
                          <h3 className="font-medium text-zinc-100 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-zinc-400 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                    {data.socialFeatures.communityStats.title}
                  </h3>
                  <p className="text-zinc-400 mb-6">
                    {data.socialFeatures.communityStats.subtitle}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {data.socialFeatures.communityStats.stats.map(
                      (stat, index) => (
                        <div key={index}>
                          <div className="text-lg font-semibold text-zinc-100">
                            {stat.value}
                          </div>
                          <div className="text-xs text-zinc-500">
                            {stat.label}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 text-center border-t border-zinc-800">
            <h2 className="text-3xl font-light text-zinc-100 mb-4">
              {data.cta.title}
            </h2>
            <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
              {data.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={data.cta.downloadLink.url}
                className="flex items-center justify-center space-x-3 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 px-8 py-4 rounded-lg font-medium transition-colors">
                <Download className="w-5 h-5" />
                <span>{data.cta.downloadLink.label}</span>
              </a>
            </div>
          </section>

          <section className=" border-t border-zinc-800">
            <h2 className="text-3xl  text-center py-5">Developer info.</h2>
            <DeveloperInfo />
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
              <span className="font-medium text-zinc-100">
                {data.website.name}
              </span>
            </div>
            <div className="flex space-x-8 text-sm text-zinc-400">
              {data.footer.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-zinc-100 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
            {data.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
