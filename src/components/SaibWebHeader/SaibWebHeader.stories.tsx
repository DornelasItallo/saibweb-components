import { SaibWebHeader } from './index';

export default {
  title: 'Components/Cabeçalho/Header',
  component: SaibWebHeader,
  argTypes: {
    title: { control: 'text' },
    navigation: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {
  args: {
    title: 'Exemplo cabeçalho',
  },
};

export const Navegation = {
  args: {
    title: 'Exemplo cabeçalho com navegação',
    navigation: {
      isNavigation: true,
      redirect: () => {
        console.log('redirect');
      },
    },
  },
};
