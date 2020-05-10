module.exports = {
    extends: [
        "standard",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            createClass: "createReactClass",
            pragma: "React",
            version: "detect",
            flowVersion: "0.53"
        },
        propWrapperFunctions: [
            "forbidExtraProps",
            {
                property: "freeze",
                object: "Object"
            },
            {
                property: "myFavoriteWrapper"
            }
        ],
        linkComponents: [
            "Hyperlink",
            {
                name: "Link",
                linkAttribute: "to"
            }
        ]
    },
    env: {
        browser: true,
        jasmine: true
    }
};
