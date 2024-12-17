import { Button } from "./ui/button";

type Props = {
  onGenerate: () => void; 
  onClear: () => void; 
}

export default function ButtonBox({ onGenerate, onClear }: Props) {
  return (
    <div className="buttonBox flex gap-4 items-center flex-col sm:flex-row py-4 justify-center">
      <Button variant="default" onClick={onGenerate}>
        Generate Tree
      </Button>
      <Button variant="destructive" onClick={onClear}>
        Start Over
      </Button>
    </div>
  );
}
