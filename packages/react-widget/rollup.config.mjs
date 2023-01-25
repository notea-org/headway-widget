import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    exports: "named"
  },
  plugins: [
    typescript(),
    babel({
      exclude: ["node_modules/**"],
      babelHelpers: "bundled"
    }),
    commonjs()
  ]
};
