import * as React from 'react';

import { IButtonProps } from './Button.types';

/**
 * This class is deprecated. Use the individual *Button components instead.
 * @deprecated Use the individual *Button components instead.
 * {@docCategory Button}
 */
export class Button extends React.Component<IButtonProps, {}> {
  public render(): JSX.Element {
    return <div>NOTHING</div>;
  }
}
