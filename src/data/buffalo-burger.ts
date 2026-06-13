// Buffalo Burger — Business tier menu data
// مطعم بافلو برجر — متخصص في كل أنواع البرجر

export type Locale = "ar" | "en";

export type Badge = "bestseller" | "new" | "spicy" | "offer";
export type Allergen = "gluten" | "dairy" | "egg" | "sesame" | "soy" | "mustard";

export interface MenuItem {
  id: string;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  price: number;
  priceBefore?: number; // for offers
  calories?: number;
  image: string; // emoji placeholder until real photos
  badges?: Badge[];
  allergens?: Allergen[];
  spicyLevel?: 0 | 1 | 2 | 3;
  available?: boolean;
}

export interface MenuCategory {
  id: string;
  name: { ar: string; en: string };
  icon: string;
  items: MenuItem[];
}

export interface Branch {
  id: string;
  name: { ar: string; en: string };
  address: { ar: string; en: string };
  phone: string;
  hours: string;
  mapUrl: string;
}

export const restaurant = {
  slug: "buffalo-burger",
  name: { ar: "بافلو برجر", en: "Buffalo Burger" },
  tagline: {
    ar: "متخصصون في كل أنواع البرجر 🔥",
    en: "Specialists in all kinds of burgers 🔥",
  },
  description: {
    ar: "برجر طازج 100% لحم بلدي مشوي على الفحم، فراخ مقرمشة، وصوصات سرية. تجربة برجر مالهاش زي.",
    en: "100% fresh charcoal-grilled beef, crispy chicken, and secret sauces. A burger experience like no other.",
  },
  currency: { ar: "ج.م", en: "EGP" },
  rating: 4.8,
  reviewsCount: 2347,
  logo: "🐃",
  cover: "🍔",
  colors: {
    primary: "#dc2626", // red
    accent: "#f59e0b", // amber
    dark: "#1c1917", // charcoal
  },
  social: {
    instagram: "buffaloburger.eg",
    facebook: "BuffaloBurgerEgypt",
    whatsapp: "201000000000",
  },
  tier: "business" as const,
};

export const branches: Branch[] = [
  {
    id: "nasr-city",
    name: { ar: "فرع مدينة نصر", en: "Nasr City Branch" },
    address: { ar: "شارع عباس العقاد، مدينة نصر، القاهرة", en: "Abbas El Akkad St, Nasr City, Cairo" },
    phone: "16345",
    hours: "12:00 ظهراً - 3:00 صباحاً",
    mapUrl: "https://maps.google.com/?q=Nasr+City+Cairo",
  },
  {
    id: "maadi",
    name: { ar: "فرع المعادي", en: "Maadi Branch" },
    address: { ar: "شارع 9، المعادي، القاهرة", en: "Street 9, Maadi, Cairo" },
    phone: "16345",
    hours: "12:00 ظهراً - 2:00 صباحاً",
    mapUrl: "https://maps.google.com/?q=Maadi+Cairo",
  },
  {
    id: "alex",
    name: { ar: "فرع الإسكندرية", en: "Alexandria Branch" },
    address: { ar: "طريق الكورنيش، سموحة، الإسكندرية", en: "Corniche Rd, Smouha, Alexandria" },
    phone: "16345",
    hours: "1:00 ظهراً - 3:00 صباحاً",
    mapUrl: "https://maps.google.com/?q=Smouha+Alexandria",
  },
];

