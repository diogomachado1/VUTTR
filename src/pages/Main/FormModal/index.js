import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { Form } from '@rocketseat/unform';
import { Container } from './styles';
import { ButtonTerciary } from '~/components/Button';
import InputCustom from '~/components/Input';
import api from '~/services/api';
import TextareaCustom from '~/components/Textarea';

const schema = Yup.object().shape({
  title: Yup.string().required('O nome é obrigatório'),
  link: Yup.string(),
  description: Yup.string(),
  tags: Yup.string(),
});

export default function FormModal({ showForm, dismissForm, editTool }) {
  function modalDismiss(e) {
    if (e.target.getAttribute('id') === 'modal') {
      dismissForm();
    }
  }

  async function handleSubmit(value) {
    try {
      value.tags = value.tags.split(' ');
      if (editTool) {
        await api.put(`/tools/${editTool.id}`, value);
      } else {
        await api.post(`/tools`, value);
      }
      dismissForm();
    } catch (error) {
      console.tron.log(error);
    }
  }

  return (
    <Container
      showForm={showForm}
      id="modal"
      onClick={e => {
        modalDismiss(e);
      }}
    >
      <div>
        <Form initialData={editTool} schema={schema} onSubmit={handleSubmit}>
          <InputCustom name="title" placeholder="Nome" />
          <InputCustom name="link" placeholder="Link" />
          <TextareaCustom name="description" placeholder="Descrição" />
          <InputCustom name="tags" placeholder="Tags" />
          <div>
            <ButtonTerciary
              type="button"
              color="danger"
              onClick={() => {
                dismissForm();
              }}
            >
              Cancelar
            </ButtonTerciary>
            <ButtonTerciary color="success" type="submit">
              Salvar
            </ButtonTerciary>
          </div>
        </Form>
      </div>
    </Container>
  );
}

FormModal.propTypes = {
  showForm: PropTypes.bool.isRequired,
  dismissForm: PropTypes.func.isRequired,
  editTool: PropTypes.object,
};

FormModal.defaultProps = {
  editTool: undefined,
};
