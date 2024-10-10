import html from '@rollup/plugin-html';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    html({
      fileName: 'index.html', // Generates or processes the HTML file
    }),
  ],
};

