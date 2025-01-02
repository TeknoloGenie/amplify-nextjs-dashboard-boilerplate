# Amplify UI Components

A collection of reusable React components built with AWS Amplify UI.

## Installation

```bash
npm install amplify-ui-components
# or
yarn add amplify-ui-components
```

## Usage

```jsx
import { Autocomplete, Chip, Modal } from 'amplify-ui-components';

// Using the Autocomplete component
const MyComponent = () => {
  const options = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
  ];

  return (
    <Autocomplete
      options={options}
      displayProperty="name"
      valueProperty="id"
      value={selectedOption}
      onChange={setSelectedOption}
      label="Select an option"
    />
  );
};

// Using the Chip component
const MyChipComponent = () => {
  const [value, setValue] = useState('');
  
  return (
    <Chip
      value={value}
      onChange={setValue}
      label="Add tags"
    />
  );
};

// Using the Modal component
const MyModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Modal Title"
    >
      Modal content goes here
    </Modal>
  );
};
```

## Requirements

This package requires the following peer dependencies:

- React >= 18.0.0
- React DOM >= 18.0.0
- @aws-amplify/ui-react >= 6.0.0

## License

MIT