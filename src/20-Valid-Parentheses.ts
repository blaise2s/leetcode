// "([])" => true
// "([)]" => false
// "(){[]}" => true

export const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const parens = new Set<string>(['(', ')', '[', ']', '{', '}', '<', '>']);
  const leftToRight = new Map<string, string>([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['<', '>'],
  ]);
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!parens.has(char)) continue;
    if (leftToRight.has(char)) {
      stack.push(char);
    } else {
      const left = stack.pop();
      if (!left || leftToRight.get(left) !== char) return false;
    }
  }
  return stack.length === 0;
};
