export interface IHelloWorld {
  id?: number
  name?: string
  code?: string
}

export interface IHelloWorldForm extends Omit<IHelloWorld, "id"> {}
