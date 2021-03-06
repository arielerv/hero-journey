module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { targets: { node: 'current' } }],
  ],
  plugins: [
    ['react-css-modules', { exclude: 'node_modules' }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
