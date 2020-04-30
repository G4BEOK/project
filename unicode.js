// String.fromCharCode() alone cannot get the character at such a high code point
// The following, on the other hand, can return a 4-byte character as well as the 
//   usual 2-byte ones (i.e., it can return a single character which actually has 
//   a string length of 2 instead of 1!)
// alert(String.fromCodePoint(0x2F804)); // or 194564 in decimal

/*!
* From: (c) 2012 Steven Levithan <http://slevithan.com/>
* MIT License
*/

if (!String.fromCodePoint) {
    /*!
    * ES6 Unicode Shims 0.1
    * (c) 2012 Steven Levithan <http://slevithan.com/>
    * MIT License
    */
    String.fromCodePoint = function fromCodePoint () {
        var chars = [], point, offset, units, i;
        for (i = 0; i < arguments.length; ++i) {
            point = arguments[i];
            offset = point - 0x10000;
            units = point > 0xFFFF ? [0xD800 + (offset >> 10), 0xDC00 + (offset & 0x3FF)] : [point];
            chars.push(String.fromCharCode.apply(null, units));
        }
        return chars.join("");
    }
}
