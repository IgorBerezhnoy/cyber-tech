import { Ref, forwardRef, memo } from 'react'

export type IconPropsType = {
  color?: string
  height?: string
  width?: string
}

export const SvgComponent = (props: IconPropsType, ref: Ref<SVGSVGElement>) => {
  const { color = 'white', height = '12', width = '16' } = props

  return (
    <svg
      ref={ref}
      {...props}
      fill={color}
      height={height}
      viewBox={'0 -2 16 16'}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        clipRule={'evenodd'}
        d={
          'M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
        }
        fillRule={'evenodd'}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
