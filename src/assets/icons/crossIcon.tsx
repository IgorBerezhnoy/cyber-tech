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
      fill={'#FF4B24'}
      height={'25'}
      viewBox={'0 0 24 25'}
      width={'24'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <rect height={'24'} rx={'12'} width={'24'} y={'0.5'} />
      <path
        d={
          'M13.5143 12.5229L16.9883 15.997L15.4627 17.5226L11.9887 14.0486L8.52599 17.5113L6.98005 15.9653L10.4427 12.5026L6.9774 9.03731L8.50304 7.51167L11.9684 10.977L15.4653 7.48004L17.0113 9.02598L13.5143 12.5229Z'
        }
        fill={'white'}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