export const menu: MenuCategory[] = [
  {
    id: "beef",
    name: { ar: "برجر اللحم", en: "Beef Burgers" },
    icon: "🍔",
    items: [
      {
        id: "classic-buffalo",
        name: { ar: "كلاسيك بافلو", en: "Classic Buffalo" },
        description: {
          ar: "قطعة لحم بلدي 150 جم مشوية على الفحم، جبنة شيدر، خس، طماطم، وصوص البافلو السري.",
          en: "150g charcoal-grilled beef patty, cheddar cheese, lettuce, tomato, and our secret Buffalo sauce.",
        },
        price: 110,
        calories: 650,
        image: "🍔",
        badges: ["bestseller"],
        allergens: ["gluten", "dairy", "sesame"],
        spicyLevel: 1,
        available: true,
      },
      {
        id: "double-buffalo",
        name: { ar: "دابل بافلو", en: "Double Buffalo" },
        description: {
          ar: "قطعتين لحم بلدي 150 جم، دابل جبنة شيدر، بصل كراميل، مخلل، وصوص البافلو.",
          en: "Two 150g beef patties, double cheddar, caramelized onions, pickles, and Buffalo sauce.",
        },
        price: 165,
        calories: 980,
        image: "🍔",
        badges: ["bestseller"],
        allergens: ["gluten", "dairy", "sesame"],
        spicyLevel: 1,
        available: true,
      },
      {
        id: "smashed-buffalo",
        name: { ar: "سماش بافلو", en: "Smashed Buffalo" },
        description: {
          ar: "قطعتين سماش برجر رفيعة مقرمشة الأطراف، جبنة أمريكان مذابة، صوص السماش الخاص.",
          en: "Two thin crispy-edged smashed patties, melted American cheese, special smash sauce.",
        },
        price: 145,
        calories: 820,
        image: "🍔",
        badges: ["new"],
        allergens: ["gluten", "dairy", "egg"],
        spicyLevel: 0,
        available: true,
      },
      {
        id: "spicy-jalapeno",
        name: { ar: "سبايسي هالابينو", en: "Spicy Jalapeño" },
        description: {
          ar: "لحم بلدي 150 جم، هالابينو حار، جبنة بيبر جاك، صوص الناار الحار. للي بيحب النار! 🌶️",
          en: "150g beef patty, hot jalapeños, pepper jack cheese, fire sauce. For the heat lovers! 🌶️",
        },
        price: 130,
        calories: 720,
        image: "🌶️",
        badges: ["spicy"],
        allergens: ["gluten", "dairy"],
        spicyLevel: 3,
        available: true,
      },
      {
        id: "mushroom-swiss",
        name: { ar: "مشروم سويس", en: "Mushroom Swiss" },
        description: {
          ar: "لحم بلدي 150 جم، مشروم سوتيه بالزبدة، جبنة سويسرية، صوص الثوم الكريمي.",
          en: "150g beef patty, butter-sautéed mushrooms, Swiss cheese, creamy garlic sauce.",
        },
        price: 140,
        calories: 760,
        image: "🍄",
        allergens: ["gluten", "dairy"],
        spicyLevel: 0,
        available: true,
      },
      {
        id: "bbq-bacon-beef",
        name: { ar: "باربكيو بيف", en: "BBQ Beef" },
        description: {
          ar: "لحم بلدي 150 جم، صوص الباربكيو المدخن، حلقات بصل مقرمشة، جبنة شيدر.",
          en: "150g beef patty, smoky BBQ sauce, crispy onion rings, cheddar cheese.",
        },
        price: 150,
        calories: 840,
        image: "🍔",
        allergens: ["gluten", "dairy"],
        spicyLevel: 0,
        available: false,
      },
    ],
  },
  {
    id: "chicken",
    name: { ar: "برجر الفراخ", en: "Chicken Burgers" },
    icon: "🍗",
    items: [
      {
        id: "crispy-chicken",
        name: { ar: "كريسبي تشيكن", en: "Crispy Chicken" },
        description: {
          ar: "صدر فراخ مقرمش، خس، مايونيز، مخلل. مقرمش من بره وطري من جوه.",
          en: "Crispy fried chicken breast, lettuce, mayo, pickles. Crunchy outside, juicy inside.",
        },
        price: 105,
        calories: 590,
        image: "🍗",
        badges: ["bestseller"],
        allergens: ["gluten", "egg", "mustard"],
        spicyLevel: 0,
        available: true,
      },
      {
        id: "nashville-hot",
        name: { ar: "ناشفيل هوت", en: "Nashville Hot" },
        description: {
          ar: "فراخ مقرمشة متغطسة في صوص ناشفيل الحار، كول سلو، مخلل. حار وجامد! 🔥",
          en: "Crispy chicken dipped in Nashville hot sauce, coleslaw, pickles. Hot and bold! 🔥",
        },
        price: 125,
        calories: 680,
        image: "🌶️",
        badges: ["spicy", "new"],
        allergens: ["gluten", "egg", "dairy"],
        spicyLevel: 3,
        available: true,
      },
      {
        id: "grilled-chicken",
        name: { ar: "جريلد تشيكن", en: "Grilled Chicken" },
        description: {
          ar: "صدر فراخ مشوي صحي، خس، طماطم، صوص الهاني مسترد. خيار خفيف ولذيذ.",
          en: "Healthy grilled chicken breast, lettuce, tomato, honey mustard. Light and tasty.",
        },
        price: 115,
        calories: 480,
        image: "🍗",
        allergens: ["gluten", "mustard"],
        spicyLevel: 0,
        available: true,
      },
      {
        id: "buffalo-chicken",
        name: { ar: "بافلو تشيكن", en: "Buffalo Chicken" },
        description: {
          ar: "فراخ مقرمشة بصوص البافلو الأصلي، جبنة بلو تشيز، كرفس. التوقيع الخاص بينا.",
          en: "Crispy chicken in original Buffalo sauce, blue cheese, celery. Our signature.",
        },
        price: 130,
        calories: 710,
        image: "🍗",
        badges: ["bestseller", "spicy"],
        allergens: ["gluten", "egg", "dairy"],
        spicyLevel: 2,
        available: true,
      },
    ],
  },
  {
    id: "combos",
    name: { ar: "وجبات كومبو", en: "Combo Meals" },
    icon: "🍟",
    items: [
      {
        id: "classic-combo",
        name: { ar: "كومبو كلاسيك", en: "Classic Combo" },
        description: {
          ar: "كلاسيك بافلو برجر + بطاطس مقرمشة + مشروب غازي. وفّر 25 جنيه!",
          en: "Classic Buffalo burger + crispy fries + soft drink. Save 25 EGP!",
        },
        price: 150,
        priceBefore: 175,
        calories: 1100,
        image: "🍔",
        badges: ["offer"],
        allergens: ["gluten", "dairy", "sesame"],
        spicyLevel: 1,
        available: true,
      },
      {
        id: "double-combo",
        name: { ar: "كومبو دابل", en: "Double Combo" },
        description: {
          ar: "دابل بافلو برجر + بطاطس كبيرة + أنيون رينجز + مشروب. للجوعانين! وفّر 40 جنيه!",
          en: "Double Buffalo + large fries + onion rings + drink. For the hungry! Save 40 EGP!",
        },
        price: 220,
        priceBefore: 260,
        calories: 1650,
        image: "🍔",
        badges: ["offer", "bestseller"],
        allergens: ["gluten", "dairy", "sesame"],
        spicyLevel: 1,
        available: true,
      },
      {
        id: "family-box",
        name: { ar: "بوكس العيلة", en: "Family Box" },
        description: {
          ar: "4 برجر مشكل + 2 بطاطس كبيرة + 4 مشروبات + 8 قطع دجاج. يكفي 4 أشخاص.",
          en: "4 mixed burgers + 2 large fries + 4 drinks + 8 chicken pieces. Serves 4.",
        },
        price: 580,
        priceBefore: 700,
        calories: 4200,
        image: "📦",
        badges: ["offer"],
        allergens: ["gluten", "dairy", "egg", "sesame"],
        spicyLevel: 1,
        available: true,
      },
    ],
  },
  {
    id: "sides",
    name: { ar: "الجانبية", en: "Sides" },
    icon: "🍟",
    items: [
      {
        id: "fries",
        name: { ar: "بطاطس مقرمشة", en: "Crispy Fries" },
        description: { ar: "بطاطس ذهبية مقرمشة برشة ملح.", en: "Golden crispy fries with a pinch of salt." },
        price: 35,
        calories: 320,
        image: "🍟",
        allergens: ["gluten"],
        available: true,
      },
      {
        id: "cheese-fries",
        name: { ar: "بطاطس بالجبنة", en: "Cheese Fries" },
        description: { ar: "بطاطس مغطاة بصوص الشيدر المذاب والبيكون.", en: "Fries loaded with melted cheddar sauce and beef bacon." },
        price: 55,
        calories: 480,
        image: "🧀",
        badges: ["bestseller"],
        allergens: ["gluten", "dairy"],
        available: true,
      },
      {
        id: "onion-rings",
        name: { ar: "أنيون رينجز", en: "Onion Rings" },
        description: { ar: "حلقات بصل مقرمشة مع صوص الرانش.", en: "Crispy onion rings with ranch dip." },
        price: 45,
        calories: 410,
        image: "🧅",
        allergens: ["gluten", "egg"],
        available: true,
      },
      {
        id: "buffalo-wings",
        name: { ar: "بافلو وينجز", en: "Buffalo Wings" },
        description: { ar: "6 قطع أجنحة بصوص البافلو الحار مع بلو تشيز.", en: "6 wings in spicy Buffalo sauce with blue cheese." },
        price: 85,
        calories: 540,
        image: "🍗",
        badges: ["spicy"],
        allergens: ["dairy"],
        spicyLevel: 2,
        available: true,
      },
      {
        id: "mozzarella-sticks",
        name: { ar: "أصابع الموتزاريلا", en: "Mozzarella Sticks" },
        description: { ar: "5 أصابع موتزاريلا مقرمشة مع صوص المارينارا.", en: "5 crispy mozzarella sticks with marinara sauce." },
        price: 65,
        calories: 450,
        image: "🧀",
        allergens: ["gluten", "dairy", "egg"],
        available: true,
      },
    ],
  },
  {
    id: "sauces",
    name: { ar: "الصوصات الإضافية", en: "Extra Sauces" },
    icon: "🥫",
    items: [
      {
        id: "buffalo-sauce",
        name: { ar: "صوص البافلو", en: "Buffalo Sauce" },
        description: { ar: "صوصنا السري الحار.", en: "Our secret spicy sauce." },
        price: 10,
        image: "🥫",
        spicyLevel: 2,
        available: true,
      },
      {
        id: "ranch",
        name: { ar: "رانش", en: "Ranch" },
        description: { ar: "صوص الرانش الكريمي.", en: "Creamy ranch dip." },
        price: 10,
        image: "🥛",
        allergens: ["dairy", "egg"],
        available: true,
      },
      {
        id: "bbq",
        name: { ar: "باربكيو", en: "BBQ" },
        description: { ar: "صوص باربكيو مدخن.", en: "Smoky BBQ sauce." },
        price: 10,
        image: "🍯",
        available: true,
      },
      {
        id: "garlic",
        name: { ar: "ثومية", en: "Garlic" },
        description: { ar: "صوص الثوم الكريمي.", en: "Creamy garlic sauce." },
        price: 10,
        image: "🧄",
        allergens: ["dairy", "egg"],
        available: true,
      },
    ],
  },
  {
    id: "drinks",
    name: { ar: "المشروبات", en: "Drinks" },
    icon: "🥤",
    items: [
      {
        id: "soft-drink",
        name: { ar: "مشروب غازي", en: "Soft Drink" },
        description: { ar: "كوكاكولا / سبرايت / فانتا.", en: "Coca-Cola / Sprite / Fanta." },
        price: 20,
        calories: 140,
        image: "🥤",
        available: true,
      },
      {
        id: "fresh-lemon",
        name: { ar: "ليمون بالنعناع", en: "Fresh Lemon & Mint" },
        description: { ar: "عصير ليمون طازج بالنعناع.", en: "Freshly squeezed lemon with mint." },
        price: 30,
        calories: 90,
        image: "🍋",
        badges: ["bestseller"],
        available: true,
      },
      {
        id: "oreo-shake",
        name: { ar: "ميلك شيك أوريو", en: "Oreo Milkshake" },
        description: { ar: "ميلك شيك كريمي بالأوريو والكريمة.", en: "Creamy Oreo milkshake topped with whipped cream." },
        price: 55,
        calories: 480,
        image: "🥤",
        badges: ["bestseller"],
        allergens: ["dairy", "gluten"],
        available: true,
      },
      {
        id: "water",
        name: { ar: "مياه معدنية", en: "Mineral Water" },
        description: { ar: "زجاجة مياه 600 مل.", en: "600ml water bottle." },
        price: 12,
        image: "💧",
        available: true,
      },
    ],
  },
  {
    id: "desserts",
    name: { ar: "الحلويات", en: "Desserts" },
    icon: "🍰",
    items: [
      {
        id: "molten-cake",
        name: { ar: "مولتن كيك", en: "Molten Cake" },
        description: { ar: "كيكة شوكولاتة ساخنة بقلب سائل مع آيس كريم فانيليا.", en: "Warm chocolate cake with a molten center and vanilla ice cream." },
        price: 60,
        calories: 520,
        image: "🍫",
        badges: ["bestseller"],
        allergens: ["gluten", "dairy", "egg"],
        available: true,
      },
      {
        id: "cheesecake",
        name: { ar: "تشيز كيك", en: "Cheesecake" },
        description: { ar: "تشيز كيك نيويورك بصوص الفراولة.", en: "New York cheesecake with strawberry sauce." },
        price: 55,
        calories: 430,
        image: "🍰",
        allergens: ["gluten", "dairy", "egg"],
        available: true,
      },
    ],
  },
];

// Loyalty program config (Business tier feature)
export const loyalty = {
  enabled: true,
  pointsPerEGP: 1,
  rewardThreshold: 500,
  rewardDescription: { ar: "برجر مجاني عند 500 نقطة", en: "Free burger at 500 points" },
};
