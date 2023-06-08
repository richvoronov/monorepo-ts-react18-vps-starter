import { Col, Grid, Header as MHeader, HeaderProps as MHeaderProps } from '@mantine/core';
import React from 'react';

interface HeaderProps extends Omit<MHeaderProps, 'children'> {
  slot1?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
}
 
export const Header = ({ slot1, slot2, slot3, ...rest }: HeaderProps) => {
  return (
    <MHeader {...rest}>
      <Grid align="center" sx={{ height: '100%' }}>
        {slot1 && (
          <Col span={3}>
            {slot1}
          </Col>
        )}
        {slot2 && (
          <Col span={6}>
            {slot2}
          </Col>
        )}
        {slot3 && (
          <Col span={3}>
            <Grid justify="flex-end" align="center">
              {slot3}
            </Grid>
          </Col>
        )}
      </Grid>
    </MHeader>
  );
};
