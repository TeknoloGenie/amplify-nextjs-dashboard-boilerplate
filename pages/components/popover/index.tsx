import Popover from "@/components/popover";
import { Button, Text, View } from "@aws-amplify/ui-react";
import { useRef, useState } from "react";

export default function PopoverExample() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const buttonRef = useRef(null);

  const handleTogglePopover = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  const handleClosePopover = () => {
    setIsPopoverVisible(false);
  };

  return (
    <View padding="1rem">
      <h1>Popover Example</h1>
      <Button ref={buttonRef} onClick={handleTogglePopover}>
        Toggle Popover
      </Button>
      <Popover
        visible={isPopoverVisible}
        onClose={handleClosePopover}
        anchorEl={buttonRef.current}
      >
        <Text>This is the content of the popover.</Text>
        <Button onClick={handleClosePopover}>Close</Button>
      </Popover>
    </View>
  );
}