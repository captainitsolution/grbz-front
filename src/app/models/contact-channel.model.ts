import { IconName } from '../shared/icon/icon-name';

export interface ContactChannel {
  readonly icon: IconName;
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly opensInNewTab: boolean;
}
