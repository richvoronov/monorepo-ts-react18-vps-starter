import { ButtonProps, Button as MButton } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

export const Button = ({ children, ...rest }: PropsWithChildren<ButtonProps>) => {
  return (
    <MButton {...rest}>{children}</MButton>
  );
};
