export const calcRelativePos = (innerRect: DOMRect, outerRect: DOMRect) => {
  return {
    width: innerRect.width,
    height: innerRect.height,
    left: innerRect.left - outerRect.left,
  }
}
