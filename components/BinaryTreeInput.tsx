"use client";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { createBinaryTree, TreeNode } from "@/lib/utils";
import BinaryTreeOutput from "./BinaryTreeOutput";
import ButtonBox from "./ButtonBox";

export default function BinaryTreeInput() {
  const [content, setContent] = useState("");
  const [treeData, setTreeData] = useState<TreeNode[] | null>(null);

  const handleClick = () => {
    const treeObj = createBinaryTree(content);
    setTreeData(treeObj);
  };

  const handleClear = () => {
    setContent("");
    setTreeData(null);
  };

  return (
    <>
      <Textarea
        className="min-w-96"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="Enter your binary tree string here..."
      />
      <ButtonBox onGenerate={handleClick} onClear={handleClear} />

      {treeData && <BinaryTreeOutput tree={treeData} />}
    </>
  );
}
