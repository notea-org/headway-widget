import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support

export default {
    input: 'src/index.ts', // Path relative to package.json
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        commonjs(),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble(), // Transpile to ES5
    ],
};


