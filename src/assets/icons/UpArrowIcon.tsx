import { Ref, forwardRef, memo } from 'react'

export type IconPropsType = {
  color?: string
  height?: string
  width?: string
}

export const SvgComponent = (props: IconPropsType, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      ref={ref}
      {...props}
      fill={'none'}
      height={'8'}
      viewBox={'0 0 13 8'}
      width={'13'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={'M2 6.25L6.8125 1.875L11.625 6.25'}
        stroke={'#2E2E36'}
        strokeLinecap={'square'}
        strokeWidth={'1.5'}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
