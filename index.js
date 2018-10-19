
/**
 * 
 *  Developer : Karthik Ramanathan, Freelancer/React JS
 * 
 * 
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.indianCurrencyInWords = factory(root);
    }
}(this, function () {
    function rgb2hsl(r, g, b) {
        r /= 255;
        g /= 255; 
        b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
    
        if (max === min) { 
            h = s = 0; 
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
            switch (max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
                default: break;
            }
            
            h /= 6;
        }
    
        return [(h*360+0.5)|0, ((s*100+0.5)|0), ((l*100+0.5)|0)];
    }
    
    function hsl2rgb(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        var r, g, b, q, p;
    
        function hue2rgb(p, q, t){
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }
    
        if (s === 0) {
          r = g = b = l; // achromatic
        } else {
          q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          p = 2 * l - q;
          r = hue2rgb(p, q, h + 1 / 3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1 / 3);
        }
      
        return [Math.round(r * 255),Math.round(g * 255),Math.round(b * 255)]
      }
    
      function hex2rgb(hex){
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });
      
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? 
            [parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)]
         : [0, 0, 0];
      }
    
      function rgb2hex(r, g, b){
        function toHex(x){
            var hex = Math.round(x).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }
        return '#' + toHex(r)+toHex(g)+toHex(b);
      }
    
      function hex2hsl(hex){
        var rgb = hex2rgb(hex);
        return rgb2hsl(rgb[0], rgb[1], rgb[2]);
      }
    
      function hsl2hex(h, s, l){
          var rgb = hsl2rgb(h, s, l);
          return rgb2hex(rgb[0], rgb[1], rgb[2]);
      }
    
      return {
        hex2rgb: hex2rgb,
        rgb2hex: rgb2hex,
        rgb2hsl: rgb2hsl,
        hsl2rgb: hsl2rgb,
        hex2hsl: hex2hsl,
        hsl2hex: hsl2hex
      };

}));