import { SetStateAction } from 'react';

import { View } from 'react-native';

import { FormApi } from '@tanstack/react-form';

import { SightingType } from '#/common/types/stightings';
import { isEmpty } from '#/common/utils/array';
import { ErrorText, OptionsBar, RadioGroup, Text } from '#/components';

import { FORM_DEFAULT_VALUES, FORM_FIELDS, FORM_VALIDATIONS } from './constants';
import { styles } from './styles';

export type TypePickerProps = {
  Form: FormApi<typeof FORM_DEFAULT_VALUES, any>;
  categories: string[];
  setSelectedCategory: (value: SetStateAction<string>) => void;
  selectedCategory: string;
  types: SightingType[];
};

export default function TypePicker({
  Form,
  categories,
  selectedCategory,
  setSelectedCategory,
  types
}: TypePickerProps) {
  return (
    <Form.Field name={FORM_FIELDS.type} validators={FORM_VALIDATIONS.type}>
      {field => {
        const errors = field.state.meta.errors;
        return (
          <View>
            <Text tx="NewSighting.typeLabel" style={styles.fieldLabel} />
            <Text tx="NewSighting.typeLabelSubtitle" style={styles.fieldsArrayLabelSubtite} />
            <OptionsBar
              labelStyle={styles.fieldLabel}
              options={categories}
              setOption={category => {
                field.setValue('');
                setSelectedCategory(category);
              }}
              selectedOption={selectedCategory}
            />
            <View style={styles.typesSection}>
              <RadioGroup
                options={types.map(type => type.name)}
                setOption={value => field.handleChange(value)}
                selectedOption={field.state.value}
              />
            </View>
            {!isEmpty(errors) && (
              <View>
                {errors.map((error, index) =>
                  error ? (
                    <ErrorText
                      containerStyle={styles.errorLabel}
                      key={`${field.name}-${index}-${error}`}
                      errorMessage={error}
                    />
                  ) : null
                )}
              </View>
            )}
          </View>
        );
      }}
    </Form.Field>
  );
}
