// import { products } from "./products-data";

const products = [
  {
    "id": 1,
    "name": "Fernet",
    "brand": {
      "id": 1,
      "name": "Branca Menta"
    },
    "category": {
      "id": 1,
      "name": "Aperitivos"
    },
    "presentation": {
      "id": 1,
      "name": "Botella",
      "measure_unit": "cm3",
      "value": "600"
    },
    "price": "238.50",
    "image": "../images/fernet_branca_menta_600cm3.jpg"
  },
  {
    "id": 2,
    "name": "Jabón Líquido Baja Espuma",
    "brand": {
      "id": 2,
      "name": "Skip"
    },
    "category": {
      "id": 2,
      "name": "Limpieza"
    },
    "presentation": {
      "id": 2,
      "name": "Doypack",
      "measure_unit": "L",
      "value": "3"
    },
    "price": "439.10",
    "image": "../images/jabon_liquido_baja_espuma_skip_3l.jpg"
  },
  {
    "id": 3,
    "name": "Gaseosa Lima Limón",
    "brand": {
      "id": 3,
      "name": "Sprite"
    },
    "category": {
      "id": 3,
      "name": "Gaseosas"
    },
    "presentation": {
      "id": 1,
      "name": "Botella",
      "measure_unit": "L",
      "value": "2.25"
    },
    "price": "96.49",
    "image": "../images/gaseosa_lima_limón_sprite_225l.jpg"
  },
  {
    "id": 4,
    "name": "Suavizante Para Ropa Regular",
    "brand": {
      "id": 4,
      "name": "Vívere"
    },
    "category": {
      "id": 3,
      "name": "Gaseosas"
    },
    "presentation": {
      "id": 1,
      "name": "Envase",
      "measure_unit": "cm3",
      "value": "900"
    },
    "price": "96.49",
    "image": "../images/suavizante_para_ropa_regular_vivere_900cm3.jpg"
  },
  {
    "id": 5,
    "name": "Pañales Confort Sec",
    "brand": {
      "id": 5,
      "name": "Pampers"
    },
    "category": {
      "id": 4,
      "name": "Cuidado del bebé"
    },
    "presentation": {
      "id": 1,
      "name": "Pack",
      "measure_unit": "unidades",
      "value": "36"
    },
    "price": "930.00",
    "image": "../images/pañales_confort_sec_pampers_unidades36.jpg"
  }
];

export default class ProductService {
  static getProducts(search) {
    debugger;
    return products;
    // return products.filter((product) => {
    //   return 
    //     product.name.includes(search) || 
    //     product.brand.name.includes(search) ||
    //     product.category.name.includes(search) ||
    //     product.presentation.name.includes(search)
    // });
  }
}