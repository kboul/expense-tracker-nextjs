import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./select";

export default function AppSelect({
  btnStyle,
  defaultValue,
  onValueChange,
  placeholder,
  items
}: {
  btnStyle?: any;
  defaultValue: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  items: { value: string; label: string }[];
}) {
  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger className="w-auto" style={btnStyle}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
