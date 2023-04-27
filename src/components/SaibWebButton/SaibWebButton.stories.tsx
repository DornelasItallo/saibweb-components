import { LockKeyOpen } from '@phosphor-icons/react';

import { SaibWebButton } from './index';

export default {
  title: 'Components/Botões/Button',
  component: SaibWebButton,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'white', 'outline', 'structure'],
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    props: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {
  args: {
    children: <>Nome do botão</>,
  },
};

export const Icon = {
  args: {
    children: (
      <>
        <LockKeyOpen size={20} />
        Nome do botão
      </>
    ),
  },
};

export const CustomizeStyles = {
  args: {
    className: 'w-full',
    children: (
      <>
        <LockKeyOpen size={20} />
        Nome do botão
      </>
    ),
  },
};
