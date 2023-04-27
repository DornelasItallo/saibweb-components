import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaibWebButton } from '../SaibWebButton';
import { SaibWebAlert } from './index';

export default {
  title: 'Components/Alertas/Alert',
  component: SaibWebAlert,
  argTypes: {},
};

const Template = () => {
  const handleShowToast = () => {
    SaibWebAlert.success('Sucesso!');
  };

  return (
    <>
      <ToastContainer />
      <SaibWebButton onClick={handleShowToast}>Mostrar alerta</SaibWebButton>
    </>
  );
};

export const DefaultSuccess = Template.bind({});
