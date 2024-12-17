import { formatOutput, TreeNode } from "@/lib/utils";

type Props = {
    tree: TreeNode[];
  };

export default function BinaryTreeOutput({ tree }: Props) {
    const formattedTree = formatOutput(tree);
  
    return (
      <div className="p-4 border rounded-md bg-gray-100 whitespace-pre font-mono">
        {formattedTree}
      </div>
    );
  }