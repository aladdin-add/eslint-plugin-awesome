/**
 * @fileoverview No spaces in empty object or function.
 * @author 唯然<weiran.zsd@outlook.com>
 */

module.exports = {
  meta: {
    type: "layout",
    fixable: "code",
    docs: {
      description: "No spaces in empty object or function.",
      recommended: false,
    },
  },

  create(context) {
    // 定义一个规则函数，用于检查空对象或空函数中的空格
    function checkEmptySpace(node) {
      const sourceCode = context.getSourceCode();
      const sourceText = sourceCode.getText(node);

      // 检查源代码中是否包含空格
      if (/^\{\s+\}$/.test(sourceText)) {
        context.report({
          node: node,
          message: "空对象/函数中禁止使用空格。",
          fix: (fixer) => fixer.replaceText(node, "{}"),
        });
      }
    }

    return {
      ObjectExpression: checkEmptySpace,
      BlockStatement: checkEmptySpace,
    };
  },
};
