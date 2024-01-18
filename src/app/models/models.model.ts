export interface Model {
  code: string;
  description: string;
  colors: Array<ModelColor>;
}

export interface ModelColor {
  code: string;
  description: string;
  price: number;
}

export interface CarModelDetails {
  selectedCarModelColor: boolean,
  selectedCarModel: string,
  selectedCarColor: string,
  selectedModelColorsDescription: string,
  selectedModelColorPrice: number,
  modelDescription: string
}


export interface ModelOptionsConfig {
  id: number;
  description: string;
  range: number;
  speed: number;
  price: number;
}

export interface SelectedOptionConfig {
  configs: Array<ModelOptionsConfig>,
  towHitch: boolean;
  yoke: boolean;
}