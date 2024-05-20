import { OrderForm } from '@/components/orderForm/orderForm'
import styled from 'styled-components'

function App() {
  return (
    <PageWrapper>
      <OrderForm />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 98px 0;
`

export default App
