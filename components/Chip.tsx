import React, { useState } from 'react';
import { Input, Autocomplete, ComboBoxOption } from '@aws-amplify/ui-react';

interface ChipProps {
  value: string;
  onChange: (value: string) => void;
  options?: Array<ComboBoxOption>;
  label: string;
}

const Chip: React.FC<ChipProps> = ({ value, onChange, options, label }) => {
  const [chips, setChips] = useState<string[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value.trim() !== '') {
      setChips([...chips, value.trim()]);
      onChange('');
    }
  };

  const handleOnSelect = (option: ComboBoxOption) => {
    setChips([...chips, option.label as string]);
    onChange('');
  };

  const removeChip = (chipToRemove: string) => {
    setChips(chips.filter(chip => chip !== chipToRemove));
  };

  const renderChips = () => (
    <div className="flex flex-wrap gap-2 mb-2">
      {chips.map((chip, index) => (
        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          {chip}
          <button onClick={() => removeChip(chip)} className="ml-2 text-blue-800 hover:text-blue-900">&times;</button>
        </span>
      ))}
    </div>
  );

  if (options) {
    return (
      <div>
        {renderChips()}
        <Autocomplete
          label={label}
          options={options}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onSelect={handleOnSelect}
        />
      </div>
    );
  }

  return (
    <div>
      {renderChips()}
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Chip;