import { AppShell, Avatar, Burger, Footer, MediaQuery, NavLink, Navbar, Text, useMantineTheme } from '@mantine/core';
import { Header } from '@myproject/ui';
import { IconChessQueen, IconDatabaseImport, IconLayersSubtract, IconLogin } from '@tabler/icons-react';
import { PropsWithChildren, useState } from 'react';

export function LayoutMantine({ children }: PropsWithChildren) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <NavLink label="Auth" icon={<IconLogin size="1rem" stroke={1.5} />}>
            <NavLink label="login" component="a" href="/auth/login" />
            <NavLink label="signup" component="a" href="/auth/signup" />
          </NavLink>

          <NavLink label="Marketing" icon={<IconChessQueen size="1rem" stroke={1.5} />}>
            <NavLink label="home" component="a" href="/" />
            <NavLink label="about" component="a" href="/about" />
          </NavLink>

          <NavLink label="Product" component="a" href="/products" icon={<IconLayersSubtract size="1rem" stroke={1.5} />} />

          <NavLink label="Data fetching" component="a" href="/star-wars" icon={<IconDatabaseImport size="1rem" stroke={1.5} />} />
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Footer domain
        </Footer>
      }
      header={
        <Header 
          height={{ base: 50, md: 70 }} 
          p="md"
          slot1={(
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
          )}
          slot2={(
            <Text>Header domain</Text>
          )}
          slot3={(
            <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
          )}
        />
      }
    >
      {children}
    </AppShell>
  );
}