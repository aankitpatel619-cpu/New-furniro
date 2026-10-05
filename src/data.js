// All images are local files in /public/images (extracted from your Figma exports).
const I = f => `/images/${f}`;
export const IMG = { logo: I("logo.png"), banner: I("banner.jpg"), hero: I("hero.jpg") };
export const rooms = [["Dining", I("dining.jpg")], ["Living", I("living.jpg")], ["Bedroom", I("bedroom.jpg")]];
export const slides = [["Bed Room", "Inner Peace", I("room1.jpg")], ["Dining", "Warm Table", I("room2.jpg")], ["Living", "Soft Light", I("room3.jpg")]];
export const gallery = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"].map(n => I(n + ".jpg"));
export const descImgs = [I("white1.png"), I("white2.png")];
export const blogThumbs = [1, 2, 3, 4, 5].map(n => I(`recent${n}.jpg`));
export const products = [
 { id: 1, name: "Syltherine", desc: "Stylish cafe chair", price: 2500000, old: 3500000, tag: "-30%", img: I("syltherine.jpg") },
 { id: 2, name: "Leviosa", desc: "Stylish cafe chair", price: 2500000, img: I("leviosa.jpg") },
 { id: 3, name: "Lolito", desc: "Luxury big sofa", price: 7000000, old: 14000000, tag: "-50%", img: I("lolito.jpg") },
 { id: 4, name: "Respira", desc: "Outdoor bar table and stool", price: 500000, tag: "New", img: I("respira.jpg") },
 { id: 5, name: "Grifo", desc: "Night lamp", price: 1500000, img: I("grifo.jpg") },
 { id: 6, name: "Muggo", desc: "Small mug", price: 150000, tag: "New", img: I("muggo.jpg") },
 { id: 7, name: "Pingky", desc: "Cute bed set", price: 7000000, old: 14000000, tag: "-50%", img: I("pingky.jpg") },
 { id: 8, name: "Potty", desc: "Minimalist flower pot", price: 500000, tag: "New", img: I("potty.jpg") },
];
export const sofa = { id: 100, name: "Asgaard sofa", desc: "Luxury sofa", price: 250000, img: I("asgaard.png"), rs: true, gallery: [I("asgaard.png"), I("outdoor.png"), I("sofa4.png"), I("sofa5.png")] };
export const rs = n => "Rs. " + n.toLocaleString("en-US") + ".00";
export const rp = n => "Rp " + n.toLocaleString("de-DE");
export const features = [
 ["FaTrophy", "High Quality", "crafted from top materials"],
 ["FaCheckCircle", "Warranty Protection", "Over 2 years"],
 ["FaBoxOpen", "Free Shipping", "Order over 150 $"],
 ["FaHeadset", "24 / 7 Support", "Dedicated support"],
];
export const posts = [
 { t: "Going all-in with millennial design", cat: "Wood", img: I("blog1.jpg") },
 { t: "Exploring new ways of decorating", cat: "Handmade", img: I("blog2.jpg") },
 { t: "Handmade pieces that took time to make", cat: "Wood", img: I("blog3.jpg") },
];
export const categories = [["Crafts", 2], ["Design", 8], ["Handmade", 7], ["Interior", 1], ["Wood", 6]];
export const recent = ["Going all-in with millennial design", "Exploring new ways of decorating", "Handmade pieces that took time to make", "Modern home in Milan", "Colorful office redesign"];
export const compare = {
 General: [["Sales Package", "1 sectional sofa", "1 Three Seater, 2 Single Seater"], ["Model Number", "TFCBLIGRBL6SRHS", "DTUBLIGRBL568"], ["Secondary Material", "Solid Wood", "Solid Wood"], ["Configuration", "L-shaped", "L-shaped"], ["Upholstery Material", "Fabric + Cotton", "Fabric + Cotton"], ["Upholstery Color", "Bright Grey & Lion", "Bright Grey & Lion"]],
 Product: [["Filling Material", "Foam", "Matte"], ["Finish Type", "Bright Grey & Lion", "Bright Grey & Lion"], ["Adjustable Headrest", "No", "Yes"], ["Maximum Load Capacity", "280 KG", "300 KG"], ["Origin of Manufacture", "India", "India"]],
 Dimensions: [["Width", "265.32 cm", "265.32 cm"], ["Height", "76 cm", "76 cm"], ["Depth", "167.76 cm", "167.76 cm"], ["Weight", "45 KG", "65 KG"], ["Seat Height", "41.52 cm", "41.52 cm"], ["Leg Height", "5.46 cm", "5.46 cm"]],
 Warranty: [["Warranty Summary", "1 Year Manufacturing Warranty", "1.2 Year Manufacturing Warranty"], ["Covered in Warranty", "Warranty against manufacturing defect", "Limited to manufacturing defects only"], ["Not Covered in Warranty", "Damage from use beyond intended use, wear & tear", "Damage from use beyond intended use, wear & tear"], ["Domestic Warranty", "1 Year", "3 Months"]],
};
export const allProducts = [...products, sofa];
export const fmt = p => (p.rs ? rs(p.price) : rp(p.price));
