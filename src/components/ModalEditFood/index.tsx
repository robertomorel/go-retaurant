import { Component, createRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FormHandles } from "@unform/core";

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen(): void;
  handleUpdateFood(data: any): void;
  editingFood: any;
}

class ModalEditFood extends Component<ModalAddFoodProps> {
  private formRef = createRef<FormHandles>();
  constructor(props: ModalAddFoodProps) {
    super(props);

    this.formRef = createRef();
  }

  handleSubmit = async (data: any) => {
    const { setIsOpen, handleUpdateFood } = this.props;

    handleUpdateFood(data);
    setIsOpen();
  };

  render() {
    const { isOpen, setIsOpen, editingFood } = this.props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form
          ref={this.formRef}
          onSubmit={this.handleSubmit}
          initialData={editingFood}
        >
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
}

export default ModalEditFood;
