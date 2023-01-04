import * as Dialog from '@radix-ui/react-dialog'
import { CartFooter, CartItem, CloseButton, Content, Overlay } from './styles'
import { X } from 'phosphor-react'

export function ShopCart() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title> Sacola de compras</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <CartItem>
          <img src="" alt="" />
          <div>
            <p>camiseta beyond the limts</p>
            <strong>R$ 79,90</strong>
            <button> Remover</button>
          </div>
        </CartItem>

        <CartFooter>
          <div>
            <p> Quantidade</p>
            <p> 3 itens</p>
          </div>

          <div>
            <strong> Valor total </strong>
            <strong> R$ 270,00</strong>
          </div>

          <button> Finalizar Compra</button>
        </CartFooter>
      </Content>
    </Dialog.Portal>
  )
}
