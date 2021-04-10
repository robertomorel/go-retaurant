import React, { Component, useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { FormHandles } from "@unform/core";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen(): void;
  handleAddFood(data: any): void;
}

interface State {
  formRef: any;
}

class ModalAddFood extends Component<ModalAddFoodProps, State> {
  private formRef = React.createRef<FormHandles>();
  constructor(props: ModalAddFoodProps) {
    super(props);
  }

  handleSubmit = async (data: any) => {
    const { setIsOpen, handleAddFood } = this.props;

    handleAddFood(data);
    setIsOpen();
  };

  render() {
    const { isOpen, setIsOpen } = this.props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={this.formRef} onSubmit={this.handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
}

export default ModalAddFood;
