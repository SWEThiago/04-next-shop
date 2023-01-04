import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../assets/logo.svg'
import {
  CircleFill,
  Container,
  Header,
  Icon,
  ShoppingCartValue,
} from '../styles/pages/app'
import { Handbag } from 'phosphor-react'
import { ShopCart } from '../components/cartModal'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Icon>
              <a type="button">
                <Handbag size={32} color="#8d8d99" weight="bold" />

                <ShoppingCartValue>
                  <CircleFill />
                  {<p>1</p>}
                </ShoppingCartValue>
              </a>
            </Icon>
          </Dialog.Trigger>
          <ShopCart />
        </Dialog.Root>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
