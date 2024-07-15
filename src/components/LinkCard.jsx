import React from 'react';
import { Search } from 'lucide-react';

const AITool = ({ name, description, link }) => (
  <a href={link} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </a>
);

const AINavigationSite = () => {
  const aiTools = [
    { name: "ChatGPT", description: "强大的对话AI", link: "#" },
    { name: "DALL-E", description: "AI图像生成", link: "#" },
    { name: "Midjourney", description: "AI艺术创作", link: "#" },
    { name: "Copilot", description: "AI编程助手", link: "#" },
    { name: "Synthesia", description: "AI视频生成", link: "#" },
    { name: "Jasper", description: "AI文案写作", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">AI 导航站</h1>
        
        <div className="mb-8 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索 AI 工具..."
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiTools.map((tool, index) => (
            <AITool key={index} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AINavigationSite;