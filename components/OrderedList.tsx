import React, { useState } from 'react';
import { Card, Flex, View, Icon } from '@aws-amplify/ui-react';

interface OrderedListProps {
  value: Array<Record<string, any>>;
  onOrderChange?: (newOrder: Array<Record<string, any>>) => void;
}

const OrderedList: React.FC<OrderedListProps> = ({ value, onOrderChange }) => {
  const [dragging, setDragging] = useState(false);
  const dragItem = React.useRef<number | null>(null);
  const dragNode = React.useRef<HTMLElement | null>(null);
  const [items, setItems] = useState(value.map((item, index) => ({ ...item, order: index })));
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent | React.TouchEvent, index: number) => {
    dragItem.current = index;
    dragNode.current = e.target as HTMLElement;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDragging(false);
    setDraggedIndex(null);
    dragNode.current?.removeEventListener('dragend', handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const handleDragOver = (e: React.DragEvent | React.TouchEvent) => {
    e.preventDefault();
    const currentItem = dragItem.current;
    if (currentItem !== null) {
      const targetIndex = (e.target as HTMLElement).closest('[data-index]')?.getAttribute('data-index');
      if (targetIndex && currentItem !== parseInt(targetIndex)) {
        handleDrop(parseInt(targetIndex));
      }
    }
  };

  const handleDrop = (targetIndex: number) => {
    const currentItem = dragItem.current;
    if (currentItem !== null) {
      const newItems = [...items];
      const [reorderedItem] = newItems.splice(currentItem, 1);
      newItems.splice(targetIndex, 0, reorderedItem);
      const updatedItems = newItems.map((item, index) => ({ ...item, order: index }));
      setItems(updatedItems);
      if (onOrderChange) {
        onOrderChange(updatedItems);
      }
    }
    handleDragEnd();
  };

  return (
    <Flex direction="column">
      {items.map((item, index) => (
        <Card
          key={index}
          variation="outlined"
          padding="1rem"
          marginBottom="0.5rem"
          data-index={index}
          style={{
            opacity: dragging && draggedIndex === index ? 0.5 : 1,
            border: dragging && draggedIndex === index ? '2px dashed #007bff' : undefined
          }}
          aria-grabbed={dragging && draggedIndex === index}
          aria-dropeffect="move"
        >
          <Flex alignItems="center">
            <View
              as="div"
              padding="0.5rem"
              marginRight="0.5rem"
              backgroundColor="rgba(0,0,0,0.05)"
              borderRadius="4px"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onTouchStart={(e) => handleDragStart(e, index)}
              onTouchMove={handleDragOver}
              aria-label="Drag handle"
            >
              <Icon
                ariaLabel="Drag handle"
                viewBox={{ width: 24, height: 24 }}
                paths={[
                  { d: 'M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z' },
                ]}
              />
            </View>
            <Flex direction="column" style={{ userSelect: 'none' }}>
              {Object.entries(item).map(([key, value]) => (
                key !== 'order' && <p key={key}>{`${key}: ${value}`}</p>
              ))}
            </Flex>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default OrderedList;