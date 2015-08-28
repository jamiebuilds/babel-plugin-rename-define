/* eslint no-unused-vars:0 */
export default function(name) {
  return function ({ Plugin, types: t }) {
    return new Plugin("rename-define", {
      visitor: {
        Identifier(node) {
          if (node.name === "define") {
            node.name = name;
          }
        }
      }
    });
  }
};
