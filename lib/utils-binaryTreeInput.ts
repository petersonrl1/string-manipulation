export type TreeNode = {
  name: string;
  children?: TreeNode[];
};


export function createBinaryTree(input: string): TreeNode[] {
  const result: TreeNode[] = [];
  let current = "";
  const stack = [result];
  let currentArray = result;

  for (const char of input) {
    if (char === "(") {
      const newArray: TreeNode[] = [];
      currentArray.push({ name: current.trim(), children: newArray });
      stack.push(currentArray);
      currentArray = newArray;
      current = "";
    } else if (char === ")") {
      if (current.trim()) {
        currentArray.push({ name: current.trim() });
        current = "";
      }
      currentArray = stack.pop()!;
    } else if (char === ",") {
      if (current.trim()) {
        currentArray.push({ name: current.trim() });
        current = "";
      }
    } else {
      current += char;
    }
  }

  if (current.trim()) {
    currentArray.push({ name: current.trim() });
  }

  return result;
}

export function formatOutput(parsed: TreeNode[], level = 0): string {
  return parsed
    .map((item) => {
      const children = item.children ? formatOutput(item.children, level + 1) : "";
      return `${"  ".repeat(level)}- ${item.name}${children ? "\n" + children : ""}`;
    })
    .join("\n");
}