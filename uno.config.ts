// uno.config.ts
import { defineConfig, presetAttributify, presetUno} from 'unocss'

export default defineConfig({
    presets: [
        presetAttributify({ /* preset options */}),
        presetUno(),
        // ...custom presets
      ],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})