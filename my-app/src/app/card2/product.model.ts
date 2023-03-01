
export class ProductModel {
    title: string;
    imgDescription: string;
    description: string;
    img: string;
    buttonText: string;

    constructor(imgDescription: string, description: string, img: string, title: string, buttonText: string){
        this.description = description;
        this.img =img;
        this.imgDescription = imgDescription;
        this.title = title;
        this.buttonText = buttonText
    }
}