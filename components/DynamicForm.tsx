import React, { useState, useEffect } from 'react';
import { Flex, Button } from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';
import DynamicInput from './DynamicInput';

interface DynamicFormProps {
  data: any;
  onChange: (newData: any) => void;
  options?: {
    [key: string]: {
      type?: 'text' | 'number' | 'date';
      label?: string;
    };
  };
  resource?: any;
  model?: any;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ data, onChange, options = {}, resource, model }) => {
  const [isNewRecord, setIsNewRecord] = useState(false);

  useEffect(() => {
    setIsNewRecord(!data.id);
  }, [data]);

  const renderFormFields = (obj: any, parentKey = '') => {
    return Object.entries(obj).flatMap(([key, value]) => {
      const fullPath = parentKey ? `${parentKey}.${key}` : key;
      const fieldOptions = options[fullPath] || {};
      const fieldType = fieldOptions.type || (resource && resource.fields[fullPath]?.type) || 'text';
      const fieldLabel = fieldOptions.label || key;

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return [
          <Flex key={fullPath} direction="column" gap="0.5rem">
            <strong>{fieldLabel}</strong>
            {renderFormFields(value, fullPath)}
          </Flex>
        ];
      }

      return [
        <DynamicInput
          key={fullPath}
          data={data}
          path={fullPath}
          onChange={onChange}
          label={fieldLabel}
          type={fieldType}
        />
      ];
    });
  };

  const handleSave = async () => {
    if (!model) {
      console.error('Model is not defined');
      return;
    }

    try {
      if (isNewRecord) {
        await DataStore.save(new model(data));
      } else {
        const original = await DataStore.query(model, data.id);
        if (original) {
          await DataStore.save(model.copyOf(original, (updated) => {
            Object.assign(updated, data);
          }));
        }
      }
      console.log('Record saved successfully');
    } catch (error) {
      console.error('Error saving record:', error);
    }
  };

  const handleDelete = async () => {
    if (!model || isNewRecord) {
      console.error('Cannot delete: Model is not defined or record is new');
      return;
    }

    try {
      const toDelete = await DataStore.query(model, data.id);
      if (toDelete) {
        await DataStore.delete(toDelete);
        console.log('Record deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <Flex direction="column" gap="1rem">
      {renderFormFields(data)}
      <Flex gap="1rem">
        <Button onClick={handleSave}>{isNewRecord ? 'Create' : 'Update'}</Button>
        {!isNewRecord && <Button onClick={handleDelete}>Delete</Button>}
      </Flex>
    </Flex>
  );
};

export default DynamicForm;