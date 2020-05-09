module.exports = {
    processors: ["stylelint-processor-styled-components"],
    extends: [
        "stylelint-config-standard",
        "stylelint-config-styled-components"
    ],
    plugins: ["stylelint-order"],
    rules: {
        indentation: 4,
        "block-closing-brace-newline-before": "always",
        "block-opening-brace-newline-after": "always",
        "color-hex-length": "long",
        "color-named": "never",
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-single-line-max-declarations": 2,
        "declaration-colon-newline-after": null,
        "length-zero-no-unit": null,
        "order/order": ["declarations", "custom-properties"],
        "order/properties-alphabetical-order": true,
        "no-empty-source": null,
        "no-descending-specificity": null,
        "rule-empty-line-before": "always"
    }
};
