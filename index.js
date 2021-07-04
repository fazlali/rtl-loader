module.exports = function (style) {
    return style.replace(/{([^{}]*)}/gi, (_, style) => {
        const rtl_style = style.replace(/left/gi, '##RTL_CSS_LEFT_REPLACER##')
            .replace(/right/gi, 'left')
            .replace(/##RTL_CSS_LEFT_REPLACER##/gi, 'right')
            .replace(/((;|^)[\s;\n]*border-radius[^:]*:\s*)([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)([\s\n]*($|;))/gi,'$1 $4 $3 $6 $5 $8')
            .replace(/((;|^)[\s;\n]*(padding|margin)[^:]*:\s*)([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)([\s\n]*($|;))/gi,'$1 $4 $7 $6 $5 $8')
            .replace(/translateX\(([^)]+)\)/gi, (match) => {
                let value = match[1].trim()
                if (value.charAt(0) === '-') {
                    value = value.substr(1)
                } else {
                    value = value.replace(/^\+?/, '-')
                }
                return `translateX(${value})`
            })
            .replace(/translate\(([^),]+),([^),]+)\)/gi, (match) => {
                let value = match[1].trim()
                if (value.charAt(0) === '-') {
                    value = value.substr(1)
                } else {
                    value = value.replace(/^\+?/, '-')
                }
                return `translate(${value}, ${match[2]})`
            })
        ;
        return `{${rtl_style}}`;
    });
};
