export const COMPANY = {
  name: "Aarya Neelkamal Tours and Travels",
  shortName: "ANK Tours and Travels",
  tagline: "30+ Years of Trusted Travel",
  phone: "+91 73983 06179",
  whatsapp: "+91 73983 06179",
  whatsappNumber: "917398306179",
  whatsappLink: "https://wa.me/917398306179?text=" + encodeURIComponent("Hi, I'd like to enquire about a tour/bus hire."),
  email: "aaryanktravels@gmail.com",
  address: "Near Essar Petrol Pump, Kerakatpur, Lohta, Varanasi, Uttar Pradesh, India",
  foundingYear: "1995",
};

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type Pkg = {
  id: string; name: string; duration: string; price: string;
  highlights: string[]; tag: string; category: "pilgrimage"|"nepal"|"circuit"|"custom";
  alt: string;
};

export const PACKAGES: Pkg[] = [
  { id:"varanasi-budget", name:"Varanasi — Budget Package", duration:"2–5 Days", price:"From ₹1,800/person",
    highlights:["Ganga Aarti","Kashi Vishwanath","Sarnath","Ghat Walk"], tag:"Budget-Friendly", category:"pilgrimage",
    alt:"Varanasi Ganga Aarti pilgrimage tour package" },
  { id:"varanasi-mid", name:"Varanasi — Mid-Range Package", duration:"2–5 Days", price:"From ₹5,000/person",
    highlights:["Heritage Hotel","Private Boat","Licensed Guide","Sarnath"], tag:"Most Popular", category:"pilgrimage",
    alt:"Varanasi mid-range pilgrimage package with heritage hotel" },
  { id:"varanasi-luxury", name:"Varanasi — Luxury Package", duration:"2–5 Days", price:"From ₹25,000/person",
    highlights:["Palace Hotel","Private Scholar Guide","Silk Atelier","Classical Music Evening"], tag:"Premium", category:"pilgrimage",
    alt:"Varanasi luxury palace hotel pilgrimage tour" },
  { id:"ayodhya", name:"Ayodhya Pilgrimage", duration:"2–4 Days", price:"From ₹6,500/person",
    highlights:["Ram Mandir Darshan","Saryu Boat Ride","Kanak Bhavan","Hanuman Garhi"], tag:"Spiritual", category:"pilgrimage",
    alt:"Ayodhya Ram Mandir pilgrimage tour package" },
  { id:"prayagraj", name:"Prayagraj — Triveni Sangam", duration:"2–4 Days", price:"From ₹7,000/person",
    highlights:["Sangam Holy Dip","Anand Bhavan","Chitrakoot Day Trip","Ganga Aarti"], tag:"Spiritual", category:"pilgrimage",
    alt:"Prayagraj Triveni Sangam pilgrimage tour" },
  { id:"gaya", name:"Gaya & Bodh Gaya", duration:"2–4 Days", price:"From ₹8,000/person",
    highlights:["Mahabodhi Temple","Vishnupad Temple","Rajgir–Nalanda","Dungeshwari Caves"], tag:"Hindu & Buddhist", category:"pilgrimage",
    alt:"Bodh Gaya Mahabodhi Temple pilgrimage package" },
  { id:"naimisharanya", name:"Naimisharanya", duration:"2–4 Days", price:"From ₹5,000/person",
    highlights:["Chakra Teertha","Lalita Devi Shakti Peetha","Lucknow Day Trip","Forest Walk"], tag:"Hidden Gem", category:"pilgrimage",
    alt:"Naimisharanya pilgrimage tour package" },
  { id:"janakpur", name:"Janakpur (Nepal)", duration:"3–4 Days", price:"From ₹7,000/person",
    highlights:["Ram-Janaki Temple","Mithila Art","Vivah Panchami","Sitamarhi Crossing"], tag:"Nepal", category:"nepal",
    alt:"Janakpur Nepal Ram Janaki temple tour" },
  { id:"kathmandu", name:"Kathmandu Darshan", duration:"3–4 Days", price:"From ₹22,000/person",
    highlights:["Pashupatinath","Boudhanath","3 Durbar Squares","Swayambhunath"], tag:"Nepal", category:"nepal",
    alt:"Kathmandu Pashupatinath darshan tour from Varanasi" },
  { id:"pokhara", name:"Pokhara & Poon Hill", duration:"3–4 Days", price:"From ₹18,000/person",
    highlights:["Phewa Lake","Paragliding","World Peace Pagoda","Poon Hill Sunrise Trek"], tag:"Nepal • Adventure", category:"nepal",
    alt:"Pokhara Poon Hill Nepal adventure tour" },
  { id:"up-circuit", name:"Kashi–Prayag–Ayodhya–Naimisharanya Circuit", duration:"5–7 Days", price:"Group Package",
    highlights:["Complete UP Pilgrimage Circuit","~820 km","20–45 passengers"], tag:"Group Circuit", category:"circuit",
    alt:"UP pilgrimage circuit Kashi Prayag Ayodhya group tour" },
  { id:"nepal-circuit", name:"Nepal Full Pilgrimage Circuit", duration:"10–14 Days", price:"Group Package",
    highlights:["Lumbini, Janakpur, Kathmandu","Pokhara, Muktinath","Pashupatinath"], tag:"Nepal • Group Circuit", category:"circuit",
    alt:"Nepal full pilgrimage circuit Lumbini Muktinath" },
  { id:"buddhist", name:"Buddhist Circuit", duration:"7–9 Days", price:"Group Package",
    highlights:["Sarnath, Kushinagar, Lumbini","Bodh Gaya, Rajgir, Nalanda","~1050 km"], tag:"Buddhist", category:"circuit",
    alt:"Buddhist circuit tour Sarnath Bodh Gaya Lumbini" },
];

export const CITIES = ["Varanasi","Ayodhya","Prayagraj","Gaya","Bodh Gaya","Gorakhpur","Lucknow","Patna","Naimisharanya","Janakpur","Kathmandu","Pokhara","Delhi","Agra","Haridwar","Amritsar"];
