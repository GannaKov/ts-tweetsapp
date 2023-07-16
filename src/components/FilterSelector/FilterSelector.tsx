import React, { useState } from "react";
import { CustomSelect } from "./FilterSelector.styled";
interface IOptionType {
  value: string;
  label: string;
}
const options: IOptionType[] = [
  { value: "show-all", label: "Show All" },
  { value: "follow", label: "Follow" },
  { value: "followings", label: "Followings" },
];

interface IProps {
  onTypeChange: (type: string) => void;
}
export default function FilterSelector({ onTypeChange }: IProps) {
  const [selectedOption, setSelectedOption] = useState<IOptionType>(options[0]);

  const handleChange = (newSelectedOption: any) => {
    if (newSelectedOption.value !== selectedOption.value) {
      setSelectedOption(newSelectedOption);

      onTypeChange(newSelectedOption.value);
    }
  };

  return (
    <CustomSelect
      className="react-select-container"
      classNamePrefix="react-select"
      value={options.find((option) => option.value === selectedOption.value)}
      onChange={handleChange}
      options={options}
    />
  );
}
