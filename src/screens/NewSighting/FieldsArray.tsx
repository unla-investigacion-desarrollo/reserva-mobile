import { View } from 'react-native';

import { FormApi } from '@tanstack/react-form';

import { BUTTON_INTENTS } from '#/common/constants/button';
import { isEmpty } from '#/common/utils/array';
import { Button, FormInput, Text } from '#/components';

import {
  FIELD_DEFAULT_VALUES,
  FORM_DEFAULT_VALUES,
  FORM_FIELDS,
  FORM_FIELDS_NAMES,
  FORM_FIELDS_PROPS,
  FORM_FIELD_SUB_FIELDS,
  FORM_VALIDATIONS
} from './constants';
import { styles } from './styles';

export type FieldsArrayProps = {
  Form: FormApi<typeof FORM_DEFAULT_VALUES, any>;
};

export default function FieldsArray({ Form }: FieldsArrayProps) {
  return (
    <Form.Field name={FORM_FIELDS.fields} mode="array" validators={FORM_VALIDATIONS.fields}>
      {field => (
        <View>
          <Text tx="NewSighting.fieldsLabel" style={styles.fieldLabel} />
          <Text tx="NewSighting.fieldsLabelSubtitle" style={styles.fieldsArrayLabelSubtite} />
          <View style={styles.fieldsArray}>
            {field.state.value.map((_, index) => (
              <View key={`fields-${index}`} style={styles.fieldContainer}>
                {FORM_FIELD_SUB_FIELDS.map(subField => (
                  <FormInput
                    key={subField}
                    Form={Form}
                    name={`${field.name}[${index}].${subField}`}
                    label={FORM_FIELDS_NAMES[subField]}
                    labelStyle={styles.fieldLabel}
                    validations={FORM_VALIDATIONS[subField]}
                    {...FORM_FIELDS_PROPS[subField]}
                  />
                ))}
                {field.state.value.length > 1 && (
                  <Button
                    title="NewSighting.removeField"
                    textStyle={styles.removeFieldButtonText}
                    onPress={() => field.removeValue(index)}
                  />
                )}
              </View>
            ))}
            <Button
              title="NewSighting.addField"
              intent={BUTTON_INTENTS.SECONDARY}
              style={styles.addFieldButton}
              onPress={() => {
                field.pushValue(FIELD_DEFAULT_VALUES);
              }}
            />
          </View>
          {!isEmpty(field.state.meta.errors) && <Text>Error {field.state.meta.errors}</Text>}
        </View>
      )}
    </Form.Field>
  );
}
