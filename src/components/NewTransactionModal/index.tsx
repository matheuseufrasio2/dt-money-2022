import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Nova Transacao</Dialog.Title>

        <form action="">
          <input type="text" placeholder="Descricao" required />
          <input type="number" placeholder="Preco" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant='income' value="income">
              <ArrowCircleUp size={24} />
              Entradas
            </TransactionTypeButton>
            <TransactionTypeButton variant='outcome' value="outcome">
              <ArrowCircleDown size={24} />
              Saidas
            </TransactionTypeButton>
          </TransactionType>

          <button type='submit'>
            Cadastrar
          </button>
        </form>

      </Content>
    </Dialog.Portal>
  );
}