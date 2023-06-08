import { MantineThemeOverride } from '@mantine/core';

export const theme = {
  colorScheme: 'light',
  activeStyles: { transform: 'scale(0.98)' },
  transitionTimingFunction: 'ease',
  components: {
    Button: {
      styles: () => ({
        root: {
          transitionDuration: '0.1s'
        },
      }),
    },
  }
} as MantineThemeOverride;