const { NODE_ENV, BABEL_ENV } = process.env
const cjs = NODE_ENV === 'test' || BABEL_ENV === 'commonjs'
const loose = true

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose,
        modules: false,
        bugfixes: true,
        // useBuiltIns: false,
        // exclude: ['@babel/plugin-transform-regenerator'],
      },
    ],
    '@babel/react',
    '@babel/preset-typescript',
  ],
  plugins: [
    // 'babel-plugin-transform-async-to-promises',
    cjs && ['@babel/transform-modules-commonjs', { loose }],
    // [
    //   '@babel/transform-runtime',
    //   {
    //     useESModules: !cjs,
    //     version: require('./package.json').devDependencies[
    //       '@babel/runtime'
    //     ].replace(/^[^0-9]*/, ''),
    //   },
    // ],
  ].filter(Boolean),
  overrides: [
    {
      exclude: [
        './packages/solid-router/**',
        './packages/svelte-router/**',
        './packages/vue-router/**',
      ],
      presets: ['@babel/react'],
    },
    {
      include: [
        './packages/solid-router/**',
        './packages/solid-store/**',
        './packages/solid-loaders/**',
        './packages/solid-actions/**',
      ],
      presets: ['babel-preset-solid'],
    },
  ],
}
