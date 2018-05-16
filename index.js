module.exports = function (style) {
    return style.replace(/{([^{}]*)}/gi, function(match, style){
        var rtl_style = style.replace(/left/gi, '##rtl-css-left-replacer##')
            .replace(/right/gi, 'left')
            .replace(/##rtl-css-left-replacer##/gi, 'right')
            .replace(/([;^][\s\n]*border-radius[^:]*:\s*)([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)([\s\n]*[$;])/gi,'$1 $3 $2 $5 $4 $7')
            .replace(/([;^][\s*\n](padding|margin)[^:]*:\s*)([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)([\s\n]*[$;])/gi,'$1 $3 $6 $5 $4 $7')
            .replace(/(translateX)\(-([^)]+)\)/gi,'$1(+$2)')
            .replace(/(translateX)\(([^-+)]+)\)/gi,'$1(-$2)')
        ;
        return '{' + rtl_style + '}';
    });
};