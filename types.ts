
export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  distance?: string;
}

export interface Activity {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface TariffPlan {
  id: string;
  name: string;
  price: string;
  image: string;
  details: string;
  capacity: string;
}

export interface Package {
  type: string;
  price2n3d: string;
  price3n4d: string;
  inclusions: string;
}
