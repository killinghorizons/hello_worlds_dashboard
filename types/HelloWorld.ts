export interface IHelloWorld {
  id: number;
  language: string;
  code: string;
  slug: string;
  category: string;
}

export interface IHelloWorldForm extends Omit<IHelloWorld, "id"> {}
