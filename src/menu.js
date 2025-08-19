import {
  Images
} from './images';

export const menuData = {
  "Main Course": {
    'name': 'Spicy',
    'image': Images.SpicyMain,
    'data': [{
        id: 18,
        item: "Dal Makhani",
        itemDesc: "Creamy black lentils cooked with butter and spices.",
        half: 140,
        full: 240,
        image: Images.SpicyDalmakhana,
        isVeg: true,
        isPopular: true
      },
      {
        id: 19,
        item: "Dal Tadka",
        itemDesc: "Yellow lentils tempered with spices and herbs.",
        half: 120,
        full: 200,
        image: Images.DalTadka,
        isVeg: true,
        isPopular: false
      },
      {
        id: 20,
        item: "Dal Handi",
        itemDesc: "Lentils cooked in handi with rustic spices.",
        half: 130,
        full: 220,
        image: Images.DalHnadi,
        isVeg: true,
        isPopular: false
      },
      {
        id: 21,
        item: "Kadai Paneer",
        itemDesc: "Paneer with bell peppers in spicy tomato gravy.",
        half: 180,
        full: 290,
        image: Images.KadaiPaneer,
        isVeg: true,
        isPopular: true
      },
      {
        id: 22,
        item: "Paneer Lababdar",
        itemDesc: "Paneer in creamy tomato gravy with spices.",
        half: 180,
        full: 290,
        image: Images.PaneerLababdar,
        isVeg: true,
        isPopular: false
      },
      {
        id: 23,
        item: "Paneer Butter Masala",
        itemDesc: "Paneer cubes in buttery tomato gravy.",
        half: 180,
        full: 290,
        image: Images.PaneerButterMasala,
        isVeg: true,
        isPopular: true
      },
      {
        id: 24,
        item: "Veg Angara",
        itemDesc: "Mixed vegetables in spicy, smoky gravy.",
        half: 180,
        full: 360,
        image: Images.VegAngaara,
        isVeg: true,
        isPopular: false
      },
      {
        id: 25,
        item: "Paneer-do-Pyaza",
        itemDesc: "Paneer with double onions in spicy gravy.",
        half: 160,
        full: 280,
        image: Images.PaneerDoPyaja,
        isVeg: true,
        isPopular: false
      },
      {
        id: 26,
        item: "Mushroom-do-Pyaza",
        itemDesc: "Mushrooms and onions in spiced gravy.",
        half: 160,
        full: 280,
        image: Images.MushroomMasala,
        isVeg: true,
        isPopular: false
      },
      {
        id: 27,
        item: "Mix Veg",
        itemDesc: "Assorted vegetables in mildly spiced gravy.",
        half: 180,
        full: 290,
        image: Images.MixedVeg,
        isVeg: true,
        isPopular: true
      }
    ]
  },
  "Starters": {
    'name': 'Starters',
    'image': Images.StartersMain,
    'data': [{
        id: 28,
        item: "Tandoori Chicken",
        itemDesc: "Chicken marinated and roasted in tandoor.",
        half: 170,
        full: 290,
        image: Images.TandooriChicken,
        isVeg: false,
        isPopular: true
      },
      {
        id: 29,
        item: "Chicken Tikka",
        itemDesc: "Grilled boneless chicken marinated in spices.",
        half: 170,
        full: 290,
        image: Images.ChickenTikka,
        isVeg: false,
        isPopular: true
      },
      {
        id: 30,
        item: "Afghani Chicken Tikka",
        itemDesc: "Creamy, mildly spiced grilled chicken tikka.",
        half: 180,
        full: 290,
        image: Images.AfghaniChickenTikka,
        isVeg: false,
        isPopular: false
      },
      {
        id: 31,
        item: "Tangri",
        itemDesc: "Spiced chicken drumsticks roasted for flavor.",
        half: 170,
        full: 290,
        image: Images.Tangri,
        isVeg: false,
        isPopular: false
      },
      {
        id: 32,
        item: "Chilly Chicken Dry",
        itemDesc: "Spicy chicken stir-fried with peppers.",
        half: 190,
        full: 360,
        image: Images.ChillyChickenDry,
        isVeg: false,
        isPopular: true
      },
      {
        id: 33,
        item: "Chicken Chatkara",
        itemDesc: "Chicken in tangy, spicy gravy.",
        half: 190,
        full: 370,
        image: Images.ChickenChatkara,
        isVeg: false,
        isPopular: false
      },
      {
        id: 34,
        item: "Jeera Lemon Chicken",
        itemDesc: "Chicken tossed with cumin and lemon.",
        half: 190,
        full: 370,
        image: Images.JeeraChicken,
        isVeg: false,
        isPopular: false
      },
      {
        id: 35,
        item: "Peri Peri Chicken Fry",
        itemDesc: "Chicken fried with spicy peri peri seasoning.",
        half: 190,
        full: 370,
        image: Images.PeriPeriChicken,
        isVeg: false,
        isPopular: true
      },
      {
        id: 36,
        item: "Chicken Pakoda",
        itemDesc: "Chicken pieces deep-fried until crispy.",
        half: 190,
        full: 370,
        image: Images.ChickenPakora,
        isVeg: false,
        isPopular: false
      },
      {
        id: 37,
        item: "KFC Chicken",
        itemDesc: "Crispy fried chicken, KFC style.",
        half: null,
        full: 370,
        image: Images.KfcChicken,
        isVeg: false,
        isPopular: true
      }
    ]
  },
  "Gravy": {
    'name': 'Gravy',
    'image': Images.GravyMain,
    'data': [{
        id: 38,
        item: "Butter Chicken",
        itemDesc: "Chicken in creamy tomato gravy with butter.",
        half: 300,
        full: 590,
        image: Images.ButterChicken,
        isVeg: false,
        isPopular: true
      },
      {
        id: 39,
        item: "Rara Chicken",
        itemDesc: "Chicken with minced meat in spicy gravy.",
        half: 300,
        full: 590,
        image: Images.RaraChicken,
        isVeg: false,
        isPopular: false
      },
      {
        id: 40,
        item: "Kadai Chicken",
        itemDesc: "Chicken with bell peppers in thick gravy.",
        half: 300,
        full: 590,
        image: Images.KadaiChicken,
        isVeg: false,
        isPopular: false
      },
      {
        id: 41,
        item: "Chicken Curry",
        itemDesc: "Classic chicken curry with aromatic spices.",
        half: 290,
        full: 560,
        image: Images.ChickenCurry,
        isVeg: false,
        isPopular: false
      },
      {
        id: 42,
        item: "Tawa Chicken",
        itemDesc: "Chicken cooked on tawa with rustic spices.",
        half: 290,
        full: 560,
        image: Images.TawaChicken,
        isVeg: false,
        isPopular: false
      }
    ]
  },
  "Breads": {
    'name': 'Breads',
    'image': Images.BreadMain,
    'data': [{
        id: 43,
        item: "Tandoori Roti",
        itemDesc: "Whole wheat roti cooked in tandoor.",
        full: '15',
        image: Images.TanddooriRoti,
        isVeg: true,
        isPopular: true
      },
      {
        id: 44,
        item: "Tandoori Butter Roti",
        itemDesc: "Tandoori roti brushed with butter.",
        full: 20,
        image: Images.ButterNaan,
        isVeg: true,
        isPopular: false
      },
      {
        id: 45,
        item: "Tandoori Cream Roti",
        itemDesc: "Tandoori roti topped with cream.",
        full: 20,
        image: Images.TandooriCreamRoti,
        isVeg: true,
        isPopular: false
      },
      {
        id: 46,
        item: "Plain Naan",
        itemDesc: "Soft, fluffy Indian bread baked in tandoor.",
        full: 40,
        image: Images.PlainNaan,
        isVeg: true,
        isPopular: false
      },
      {
        id: 47,
        item: "Butter Naan",
        itemDesc: "Naan brushed with butter for richness.",
        full: 50,
        image: Images.ButterNaan,
        isVeg: true,
        isPopular: true
      },
      {
        id: 48,
        item: "Garlic Naan",
        itemDesc: "Naan topped with garlic and baked.",
        full: 50,
        image: Images.GarlicNaan,
        isVeg: true,
        isPopular: true
      },
      {
        id: 49,
        item: "Lacha Paratha",
        itemDesc: "Layered, flaky paratha cooked on tawa.",
        full: 50,
        image: Images.LachhaParatha,
        isVeg: true,
        isPopular: false
      },
      {
        id: 50,
        item: "Hari Mirchi Paratha",
        itemDesc: "Paratha stuffed with green chilies.",
        full: 60,
        image: Images.HarimirchParathe,
        isVeg: true,
        isPopular: false
      }
    ]
  },
  "Snacks": {
    'name': 'Snakcs',
    'image': Images.SnacksMain,
    'data': [{
        id: 1,
        item: "Aloo Tikki Burger",
        itemDesc: "Burger with crispy potato patty and veggies.",
        full: 50,
        image: Images.AlooTikkiBurger,
        isVeg: true,
        isPopular: true
      },
      {
        id: 2,
        item: "Noodle Burger",
        itemDesc: "Burger with noodle patty and spicy sauces.",
        full: 60,
        image: Images.NoodleBurger,
        isVeg: true,
        isPopular: false
      },
      {
        id: 3,
        item: "Cream Burger",
        itemDesc: "Burger with creamy sauce and fresh veggies.",
        full: 70,
        image: Images.CreamBurger,
        isVeg: true,
        isPopular: false
      },
      {
        id: 4,
        item: "Cheese Burger",
        itemDesc: "Burger with melted cheese and juicy patty.",
        full: 70,
        image: Images.CheeseBurger,
        isVeg: false,
        isPopular: true
      },
      {
        id: 5,
        item: "Double Tikki Burger",
        itemDesc: "Burger with two crispy potato patties.",
        full: 70,
        image: Images.DoubleTikkiBurger,
        isVeg: true,
        isPopular: false
      },
      {
        id: 6,
        item: "Veg Noodles",
        itemDesc: "Stir-fried noodles with vegetables and sauces.",
        half: 80,
        full: 150,
        image: Images.VegNoodles,
        isVeg: true,
        isPopular: true
      },
      {
        id: 7,
        item: "Manchurian",
        itemDesc: "Fried vegetable balls in spicy sauce.",
        half: 80,
        full: 150,
        image: Images.SnacksMunChoorian,
        isVeg: false,
        isPopular: true
      },
      {
        id: 8,
        item: "Spring Roll (2pcs)",
        itemDesc: "Crispy rolls stuffed with veggies.",
        half: 80,
        full: 100,
        image: Images.SpringRoll,
        isVeg: true,
        isPopular: false
      },
      {
        id: 9,
        item: "Bullets",
        itemDesc: "Spicy, crispy snack balls with mixed ingredients.",
        half: 60,
        full: 100,
        image: Images.Bullets,
        isVeg: false,
        isPopular: false
      },
      {
        id: 10,
        item: "Cheese Corn Roll",
        itemDesc: "Roll stuffed with cheese and corn.",
        full: 180,
        image: Images.CheeseCornRoll,
        isVeg: true,
        isPopular: true
      },
      {
        id: 11,
        item: "Paneer Tikka",
        itemDesc: "Paneer cubes marinated and grilled.",
        half: 160,
        full: 290,
        image: Images.PaneerTikka,
        isVeg: true,
        isPopular: true
      },
      {
        id: 12,
        item: "Cheese Chilly",
        itemDesc: "Paneer or cheese cubes in chili sauce.",
        half: 160,
        full: 290,
        image: Images.CheeseChilli,
        isVeg: true,
        isPopular: false
      },
      {
        id: 13,
        item: "Mushroom Tikka",
        itemDesc: "Mushrooms marinated and grilled for smoky taste.",
        half: 120,
        full: 200,
        image: Images.MushroomTikka,
        isVeg: true,
        isPopular: false
      },
      {
        id: 14,
        item: "Malai Chaap",
        itemDesc: "Soya chaap in creamy, mildly spiced gravy.",
        half: 120,
        full: 200,
        image: Images.MalaiChap,
        isVeg: true,
        isPopular: false
      },
      {
        id: 15,
        item: "Achari Champ",
        itemDesc: "Soya chaap in tangy achari spices.",
        half: 80,
        full: 150,
        image: Images.AchariChaapTikka,
        isVeg: true,
        isPopular: false
      },
      {
        id: 16,
        item: "French Fries",
        itemDesc: "Crispy potato fries, lightly salted.",
        half: 100,
        full: 180,
        image: Images.FrenchFries,
        isVeg: true,
        isPopular: true
      },
      {
        id: 17,
        item: "French Fries Peri Peri",
        itemDesc: "Crispy fries tossed in peri peri seasoning.",
        half: 100,
        full: 180,
        image: Images.FrenchFriesPeriPeri,
        isVeg: false,
        isPopular: true
      }
    ]
  },
};