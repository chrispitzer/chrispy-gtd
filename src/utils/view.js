import htm from './htm.module.js';

// Simple hyperscript-style DOM creator (no virtual DOM)
function h(tag, props = {}, ...children) {
    const el = document.createElement(tag);

    for (const [key, value] of Object.entries(props || {})) {
        if (key === 'class') {
            el.className = value;
        } else if (key.startsWith('on') && typeof value === 'function') {
            el.addEventListener(key.slice(2).toLowerCase(), value);
        } else {
            el.setAttribute(key, value);
        }
    }

    // Flatten deeply and filter out null/undefined
    const flatChildren = children.flat(Infinity).filter(Boolean);

    flatChildren.forEach(child => {
        if (typeof child === 'string' || typeof child === 'number') {
            el.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            el.appendChild(child);
        }
    });

    return el;
}


// Bind htm to our hyperscript function
export const html = htm.bind(h);
