import { BsPhone, BsLaptop, BsSmartwatch } from 'react-icons/bs';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaWhatsapp,
	FaApple,
} from 'react-icons/fa';
import { SiSamsung, SiHuawei } from 'react-icons/si';
export const sideBarData = [
	{
		name: 'Smart Phones',
		icon: <BsPhone />,
		to: '/smartphone',
		open: false,
		links: [
			{ title: 'Apple', to: '/smartphone/apple' },
			{ title: 'Samsung', to: '/smartphone/samsung' },
			{ title: 'Huawei', to: '/smartphone/huawei' },
		],
	},
	{
		name: 'Laptops',
		icon: <BsLaptop />,
		to: '/laptop',
		open: false,
		links: [
			{ title: 'Apple', to: '/laptop/apple' },
			{ title: 'Samsung', to: '/laptop/samsung' },
			{ title: 'Huawei', to: '/laptop/huawei' },
		],
	},
	{
		name: 'Smart Watches',
		icon: <BsSmartwatch />,
		to: '/smartwatch',
		open: false,
		links: [
			{ title: 'Apple', to: '/smartwatch/apple' },
			{ title: 'Samsung', to: '/smartwatch/samsung' },
			{ title: 'Huawei', to: '/smartwatch/huawei' },
		],
	},
];
export const sliderItems = [
	{
		id: 1,
		img: '/img/macbookpro-banner.jpg',
		title: 'MacBook Pro 2021',
		desc: 'Check the Newest Laptops...',
		titleBtn: 'Check Now',
		to: '/macbookpro',
	},
	{
		id: 2,
		img: '/img/iphone-banner.jpg',
		title: 'Iphone 13 Pro max',
		desc: 'Check the Newest Smart Phones...',
		titleBtn: 'Check Now',
		to: '/iphone13promax',
	},
	{
		id: 3,
		img: '/img/watches-banner.jpg',
		title: 'Apple Watch Serires 7',
		desc: 'Check the Newest Smart Watches...',
		titleBtn: 'Check Now',
		to: '/applewatchseries7',
	},
];

export const categoriesItems = [
	{
		id: 1,
		title: 'Smart Phones',
		img: '/img/samsungs21ultra.jpg',
		to: '/smartphone',
	},
	{
		id: 2,
		title: 'Laptops',
		img: '/img/laptop-banner.jpg',
		to: '/laptop',
	},
	{
		id: 3,
		title: 'Smart Watches',
		img: '/img/huaweiwatchgt.jpg',
		to: 'smartwatch',
	},
];

export const settings = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: false,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};
export const socialLinksData = [
	{ id: 1, bg: '3b5998', icon: <FaFacebook /> },
	{ id: 2, bg: '00acee', icon: <FaTwitter /> },
	{ id: 3, bg: 'C13584', icon: <FaInstagram /> },
	{ id: 4, bg: '128C7E', icon: <FaWhatsapp /> },
];
export const topLinks = [
	{ id: 1, name: 'Home', to: '/' },
	{ id: 2, name: 'Smart Phones', to: '/' },
	{ id: 3, name: 'Smart Watches', to: '/' },
	{ id: 4, name: 'Laptops', to: '/' },
	{ id: 5, name: 'Cart', to: '/' },
	{ id: 6, name: 'Wishlist', to: '/' },
	{ id: 7, name: 'Order Tracking', to: '/' },
	{ id: 8, name: 'My Account', to: '/' },
	{ id: 9, name: 'Terms', to: '/' },
	{ id: 10, name: 'About', to: '/' },
];
export const BrandLinks = [
	{ id: 1, Icon: <FaApple />, to: '/smartphone/apple', color: 'C0C0C0' },
	{ id: 2, Icon: <SiSamsung />, to: '/smartphone/samsung', color: '000000' },
	{ id: 3, Icon: <SiHuawei />, to: '/smartphone/huawei', color: 'CF0A2C' },
];
export const BrandLinksLaptop = [
	{ id: 1, Icon: <FaApple />, to: '/laptop/apple', color: 'C0C0C0' },
	{ id: 2, Icon: <SiSamsung />, to: '/laptop/samsung', color: '000000' },
	{ id: 3, Icon: <SiHuawei />, to: '/laptop/huawei', color: 'CF0A2C' },
];
export const BrandLinksWatches = [
	{ id: 1, Icon: <FaApple />, to: '/smartwatch/apple', color: 'C0C0C0' },
	{ id: 2, Icon: <SiSamsung />, to: '/smartwatch/samsung', color: '000000' },
	{ id: 3, Icon: <SiHuawei />, to: '/smartwatch/huawei', color: 'CF0A2C' },
];
let users = {
	galalmohamed: {
		id: 'galalmohamed',
		firstName: 'Galal',
		lastName: 'Mohamed',
		email: 'galal@test.com',
		password: '123',
		wishlist: ['iphone13pro'],
		cart: [
			{ id: 'iphone13promax', qty: 1 },
			{ id: 'samsungzflip3', qty: 1 },
		],
	},
};

