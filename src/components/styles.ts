import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  max-width: 36.25rem;
  max-height: 56.25rem;
  inset: 0;
  background-color: #202024;
  margin-left: auto;
`

export const Content = styled(Dialog.Content)`
  width: 36.25rem;
  height: 56.25rem;

  padding: 4.5rem 4rem;

  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  position: fixed;
  right: 0;
  top: 0;
  width: 36.25rem;
`

export const CloseButton = styled(Dialog.Close)`
  position: fixed;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  line-height: 0;
  color: #8d8d99;
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 1.5rem;
  height: 6.75rem;
  padding: 0.63rem;

  img {
    background: linear-gradient(180deg, #1ea483, #7465d4 100%);
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 6px;
    object-fit: cover;
    overflow: hidden;
  }

  div {
    display: flex;
    align-items: left;
    flex-direction: column;
    gap: 0.75rem;

    p {
      color: #c4c4cc;
    }

    button {
      background-color: transparent;
      border: 0;
      color: #00875f;
      width: 1.5rem;
      opacity: 1;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`

export const CartFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 26.8rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background-color: #00875f;
    color: white;
    border: 1.5rem solid #00875f;
    opacity: 1;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 2.25rem;
    font-weight: bold;
    font-size: 1rem;

    &:hover {
      opacity: 0.8;
    }
  }
`
// export const TransactionType = styled(RadioGroup.Root)`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 1rem;
//   margin-top: 0.5rem;
// `

// interface TransactionTypeButtonProps {
//   variant: 'income' | 'outcome'
// }

// export const TransactionTypeButton = styled(
//   RadioGroup.Item,
// )<TransactionTypeButtonProps>`
//   background: ${(props) => props.theme['gray-700']};
//   padding: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   border: 0;
//   border-radius: 6px;
//   color: ${(props) => props.theme['gray-300']};
//   cursor: pointer;

//   svg {
//     color: ${(props) =>
//       props.variant === 'income'
//         ? props.theme['green-300']
//         : props.theme['red-300']};
//   }

//   &[data-state='unchecked']:hover {
//     transition: background-color 0.2s;
//     background: ${(props) => props.theme['gray-600']};
//   }

//   &[data-state='checked'] {
//     background: ${(props) =>
//       props.variant === 'income'
//         ? props.theme['green-500']
//         : props.theme['red-500']};
//     color: ${(props) => props.theme.white};

//     svg {
//       color: ${(props) => props.theme.white};
//     }
//   }
// `
