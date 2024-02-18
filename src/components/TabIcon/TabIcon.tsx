import { SvgComponent } from '#/common/types/assets';

export type TabIconProps = {
  Icon: SvgComponent;
  color: string;
};

export function TabIcon({ Icon, color }: TabIconProps) {
  return <Icon stroke={color} />;
}
