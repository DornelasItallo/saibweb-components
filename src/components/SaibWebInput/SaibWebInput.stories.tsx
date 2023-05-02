import { FormProvider, useForm } from 'react-hook-form';
import SaibWebInput from '.';
import React from 'react';


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
};

const Template = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <SaibWebInput label="Label" name={'input'}  />
    </FormProvider>
  );
};

export const Default = Template.bind({});

Default.arguments = {
  label: 'Label do input',
  placeholder: 'Placeholder do input',

};
