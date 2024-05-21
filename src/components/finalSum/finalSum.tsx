import {
  FONT_WEIGHT_MEDIUM_PLUS,
  FONT_WEIGHT_NORMAL,
  FONTSIZE_XL,
  LINE_HEIGHT_L,
} from '@/variables'
import styled from 'styled-components'

type Props = {
  finalSum?: string
}

export const FinalSum = ({ finalSum = '0' }: Props) => {
  return (
    <div>
      <Tittle>Итоговая сумма</Tittle>
      <Sum>{finalSum}</Sum>
    </div>
  )
}
const Tittle = styled.span`
    font-weight: ${FONT_WEIGHT_MEDIUM_PLUS};
    font-size: ${FONTSIZE_XL}
    line-height: ${LINE_HEIGHT_L};

`
const Sum = styled(Tittle)`
  margin-left: 8px;
  font-weight: ${FONT_WEIGHT_NORMAL};
`
