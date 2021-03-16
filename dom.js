window.dom = {
  create(string) {
    let template = document.createElement(string);
    template.innerHTML = string;
    return template.content.firstChild;
  },

  /* 
        <div>
            <div class='child'></div>
        </div>

        after(child,parent)
         <div>
            <div class = 'child'></div>
            <div class = 'parent'></div>
        </div>
    */
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node2, node) {
    node.parentNode.insertBefore(node2, node);
  },

  append(parent, node) {
    parent.appendChild(node);
  },

  wrap(node, parent) {
    dom.before(node, parent);
    dom.append(parent, node);
  },
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  empty(node) {
    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return array;
  },
  attr(node, name, value) {
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 3) {
      return node.getAttribute(name);
    }
  },
  text(node, string) {
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerText = string;
      } else {
        node.textContent = string;
      }
    } else if (arguments.length === 1) {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      //dom.style(div,'color','red')
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        //dom.style(div,'color)
        return node.style[name];
      } else if (name instanceof Object) {
        //dom.style(div,{color:"red"})
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  find(string) {
    return (node = document.querySelectorAll(string));
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  className: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      node.classList.contains(className);
    },
    on(node, eventName, fn) {
      node.addEventListener(eventName, fn);
    },
    off(node, eventName, fn) {
      node.removeEventListener(eventName, fn);
    },
    find(selector, scope) {
      return (scope || selector).querySelectorAll(selector);
    },
    parent(node) {
      return node.parentNode;
    },
    children(node) {
      return node.children;
    },
    siblings(node) {
      return Array.from(node.parentNode.children).filter(
        (n) => n !== node
      );
    },
    next(node) {
      let x = node.nextSibling;
      while (x && x.nodeType === 3) {
        x = nextSibling;
      }
      return x;
    },
    previous(node) {
      let x = node.previousSibling;
      while (x && x.nodeType === 3) {
        x = x.previousSibling;
      }
      return x;
    },
    each(nodeList, fn) {
      for (let i = 0; i < nodeList.length; i++) {
        fn.call(nill, nodeList[i]);
      }
    },
    index(node) {
      const list = dom.children(node.parentNode);
      let i;
      for (i = 0; i < list.length; i++) {
        if (list[i] === node) {
          break;
        }
      }
      return i;
    },
  },
};