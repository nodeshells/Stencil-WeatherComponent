import { a as patchEsm, b as bootstrapLazy } from './core-81e8d68c.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], options);
    });
};
export { defineCustomElements };
