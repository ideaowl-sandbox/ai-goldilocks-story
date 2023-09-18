

export const afterLoad = (origin, destination, direction, trigger) => {
  // var origin = this;

  console.log(origin.anchor, destination.anchor, direction, trigger)

  // //using index
  // if (origin.index == 2) {
  //   alert("Section 3 ended loading");
  // }

  // //using anchorLink
  // if (origin.anchor == 'secondSlide') {
  //   alert("Section 2 ended loading");
  // }
}

export const afterSlideLoad = (section, origin, destination, direction, trigger) => {
  // var loadedSlide = this;

  // //first slide of the second section
  // if (section.anchor == 'secondPage' && destination.index == 1) {
  //   alert("First slide loaded");
  // }

  // //second slide of the second section (supposing #secondSlide is the
  // //anchor for the second slide)
  // if (section.index == 1 && destination.anchor == 'secondSlide') {
  //   alert("Second slide loaded");
  // }
}
