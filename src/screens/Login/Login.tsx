import { View, ViewStyle } from 'react-native';

import Checkbox from 'expo-checkbox';
import { Image, ImageStyle } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import appIcon from '#/assets/appIcons/icon.png';
import { BUTTON_INTENTS } from '#/common/constants/button';
import { accent, neutral } from '#/common/constants/colors';
import { Button, ErrorText, FormInput, Text } from '#/components';

import {
  FORM_FIELDS,
  FORM_FIELDS_NAMES,
  FORM_FIELDS_PROPS,
  FORM_TEXT_FIELDS,
  FORM_VALIDATIONS
} from './constants';
import { useLoginForm } from './hooks';
import { styles } from './styles';

export function Login() {
  const { top, bottom } = useSafeAreaInsets();

  const { LoginForm, responseError } = useLoginForm();

  return (
    <View style={styles.login(bottom)}>
      <StatusBar animated style="light" />
      <View style={styles.header(top) as ViewStyle}>
        <View style={styles.appIconShadow}>
          <Image source={appIcon} style={styles.appIcon as ImageStyle} />
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <Text tx="Login.login" style={styles.title} />
          <View style={styles.fields}>
            {FORM_TEXT_FIELDS.map(field => (
              <FormInput
                key={field}
                Form={LoginForm}
                name={FORM_FIELDS[field]}
                validations={FORM_VALIDATIONS[field]}
                label={FORM_FIELDS_NAMES[field]}
                labelStyle={styles.label}
                iconColor={neutral.dark}
                iconStyle={styles.icon}
                errorStyle={styles.error}
                {...FORM_FIELDS_PROPS[field]}
              />
            ))}
          </View>
          <View style={styles.checkboxRow}>
            <LoginForm.Field name={FORM_FIELDS.rememberMe}>
              {field => (
                <>
                  <Checkbox
                    value={field.state.value}
                    color={accent.default}
                    onValueChange={value => field.handleChange(value)}
                  />
                  <Text onPress={() => field.handleChange(!field.state.value)}>
                    {FORM_FIELDS_NAMES.rememberMe}
                  </Text>
                </>
              )}
            </LoginForm.Field>
          </View>
        </View>
        <View>
          {responseError && <ErrorText containerStyle={styles.responseError} errorMessage={responseError} />}
          <LoginForm.Subscribe selector={state => [state.isSubmitting]}>
            {([isSubmitting]) => (
              <Button
                loading={isSubmitting}
                intent={BUTTON_INTENTS.PRIMARY}
                title="Login.login"
                onPress={LoginForm.handleSubmit}
                style={styles.loginButton}
              />
            )}
          </LoginForm.Subscribe>
        </View>
      </View>
    </View>
  );
}
