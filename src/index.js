/* eslint no-unused-vars:0 */
export default function(name) {
  return function ({ Plugin, types: t }) {
    return new Plugin("rename-define", {
      visitor: {
        CallExpression(node, parent, scope){
          if (t.isIdentifier(node.callee, {name: 'define'}) && !scope.hasBinding('define')) {
            node.callee = t.identifier(name);
          }
        }
      }
    });
  }
};
