module.exports = function (style) {
    return style.replace(/{([^{}]*)}/gi, (_, style) => {
        const rtl_style = style.replace(/(^|[^a-zA-Z])left($|[^a-zA-Z])/gi, '$1##RTL_CSS_LEFT_REPLACER##$2')
            .replace(/(^|[^a-zA-Z])right($|[^a-zA-Z])/gi, '$1left$2')
            .replace(/##RTL_CSS_LEFT_REPLACER##/gi, 'right')
            .replace(/((;|^)[\s;\n]*border-radius[^:]*:\s*)([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)([\s\n]*($|;))/gi,'$1 $4 $3 $6 $5 $8')
            .replace(/((;|^)[\s;\n]*(padding|margin)[^:]*:\s*)([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)([\s\n]*($|;))/gi,'$1 $4 $7 $6 $5 $8')
            .replace(/translateX\(([^)]+)\)/gi, (match, x) => {
                x = x.trim()
                if (x.charAt(0) === '-') {
                    x = x.substr(1)
                } else {
                    x = x.replace(/^\+?/, '-')
                }
                return `translateX(${x})`
            })
            .replace(/translate\(([^),]+),([^),]+)\)/gi, (match, x, y) => {
                console.log(match, x, y)
                x = x.trim()
                if (x.charAt(0) === '-') {
                    x = x.substr(1)
                } else {
                    x = x.replace(/^\+?/, '-')
                }
                console.log(`translate(${x}, ${y})`)
                return `translate(${x}, ${y})`
            })
        ;
        return `{${rtl_style}}`;
    });
};