const huawei = 'huawei';
const apple = 'apple';
const samsung = 'samsung';
export const products = {
	smartPhones: {
		iphone13promax: {
			id: 'iphone13promax',
			name: 'Iphone 13 Pro Max',
			display: 6.7,
			resolution: '1284 x 2778',
			os: 'iOS 15',
			chip: 'Apple A15 Bionic',
			ram: 6,
			storage: 256,
			mainCamera: 12,
			selfieCamera: 12,
			battery: 4352,
			color: 'Sierra Blue',
			coverImg: '/img/iphone13promax.jpg',
			qty: 1,
			price: 25000,
			brand: apple,
			popular: true,
		},
		iphone13pro: {
			id: 'iphone13pro',
			name: 'Iphone 13 Pro',
			display: 6.1,
			resolution: '1170 x 2530',
			os: 'iOS 15',
			chip: 'Apple A15 Bionic',
			ram: 6,
			storage: 256,
			mainCamera: 12,
			selfieCamera: 12,
			battery: 3059,
			color: 'Gold',
			coverImg: '/img/iphone13pro.jpg',
			qty: 1,
			price: 23000,
			brand: apple,
			popular: true,
		},
		iphone13: {
			id: 'iphone13',
			name: 'Iphone 13',
			display: 6.1,
			resolution: '1170 x 2530',
			os: 'iOS 15',
			chip: 'Apple A15 Bionic',
			ram: 4,
			storage: 128,
			mainCamera: 12,
			selfieCamera: 12,
			battery: 3240,
			color: 'Blue',
			coverImg: '/img/iphone13.jpg',
			qty: 1,
			price: 16000,
			brand: apple,
			popular: false,
		},

		samsungs21ultra: {
			id: 'samsungs21ultra',
			name: 'Samsung S21 Ultra',
			display: 6.8,
			resolution: '1440 x 3200',
			os: 'Android 11',
			chip: 'Qualcomm SM8350 Snapdragon 888 ',
			ram: 12,
			storage: 256,
			mainCamera: 108,
			selfieCamera: 40,
			battery: 5000,
			color: 'Phantom Black',
			coverImg: '/img/samsungs21ultra.jpg',
			qty: 1,
			price: 20000,
			brand: samsung,
			popular: true,
		},
		samsungzflip3: {
			id: 'samsungzflip3',
			name: 'Samsung Z Flip 3',
			display: 6.7,
			resolution: '1080 x 2640',
			os: 'Android 11',
			chip: 'Qualcomm SM8350 Snapdragon 888 ',
			ram: 8,
			storage: 128,
			mainCamera: 12,
			selfieCamera: 10,
			battery: 3300,
			color: 'Cream',
			coverImg: '/img/samsungszflip3.jpg',
			qty: 1,
			price: 17200,
			brand: samsung,
			popular: false,
		},
		samsungzfold3: {
			id: 'samsungzfold3',
			name: 'Samsung Z Fold 3',
			display: 7.6,
			resolution: '1768 x 2208',
			os: 'Android 11',
			chip: 'Qualcomm SM8350 Snapdragon 888 ',
			ram: 12,
			storage: 256,
			mainCamera: 12,
			selfieCamera: 4,
			battery: 4400,
			color: 'Cream',
			coverImg: '/img/samsungzfold3.jpg',
			qty: 1,
			price: 28500,
			brand: samsung,
			popular: false,
		},

		huaweip50pro: {
			id: 'huaweip50pro',
			name: 'Huawei P50 Pro',
			display: 6.6,
			resolution: '1228 x 2700',
			os: 'HarmonyOS 2.0',
			chip: 'Qualcomm SM8350 Snapdragon 888 ',
			ram: 8,
			storage: 128,
			mainCamera: 50,
			selfieCamera: 13,
			battery: 4460,
			color: 'Gold',
			coverImg: '/img/huaweip50pro.png',
			qty: 1,
			price: 20500,
			brand: huawei,
			popular: true,
		},
		huaweip50pocket: {
			id: 'huaweip50pocket',
			name: 'Huawei P50 Pocket',
			display: 6.9,
			resolution: '1188 x 2790',
			os: 'HarmonyOS 2.0',
			chip: 'Qualcomm SM8350 Snapdragon 888 ',
			ram: 8,
			storage: 256,
			mainCamera: 40,
			selfieCamera: 10.7,
			battery: 4000,
			color: 'Gold',
			coverImg: '/img/huaweip50pocket.png',
			qty: 1,
			price: 27500,
			brand: huawei,
			popular: false,
		},
		huaweimatex2: {
			id: 'huaweimatex2',
			name: 'Huawei Mate X2',
			display: 8.0,
			resolution: '2200 x 2480',
			os: 'Android 10, EMUI 11',
			chip: 'Kirin 9000',
			ram: 8,
			storage: 256,
			mainCamera: 50,
			selfieCamera: 16,
			battery: 4500,
			color: 'Light Blue',
			coverImg: '/img/huaweimatex2.jpg',
			qty: 1,
			price: 28000,
			brand: huawei,
			popular: false,
		},
		huaweimate40pro: {
			id: 'huaweimate40pro',
			name: 'Huawei Mate 40 Pro',
			display: 6.76,
			resolution: '1344 x 2772',
			os: 'Android 10, EMUI 11',
			chip: 'Kirin 9000',
			ram: 8,
			storage: 128,
			mainCamera: 50,
			selfieCamera: 13,
			battery: 4400,
			color: 'Light Blue',
			coverImg: '/img/huaweimate40pro.jpg',
			qty: 1,
			price: 25000,
			brand: huawei,
			popular: false,
		},
	},
	laptops: {
		macbookpro: {
			id: 'macbookpro',
			name: 'MacBook Pro 14',
			display: 14.2,
			FeatureDisplay: 'Liquid Retina XDR display',
			resolution: '3024 x 1964',
			os: 'macOS',
			chip: 'Apple M1 Pro chip',
			ram: 16,
			storage: '512GB',
			color: 'Space Gray',
			coverImg: '/img/macbookpro.jpg',
			qty: 1,
			price: 43000,
			brand: apple,
			popular: false,
		},
		macbookair: {
			id: 'macbookair',
			name: 'MacBook Air',
			display: 13.3,
			FeatureDisplay: 'Retina display',
			resolution: '2560 x 1600',
			os: 'macOS',
			chip: 'Apple M1 chip',
			ram: 8,
			storage: '256GB',
			color: 'Pink',
			coverImg: '/img/macbookair.jpg',
			qty: 1,
			price: 21000,
			brand: apple,
			popular: true,
		},

		galaxybook: {
			id: 'galaxybook',
			name: 'Galaxy Book Pro 360',
			display: 13.3,
			FeatureDisplay: 'Super AMOLED Screen',
			resolution: '1920 x 1080',
			os: 'Windows',
			chip: 'Intel® Core™ i5-1165G7 Processor',
			ram: 8,
			storage: '256GB',
			color: 'Mystic Silver',
			coverImg: '/img/galaxybookpro.jpg',
			qty: 1,
			price: 22000,
			brand: samsung,
			popular: false,
		},

		huaweimatebookxpro: {
			id: 'huaweimatebookxpro',
			name: 'MateBook X Pro',
			display: 14.2,
			FeatureDisplay:
				"The world's first TÜV Rheinland Pro-level Colour Accuracy with Dual Color Gamuts Certification laptop4",
			resolution: '3120 x 2080',
			os: 'Windows',
			chip: '11th Gen Intel® Core™ i7-1195G7 Processor',
			ram: 16,
			storage: '1TB',
			color: 'Space Grey',
			coverImg: '/img/huaweimatebookxpro.jpg',
			qty: 1,
			price: 36999,
			brand: huawei,
			popular: true,
		},
		huaweimate14s: {
			id: 'huaweimate14s',
			name: 'MateBook 14s',
			display: 14.2,
			FeatureDisplay: '2.5K HUAWEI FullView Display1',
			resolution: '2520 x 1680',
			os: 'Windows',
			chip: 'Intel® Core™ i5-11300H Processor',
			ram: 8,
			storage: '512GB',
			color: 'Spruce Green',
			coverImg: '/img/huaweimatebookseriess.jpg',
			qty: 1,
			price: 20999,
			brand: huawei,
			popular: false,
		},
	},
	smartWatches: {
		applewatchseries7: {
			id: 'applewatchseries7',
			name: 'Apple Watch Series 7 Aluminum',
			display: 1.9,
			resolution: '484 x 396',
			screenSize: 45,
			os: 'watchOS 8.0',
			chip: 'Apple S7',
			storage: 32,
			battery: 309,
			color: 'Blue',
			coverImg: '/img/applewatch7.jpg',
			qty: 1,
			price: 9000,
			brand: apple,
			popular: true,
		},

		samsunggalaxywatch4: {
			id: 'samsunggalaxywatch4',
			name: 'Samsung Galaxy Watch4 Classic',
			display: 1.4,
			resolution: '450 x 450',
			screenSize: 46,
			os: 'Android Wear OS,',
			chip: 'Exynos W920',
			storage: 16,
			battery: 361,
			color: 'Black',
			coverImg: '/img/samsungwatch4.jpg',
			qty: 1,
			price: 6000,
			brand: samsung,
			popular: false,
		},

		huaweiwatchgt3: {
			id: 'huaweiwatchgt3',
			name: 'Huawei Watch GT 3',
			display: 1.43,
			resolution: '466 x 466',
			screenSize: 46,
			os: 'Android Wear OS,',
			chip: 'Exynos W920',
			storage: 32,
			battery: 455,
			color: 'Elite Edition',
			coverImg: '/img/huaweiwatchgt.jpg',
			qty: 1,
			price: 6500,
			brand: huawei,
			popular: false,
		},
	},
};

export function _getUsers() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...users }), 1000);
	});
}

export function _getProducts() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...products }), 1000);
	});
}

export function formatDate(timestamp) {
	const d = new Date(timestamp);
	const time = d.toLocaleTimeString('en-US');
	return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

//timestamp: Date.now(),
export function _saveUser(user) {
	return new Promise((res, rej) => {
		const { id, firstName, lastName, email, password } = user;
		setTimeout(() => {
			users = {
				...users,
				[id]: {
					id,
					firstName,
					lastName,
					email,
					password,
					wishlist: [],
					cart: [],
				},
			};
			res();
		}, 1000);
	});
}
