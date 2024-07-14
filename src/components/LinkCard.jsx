
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const LinkCard = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8788/api/links')
      .then(response => response.json())
      .then(data => {console.log('Fetched links:', data);setLinks(data)});
  }, []);

  return (
    <div class="max-w-6xl mx-auto">
      <div class="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="搜索 AI 工具..."
          class="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {links.map(link => (
          <a href={link.href} class="tool-card bg-white p-3 rounded-lg shadow-sm hover:shadow-md dark:bg-gray-8">
            <h3 class="text-sm font-semibold mb-1 text-white">{link.name}</h3>
            <p class="text-xs text-gray-600">{link.description}</p>
          </a>
        ))}
      </div>
    </div>

  );
};

export default LinkCard;
