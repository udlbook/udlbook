/** @type {import("prettier").Config} */
const prettierConfig = {
    trailingComma: "all",
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    bracketSpacing: true,
    printWidth: 100,
    endOfLine: "lf",
    plugins: [require.resolve("prettier-plugin-organize-imports")],
};

module.exports = prettierConfig;
