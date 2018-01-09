module.exports = function (style) {
    style.replace(/{([^{}]*)}/gi, function(match, style){
        var rtl_style = style.replace(/left/gi, 'lleefftt')
            .replace(/right/gi, 'left')
            .replace(/lleefftt/gi, 'right')
            .replace(/([^;]*radius[^:]*:\s*)([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)/gi,'$1 $3 $2 $5 $4')
            .replace(/([^;]*(padding|margin)[^:]*:\s*)([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)\s+([^;\s]+)/gi,'$1 $3 $6 $5 $4')
        ;
        return '{' + rtl_style + '}';
    });
    return style
};