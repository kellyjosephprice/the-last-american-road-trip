export enum Pages {
  Cover = 'cover',
  ParkingLot = 'parking-lot',
}

export const order = Object.values(Pages)

export const metadata = {
  [Pages.Cover]: {
    title: 'The Last American Road Trip',
    src: '/parking-lot.png',
    alt: 'In the photo, a parking lot is gradually being reclaimed by the desert. The lot is filled with cracks and weeds, and the asphalt is starting to crumble. The surrounding area is dry and barren, with no signs of human activity.',
    description: null,
  },
  [Pages.ParkingLot]: {
    title: 'Parking Lot',
    src: '/parking-lot.png',
    alt: 'In the photo, a parking lot is gradually being reclaimed by the desert. The lot is filled with cracks and weeds, and the asphalt is starting to crumble. The surrounding area is dry and barren, with no signs of human activity.',
    description: 'In the photo, a parking lot is gradually being reclaimed by the desert. The lot is filled with cracks and weeds, and the asphalt is starting to crumble. The surrounding area is dry and barren, with no signs of human activity.',
  }
}

export default metadata
