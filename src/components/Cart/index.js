import React, { useContext, useRef } from 'react'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'
import { useOuterClick } from '../../utils/hooks'
import CloseIcon from './CloseIcon'

import {
  Wrapper,
  Content,
  Header,
  Title,
  BuyButton,
  Subtotal,
  SubtotalWrapper,
  Notice
} from './styles'

const Cart = ({ visible, setVisibility }) => {
  const { 
    client, 
    checkout, 
    updateLineItem 
  } = useContext(StoreContext)
  const innerRef = useRef(null)

  useOuterClick(function () {
    if (visible) setVisibility()
  }, innerRef)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems 
    ? checkout.lineItems.map(item => (
        <LineItem 
          key={item.id.toString()} 
          item={item} 
          currencyCode={checkout.currencyCode}
          client={client}
          checkout={checkout}
          updateLineItem={updateLineItem}
        />
      ))
    : null

  const price = Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(checkout ? checkout.subtotalPrice : 0));

  return (
    <Wrapper visible={visible} ref={innerRef}>
      <Content>
        <Header>
          <Title>Giỏ hàng</Title>
          <CloseIcon color='white' onClick={setVisibility} />
        </Header>
        {checkout && lineItems.length > 0 ? (
          <>
            {lineItems}
            <SubtotalWrapper>
              <Subtotal>Tạm tính</Subtotal>
              <Subtotal>{price}</Subtotal>
            </SubtotalWrapper>
            <Notice>
              Giảm giá, chi phí vận chuyển<br/> sẽ được tính khi thanh toán.
            </Notice>
            <BuyButton onClick={handleCheckout}>Zur Kasse →</BuyButton>
          </>
        ) : (
          <Notice>
            đang trống rỗng nhẹ tênh.
          </Notice>
        )}
      </Content>
    </Wrapper>
  )
}

export default Cart
