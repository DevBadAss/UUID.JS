/**
 * Generates unique ID
 * @param {Number} length length of unique id
 * @returns Unique ID
 * @author Olawoore Emmanuel Collins
 */
export default function UUID(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890123456789#$%";
    var ID = "";
    for (let i = 0; i <= length; i++) {
        var rand = Math.floor(Math.random() * chars.length);
        ID += chars.substring(rand, rand + 1);
    }

    return ID;
}