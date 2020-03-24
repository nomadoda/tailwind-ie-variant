const postcss = require('postcss');

module.exports = {
    theme: {
        extend: {},
    },
    plugins: [
        // addVariant example
        ({ addUtilities, addComponents, addVariant, e, theme }) => {
            addVariant('ie', ({ container, separator }) => {
                // http://api.postcss.org/
                // Create at-rule css hack for IE10+
                const mediaRule = postcss.atRule({
                    name: 'media',
                    params: 'screen and (-ms-high-contrast: active), (-ms-high-contrast: none)',
                });
                mediaRule.append(container.nodes);
                container.append(mediaRule);
                mediaRule.walkRules((rule) => {
                    rule.selector = `.${e(`ie${separator}${rule.selector.slice(1)}`)}`;
                });
            });
        },
        // addUtilities example
        ({ addUtilities, addComponents, addVariant, e, theme }) => {},
    ],
    variants: {
        display: ['ie', 'responsive'],
        fontSize: false,
        fontStyle: false,
        fontWeight: false,
        // fontSize: ['ie', 'responsive'],
        // fontStyle: ['ie', 'responsive'],
        // fontWeight: ['ie', 'responsive'],
        textColor: false,
        // textColor: ['ie'],
        accessibility: false,
        alignContent: false,
        alignItems: false,
        alignSelf: false,
        appearance: false,
        backgroundAttachment: false,
        backgroundColor: false,
        backgroundPosition: false,
        backgroundRepeat: false,
        backgroundSize: false,
        borderCollapse: false,
        // borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: false,
        // borderStyle: ['responsive', 'hover', 'focus'],
        borderWidth: false,
        // borderWidth: ['responsive', 'hover', 'focus'],
        boxShadow: false,
        boxSizing: false,
        cursor: false,
        fill: false,
        flex: false,
        flexDirection: false,
        flexGrow: false,
        flexShrink: false,
        flexWrap: false,
        float: false,
        clear: false,
        fontFamily: false,
        fontSmoothing: false,
        height: false,
        inset: false,
        justifyContent: false,
        letterSpacing: false,
        lineHeight: false,
        listStylePosition: false,
        listStyleType: false,
        margin: false,
        maxHeight: false,
        maxWidth: false,
        minHeight: false,
        minWidth: false,
        objectFit: false,
        objectPosition: false,
        opacity: false,
        order: false,
        outline: false,
        overflow: false,
        padding: false,
        placeholderColor: false,
        pointerEvents: false,
        position: false,
        resize: false,
        stroke: false,
        strokeWidth: false,
        tableLayout: false,
        textAlign: false,
        textDecoration: false,
        textTransform: false,
        userSelect: false,
        verticalAlign: false,
        visibility: false,
        whitespace: false,
        width: false,
        wordBreak: false,
        zIndex: false,
        gap: false,
        gridAutoFlow: false,
        gridTemplateColumns: false,
        gridColumn: false,
        gridColumnStart: false,
        gridColumnEnd: false,
        gridTemplateRows: false,
        gridRow: false,
        gridRowStart: false,
        gridRowEnd: false,
        transform: false,
        transformOrigin: false,
        scale: false,
        rotate: false,
        translate: false,
        skew: false,
        transitionProperty: false,
        transitionTimingFunction: false,
        transitionDuration: false,
        transitionDelay: false,
    },
};
