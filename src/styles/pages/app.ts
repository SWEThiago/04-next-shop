import { styled } from '..'
import { Circle } from 'phosphor-react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Icon = styled('div', {
  backgroundColor: '#202024',
  borderRadius: 6,
  padding: 12,
  opacity: 0.8,
  cursor: 'pointer',

  '&:hover': {
    opacity: 1,
  },
})

export const ShoppingCartValue = styled('div', {
  position: 'absolute',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '-55px',
  marginLeft: '30px',

  p: {
    color: '#ffffff',
    position: 'absolute',
    fontSize: '16px',
  },
})

export const CircleFill = styled(Circle, {
  fontSize: '28px',
  color: '$green300',
  background: '$green300',
  borderRadius: '999px',
})
