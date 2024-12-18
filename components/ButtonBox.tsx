import { Button } from "./ui/button";

type Props = {
  onGenerate: () => void;
  onClear: () => void;
};

export default function ButtonBox({ onGenerate, onClear }: Props) {
  return (
    <div className="buttonBox flex flex-col items-center justify-center gap-4 py-4 sm:flex-row">
      <Button variant="default" onClick={onGenerate}>
        Generate Tree
      </Button>
      <Button variant="destructive" onClick={onClear}>
        Start Over
      </Button>
    </div>
  );
}
