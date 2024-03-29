import { r as registerInstance, h } from './core-81e8d68c.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return (h("div", null, "Hello, World! I'm ", this.getText()));
    }
    static get style() { return ""; }
};

export { MyComponent as my_component };
