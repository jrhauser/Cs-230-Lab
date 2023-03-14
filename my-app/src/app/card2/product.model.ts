export class ProductModel {
  title: string;
  imgDescription: string;
  description: string;
  img: string;
  buttonText: string;
  price: string;

  constructor(
    imgDescription: string,
    description: string,
    img: string,
    title: string,
    buttonText: string,
    price: string
  ) {
    this.description = description;
    this.img = img;
    this.imgDescription = imgDescription;
    this.title = title;
    this.buttonText = buttonText;
    this.price = price;
  }
}
