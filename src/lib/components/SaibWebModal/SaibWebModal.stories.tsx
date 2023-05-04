
import React from 'react';
import SaibWebModal from '.';
import SaibWebButton from '../SaibWebButton';


export default {
  title: 'Components/Alertas/Modal',
  component: SaibWebModal,
  argTypes: {},
};

const Template = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleShowToast = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <SaibWebModal
        isOpen={isModalOpen}
        onConfirm={() => {
          console.log('Confirm');
          setIsModalOpen(false);
        }}
        onClose={() => setIsModalOpen(false)}
        message="Modal Exemplo"
      />
      <SaibWebButton onClick={handleShowToast}>Mostrar modal</SaibWebButton>
    </>
  );
};

export const Default = Template.bind({});
