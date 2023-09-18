import {select} from 'd3-selection';

export const scaleAndCenterContent = () => {

  const originalWidth = 1920;
  const originalHeight = 1080;

  const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  const targetAspectRatio = 16 / 9;
  const currentAspectRatio = width / height;

  const equalAspectRatio = targetAspectRatio === currentAspectRatio;
  const currentAspectRatioIsWider = currentAspectRatio > targetAspectRatio;
  const currentAspectRatioIsTaller = currentAspectRatio < targetAspectRatio;

  if (equalAspectRatio) {
    select('#main-scalable-content')
      .style('transform', `scale(${width / originalWidth}) translateY(0) translateX(0)`)
  } else {
    if (currentAspectRatioIsWider) {
      select('#main-scalable-content')
        .style('transform', `scale(${height / originalHeight}) translateY(0) translateX(${(width - originalWidth * (height / originalHeight)) / 2 / (height / originalHeight)}px)`)
    } else if (currentAspectRatioIsTaller) {
      select('#main-scalable-content')
        .style('transform', `scale(${width / originalWidth}) translateX(0) translateY(${(height - originalHeight * (width / originalWidth)) / 2 / (width / originalWidth)}px)`)
    }
  }

}