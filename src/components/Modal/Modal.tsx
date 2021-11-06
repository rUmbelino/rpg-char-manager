import { Modal as BootstrapModal } from 'react-bootstrap';

interface AddItemModalProps {
  show: boolean;
  title?: string;
  handleClose: () => void;
}

export const Modal: React.FC<AddItemModalProps> = ({
  show,
  title,
  children,
  handleClose,
}) => {
  return (
    <BootstrapModal show={show} onHide={handleClose} size="lg">
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body className="pt-0">{children}</BootstrapModal.Body>
    </BootstrapModal>
  );
};
