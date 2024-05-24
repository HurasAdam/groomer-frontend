
import images from "./imaegs";


const POPULAR_SERVICES = [
  {
    name: "Kąpiel (Pies)",
    price: "150",
    time: "0.5h",
    description: "Dokładna i delikatna kąpiel, aby utrzymać sierść psa czystą i zdrową.",
    img: images.DogBathImage,
    animal: "Pies",
    image: images.DogBathImage
  },
  {
    name: "Strzyżenie (Pies)",
    price: "100",
    time: "0.5h",
    description: "Profesjonalne strzyżenie, aby Twój pies wyglądał schludnie i stylowo.",
    img: images.DogHairdcutImage,
    animal: "Pies",
    image: images.DogBathImage
  },
  {
    name: "Obcinanie Pazurów (Pies)",
    price: "50",
    time: "0.25h",
    description: "Bezpieczne i precyzyjne obcinanie pazurów, aby zapobiec dyskomfortowi i urazom.",
    img: images.DogNailclipImage,
    animal: "Pies",
    image: images.DogBathImage
  },
  {
    name: "Czyszczenie Zębów (Pies)",
    price: "80",
    time: "0.25h",
    description: "Skuteczne czyszczenie zębów, aby utrzymać zdrowie jamy ustnej psa.",
    img: images.DogToothImage,
    animal: "Pies",
    image: images.DogBathImage
  },
  {
    name: "Kąpiel (Kot)",
    price: "120",
    time: "0.5h",
    description: "Delikatna kąpiel, aby utrzymać sierść kota czystą i lśniącą.",
    animal: "Kot",
    image:images.DogBathImage
  },
  {
    name: "Szczotkowanie Sierści (Kot)",
    price: "80",
    time: "0.25h",
    description: "Regularne szczotkowanie sierści, aby zapobiegać splątaniu i zmniejszać linienie.",
    animal: "Kot",
    image: images.DogBathImage
  },
];

export default POPULAR_SERVICES;
