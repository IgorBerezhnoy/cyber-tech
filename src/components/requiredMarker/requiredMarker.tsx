import { COLOR_RED, FONT_WEIGHT_MEDIUM_PLUS, FONTSIZE_M } from '@/variables'
import styled from 'styled-components'

export const RequiredMarker = () => {
  return <Span>*</Span>
}
const Span = styled.span`
  font-weight: ${FONT_WEIGHT_MEDIUM_PLUS};
  color: ${COLOR_RED};
  font-size: ${FONTSIZE_M};
`
