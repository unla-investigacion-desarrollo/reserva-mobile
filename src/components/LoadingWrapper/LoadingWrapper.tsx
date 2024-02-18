import { useEffect, useRef } from 'react';

import { ActivityIndicator, ActivityIndicatorProps, ColorValue, View } from 'react-native';

import styles from './styles';

interface Props extends ActivityIndicatorProps {
  loading: boolean;
  children: JSX.Element;
  backgroundColor?: ColorValue;
  withInitialLoading?: boolean;
}

export function LoadingWrapper({
  loading,
  children,
  backgroundColor,
  withInitialLoading = false,
  ...props
}: Props) {
  const initialLoading = useRef(withInitialLoading);
  useEffect(() => {
    if (initialLoading.current && loading) {
      initialLoading.current = false;
    }
  }, [loading]);
  return initialLoading.current || loading ? (
    <View style={styles.activityIndicatorContainer(backgroundColor)}>
      <ActivityIndicator {...props} />
    </View>
  ) : (
    children
  );
}
