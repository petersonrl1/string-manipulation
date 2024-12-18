import { formatOutput, TreeNode } from "@/lib/utils";

type Props = {
  tree: TreeNode[];
};

export default function BinaryTreeOutput({ tree }: Props) {
  const formattedTree = formatOutput(tree);
  // whitespace-pre handles the carriage returns in the layout: https://developer.mozilla.org/en-US/docs/Web/CSS/white-space#pre
  return (
    <div className="whitespace-pre rounded-md border bg-gray-100 p-4 font-mono">
      {formattedTree}
    </div>
  );
}
