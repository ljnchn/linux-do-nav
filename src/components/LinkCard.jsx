import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

// 模拟数据
const categories = [
  {
    name: "聊天机器人",
    items: [
      { title: "ChatGPT", description: "OpenAI的大语言模型", logo: "chatgpt-logo" },
      { title: "Claude", description: "Anthropic的AI助手", logo: "claude-logo" },
      { title: "ChatGPT", description: "OpenAI的大语言模型", logo: "chatgpt-logo" },
      { title: "Claude", description: "Anthropic的AI助手", logo: "claude-logo" },
      { title: "ChatGPT", description: "OpenAI的大语言模型", logo: "chatgpt-logo" },
      { title: "Claude", description: "Anthropic的AI助手", logo: "claude-logo" },
      { title: "ChatGPT", description: "OpenAI的大语言模型", logo: "chatgpt-logo" },
      { title: "Claude", description: "Anthropic的AI助手", logo: "claude-logo" },
      { title: "ChatGPT", description: "OpenAI的大语言模型", logo: "chatgpt-logo" },
      { title: "Claude", description: "Anthropic的AI助手", logo: "claude-logo" },
      // ... 更多项目
    ]
  },
  {
    name: "图像生成",
    items: [
      { title: "DALL-E", description: "AI图像生成工具", logo: "dalle-logo" },
      { title: "Midjourney", description: "高质量AI艺术创作", logo: "midjourney-logo" },
      { title: "DALL-E", description: "AI图像生成工具", logo: "dalle-logo" },
      { title: "Midjourney", description: "高质量AI艺术创作", logo: "midjourney-logo" },
      { title: "DALL-E", description: "AI图像生成工具", logo: "dalle-logo" },
      { title: "Midjourney", description: "高质量AI艺术创作", logo: "midjourney-logo" },
      { title: "DALL-E", description: "AI图像生成工具", logo: "dalle-logo" },
      { title: "Midjourney", description: "高质量AI艺术创作", logo: "midjourney-logo" },
      { title: "DALL-E", description: "AI图像生成工具", logo: "dalle-logo" },
      { title: "Midjourney", description: "高质量AI艺术创作", logo: "midjourney-logo" },
      // ... 更多项目
    ]
  },
  // ... 更多类别
];

const Card = ({ title, description, logo }) => (
  <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-x-4">
    <div className="flex-shrink-0">
      <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <path d={logo} />
      </svg>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

const LinkCard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">AI 导航站点</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </header>

        {categories.map((category) => (
          <div key={category.name} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {category.items.map((item) => (
                <Card key={item.title} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkCard;