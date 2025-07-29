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
  Star,
  Sparkles,
  ArrowRight,
  Check,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

import React, { useState, useEffect } from "react";

// Mock data - in real app this would come from Websitedata.json
const websiteData = {
  website: {
    name: "SocialFlow",
    logo: {
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E",
      alt: "SocialFlow Logo",
    },
  },
  hero: {
    badge: { text: "New features available" },
    title: "Connect authentically with friends worldwide",
    subtitle:
      "Experience genuine connections through our beautifully designed social platform that puts privacy and meaningful interactions first.",
    downloadLinks: [
      { label: "Download for iOS", url: "#", primary: true },
      { label: "Download for Android", url: "#", primary: false },
    ],
    stats: [
      { value: "10M+", label: "Active Users" },
      { value: "50M+", label: "Messages Sent" },
      { value: "4.9", label: "App Rating" },
    ],
  },
  mockup: {
    posts: [
      {
        id: 1,
        author: "Alex Chen",
        timeAgo: "2m ago",
        content:
          "Just discovered this amazing coffee shop in Tokyo! The latte art is incredible ☕️✨",
        likes: 24,
        comments: 8,
        avatarGradient: "from-purple-400 to-pink-400",
      },
      {
        id: 2,
        author: "Sarah Wilson",
        timeAgo: "5m ago",
        content:
          "Beautiful sunset from my evening walk. Nature never fails to amaze me 🌅",
        likes: 42,
        comments: 12,
        avatarGradient: "from-blue-400 to-teal-400",
      },
    ],
  },
  features: {
    title: "Everything you need to stay connected",
    subtitle: "Powerful features designed to enhance your social experience",
    items: [
      {
        title: "Smart Camera",
        description:
          "Capture life's moments with our AI-enhanced camera that automatically adjusts for perfect shots.",
        icon: "Camera",
      },
      {
        title: "Private Groups",
        description:
          "Create intimate spaces for close friends with end-to-end encryption and privacy controls.",
        icon: "Users",
      },
      {
        title: "Rich Messaging",
        description:
          "Express yourself with rich text, reactions, voice messages, and seamless media sharing.",
        icon: "MessageCircle",
      },
    ],
  },
  socialFeatures: {
    title: "Built for genuine connections",
    items: [
      {
        title: "Authentic Interactions",
        description:
          "No fake likes or bots. Every interaction is from real people who share your interests.",
        icon: "Heart",
      },
      {
        title: "Smart Discovery",
        description:
          "Find people and communities that match your passions through our intelligent recommendation system.",
        icon: "Users",
      },
      {
        title: "Seamless Sharing",
        description:
          "Share your world effortlessly with customizable privacy settings and beautiful media layouts.",
        icon: "Share",
      },
    ],
    communityStats: {
      title: "Join our community",
      subtitle: "Connect with millions of users worldwide",
      stats: [
        { value: "150+", label: "Countries" },
        { value: "10M+", label: "Users" },
        { value: "500K+", label: "Groups" },
        { value: "4.9★", label: "Rating" },
      ],
    },
  },
  cta: {
    title: "Ready to connect?",
    subtitle:
      "Join millions of users who have already discovered a better way to stay connected with friends and family.",
    downloadLink: { label: "Get Started Free", url: "#" },
  },
  footer: {
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Support", href: "#" },
      { label: "About", href: "#" },
    ],
    copyright: "© 2025 SocialFlow. All rights reserved.",
  },
};

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

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-30"></div>
      <div className="absolute top-60 right-40 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse opacity-50"></div>
    </div>
  );
};

const GradientOrb = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-20 animate-pulse ${className}`}
    style={{ animationDelay: `${delay}s` }}></div>
);

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const data = websiteData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <GradientOrb
        className="top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600"
        delay={0}
      />
      <GradientOrb
        className="top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600"
        delay={2}
      />
      <GradientOrb
        className="bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-teal-600 to-blue-600"
        delay={4}
      />

      <FloatingElements />

      {/* Header */}
      <header className="relative z-50 px-4 sm:px-6 py-6 border-b border-zinc-800/50 backdrop-blur-xl bg-zinc-950/80">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-2 h-2 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {data.website.name}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-sm text-zinc-400">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>4.9 rating</span>
            </div>
            <a
              href={data.hero.downloadLinks[0].url}
              className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Download</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-zinc-800 transition-colors">
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-white transition-all"></div>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section
            className={`py-16 sm:py-24 text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl border border-zinc-700/50 rounded-full px-6 py-3 mb-8 shadow-xl">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-sm font-medium text-zinc-300">
                {data.hero.badge.text}
              </span>
              <div className="flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-yellow-400" />
                <span className="text-xs text-yellow-400 font-medium">NEW</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8 leading-tight">
              {data.hero.title.split(" with ")[0]}
              <br />
              <span className="text-3xl sm:text-4xl md:text-6xl font-light text-zinc-300">
                with {data.hero.title.split(" with ")[1]}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              {data.hero.subtitle}
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {data.hero.downloadLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={`group flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-xl ${
                    link.primary
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      : "border-2 border-zinc-700/50 text-zinc-100 hover:bg-zinc-800/50 backdrop-blur-xl"
                  }`}>
                  <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {data.hero.stats.map((stat, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 backdrop-blur-xl border border-zinc-700/30 rounded-2xl p-6 transition-all duration-300 hover:border-zinc-600/50 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-zinc-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
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
          <section className="py-16 sm:py-24 border-t border-zinc-800/30">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                {data.features.title}
              </h2>
              <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                {data.features.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.features.items.map((feature, index) => {
                const IconComponent = getIcon(feature.icon);
                return (
                  <div
                    key={index}
                    className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 backdrop-blur-xl border border-zinc-700/30 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:border-zinc-600/50 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-zinc-100 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Social Features */}
          <section className="py-16 sm:py-24 border-t border-zinc-800/30">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                  {data.socialFeatures.title}
                </h2>
                <div className="space-y-8">
                  {data.socialFeatures.items.map((item, index) => {
                    const IconComponent = getIcon(item.icon);
                    return (
                      <div
                        key={index}
                        className="group flex items-start space-x-4 hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-zinc-100 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-zinc-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl scale-110"></div>
                  <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl border border-zinc-700/30 rounded-3xl p-8 shadow-2xl">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-100 mb-3">
                        {data.socialFeatures.communityStats.title}
                      </h3>
                      <p className="text-zinc-400 mb-8 leading-relaxed">
                        {data.socialFeatures.communityStats.subtitle}
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                        {data.socialFeatures.communityStats.stats.map(
                          (stat, index) => (
                            <div key={index} className="text-center">
                              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                                {stat.value}
                              </div>
                              <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                                {stat.label}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-24 text-center border-t border-zinc-800/30">
            <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 backdrop-blur-xl border border-zinc-700/30 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                {data.cta.title}
              </h2>
              <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                {data.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={data.cta.downloadLink.url}
                  className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <Download className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span>{data.cta.downloadLink.label}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 py-12 border-t border-zinc-800/30 bg-zinc-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 lg:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {data.website.name}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
              {data.footer.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-zinc-100 transition-colors duration-300 hover:underline underline-offset-4">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800/30 text-center text-sm text-zinc-500">
            {data.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
