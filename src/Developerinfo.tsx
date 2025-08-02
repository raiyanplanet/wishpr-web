import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Globe,
  MapPin,
  ExternalLink,
} from "lucide-react";

import developerData from "./info.json";

const DeveloperInfo = () => {
  const { developer } = developerData;

  const contactIcons = {
    email: Mail,
    website: Globe,
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      {/* Header */}
      <header className="px-6 py-8 border-b border-zinc-800/50 backdrop-blur-xl bg-zinc-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl scale-110"></div>
              <img
                src={developer.avatar.src}
                alt={developer.avatar.alt}
                className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl border-2 border-zinc-700/50 shadow-2xl object-cover"
              />
            </div>

            {/* Developer Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <h1 className="text-3xl lg:text-4xl font-light text-zinc-100">
                  {developer.name}
                </h1>
                <div
                  className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border ${
                    developer.status.color === "green"
                      ? "bg-green-500/10 border-green-500/30 text-green-400"
                      : "bg-blue-500/10 border-blue-500/30 text-blue-400"
                  }`}>
                  <div
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      developer.status.color === "green"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}></div>
                  <span className="text-sm font-medium">
                    {developer.status.text}
                  </span>
                </div>
              </div>

              <h2 className="text-xl lg:text-2xl font-medium text-zinc-300 mb-4">
                {developer.title}
              </h2>

              <p className="text-lg text-blue-400 font-medium mb-6 italic">
                "{developer.tagline}"
              </p>

              <div className="flex items-center justify-center lg:justify-start text-zinc-400 mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{developer.location}</span>
              </div>

              <p className="text-zinc-300 leading-relaxed mb-8 max-w-2xl">
                {developer.bio}
              </p>

              {/* Contact Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {Object.entries(developer.contact).map(([key, value]) => {
                  const IconComponent =
                    contactIcons[key as keyof typeof contactIcons];
                  return (
                    <a
                      key={key}
                      href={value}
                      className="flex items-center space-x-2 px-4 py-2 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700/50 rounded-lg transition-all duration-300 hover:scale-105 group">
                      <IconComponent className="w-4 h-4 text-zinc-400 group-hover:text-zinc-300" />
                      <span className="text-sm text-zinc-300 group-hover:text-zinc-100 capitalize">
                        {key}
                      </span>
                      <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-zinc-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DeveloperInfo;
