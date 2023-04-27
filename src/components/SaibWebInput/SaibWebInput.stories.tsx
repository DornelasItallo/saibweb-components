import { Meta, StoryFn } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { InputProps, SaibWebInput } from './index';

export default {
  title: 'Components/Form/Input',
  component: SaibWebInput,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    rules: {
      table: {
        disable: true,
      },
    },
    control: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  args: {
    type: 'text',
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <SaibWebInput label="Label" {...args} />
    </FormProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Label do input',
  placeholder: 'Placeholder do input',
};
