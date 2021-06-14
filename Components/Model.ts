export interface Food {
  id:string;
  title:string;
  emoji:string;
  additionalInfo:string;
  like:boolean;
}

export interface Menu {
  id:string;
  title: string;
  items: Food[]
}

export interface MenuItem {
  id:string;
  title: string;
}


{
  //     "title": "Pizza",
  //     "items": [
  //       {
  //         "title":"Pepperoni",
  //         "emoji":"🍕",
  //         "additionalInfo":"Pepperoni and cheese",
  //         "like":false
  //       },
  //       {
  //         "title":"Pepperoni & Chillis",
  //         "emoji":"🌶",
  //         "additionalInfo":"Pepperoni and Chilli",
  //         "like":false
  //       },
  //       {
  //         "title":"Hawwiian",
  //         "emoji":"🍍",
  //         "additionalInfo":"Pineapple and Ham",
  //         "like":false
  //       },
  //       {
  //         "title":"Veggie",
  //         "emoji":"🥦",
  //         "additionalInfo":"Broccoli and mushrooms",
  //         "like":false
  //       },
  //       {
  //         "title":"Meat Feast",
  //         "emoji":"🍖",
  //         "additionalInfo":"Lots of meat",
  //         "like":false
  //       },
  //       {
  //         "title":"Margarita",
  //         "emoji":"🧀",
  //         "additionalInfo":"Just cheese thankyou",
  //         "like":false
  //       },
  //       {
  //         "title":"Tandoori Chicken",
  //         "emoji":"🍗",
  //         "additionalInfo":"Curried Chicken",
  //         "like":false
  //       },
  //       {
  //         "title":"Parmaham",
  //         "emoji":"🥓",
  //         "additionalInfo":"Bacon but thinner",
  //         "like":false
  //       },
  //       {
  //         "title":"Diavola",
  //         "emoji":"🌭",
  //         "additionalInfo":"Spicy pepperoni",
  //         "like":false
  //       },
  //       {
  //         "title":"Tomato",
  //         "emoji":"🍅",
  //         "additionalInfo":"Tomato and Basil",
  //         "like":false
  //       }
  //     ]
  // }
  // // }
  
  
  
  // {
  //   "title": "Takeaway",
  //   "items": [
  //     {
  //       "title":"pizza",
  //       "emoji":"🍕",
  //       "additionalInfo":"Pepperoni, Hawaiian, Margarita",
  //       "like":false
  //     },
  //     {
  //       "title":"thai",
  //       "emoji":"🍜",
  //       "additionalInfo":"Pad Thai, Papya Salad, Pad Seewo",
  //       "like":false
  //     },
  //     {
  //       "title":"vietnamese",
  //       "emoji":"🥪",
  //       "additionalInfo":"Bahn Mi, Pho, Bun Bo",
  //       "like":false
  //     },
  //     {
  //       "title":"sushi",
  //       "emoji":"🍣",
  //       "additionalInfo":"Tempura, Sushi, Udon",
  //       "like":false
  //     },
  //     {
  //       "title":"burgers",
  //       "emoji":"🍔",
  //       "additionalInfo":"Chicken, Burgers, Milkshakes",
  //       "like":false
  //     },
  //     {
  //       "title":"chinese",
  //       "emoji":"🥡",
  //       "additionalInfo":"Noodles, Dumplings, Rice",
  //       "like":false
  //     },
  //     {
  //       "title":"fish&chips",
  //       "emoji":"🐠",
  //       "additionalInfo":"Fish, Chips, Battered Sausage",
  //       "like":false
  //     },
  //     {
  //       "title":"kebab",
  //       "emoji":"🧆",
  //       "additionalInfo":"Donner, Dolmades, Spanicopita",
  //       "like":false
  //     },
  //     {
  //       "title":"greek",
  //       "emoji":"🌯",
  //       "additionalInfo":"Shwarma, Souvlaki, Squid",
  //       "like":false
  //     },
  //     {
  //       "title":"indian",
  //       "emoji":"🍛",
  //       "additionalInfo":"Madras, Briyana, Tandoori",
  //       "like":false
  //     }
      
  //   ]
  // }