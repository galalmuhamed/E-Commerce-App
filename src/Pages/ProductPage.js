import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	Container,
	FirstBox,
	Left,
	Image,
	Center,
	Title,
	Specs,
	Right,
	Price,
	CartContainr,
	CartBtn,
	WishList,
	Variety,
	Payment,
} from '../Components/Styles/ProductPage.styled';
import {
	MdMemory,
	MdSdStorage,
	MdOutlinePhonelinkSetup,
	MdOutlineSmartScreen,
	MdOutlineCameraFront,
	MdLaptopMac,
	MdOutlineHighQuality,
	MdOutlineFullscreen,
	MdShoppingCart,
	MdRemoveCircleOutline,
} from 'react-icons/md';
import {
	BsFillCameraFill,
	BsBatteryFull,
	BsDisplay,
	BsSmartwatch,
} from 'react-icons/bs';
import { BiChip, BiMedal } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import { FiHardDrive, FiWatch, FiTruck } from 'react-icons/fi';
import { IoColorFilterOutline } from 'react-icons/io5';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
	addToCart,
	removeFromCart,
	addWishList,
	removeWishList,
} from '../Redux/Actions/Users';
import SpecsList from '../Components/SpecsList';

const ProductPage = () => {
	const { id } = useParams();
	//states
	const products = useSelector(state => state.Products);
	const authedUser = useSelector(state => state.AuthedUser);
	const Users = useSelector(state => state.Users);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const allPhones = products.smartPhones;
	const allLaptops = products.laptops;
	const allWatches = products.smartWatches;
	const allProduct = { ...allPhones, ...allLaptops, ...allWatches };
	const user = Users[authedUser];
	const wishlist = user ? user.wishlist : null;
	const cart = user ? user.cart : null;
	const cartID = cart && cart.map(elm => elm.id);

	const PID = allProduct[id];

	const checkPhone =
		allPhones && PID ? Object.keys(allPhones).some(id => id === PID.id) : null;
	const checkLaptop =
		allLaptops && PID
			? Object.keys(allLaptops).some(id => id === PID.id)
			: null;
	const checkWatches =
		allWatches && PID
			? Object.keys(allWatches).some(id => id === PID.id)
			: null;

	if (!PID) {
		return <div>Not Found</div>;
	}
	const handleAddToCart = () => {
		if (!authedUser) {
			alert('You Must Login');
			navigate('/login');
		} else {
			alert('add to Cart Successful');
			dispatch(addToCart(authedUser, PID.id, PID.qty));
		}
	};
	const handleRemoveCart = () => {
		if (authedUser && cart && cart.length > 0) {
			dispatch(removeFromCart(authedUser, PID.id));
			alert('Remove from Cart Successful');
		}
	};
	//
	const HandleaddToWishlist = () => {
		if (!authedUser) {
			alert('You Must Login');
			navigate('/login');
		} else {
			alert('add to wish list Successful');
			dispatch(addWishList(authedUser, PID.id));
		}
	};
	const handleRemoveWishlist = () => {
		if (authedUser && wishlist && wishlist.length > 0) {
			dispatch(removeWishList(authedUser, PID.id));
			alert('Remove from wishList Successful');
		}
	};

	return (
		<Container>
			<FirstBox>
				<Left>
					<Image src={PID.coverImg} />
				</Left>
				<Center>
					<Title>{PID.name}</Title>
					<Specs>
						{checkPhone && (
							<>
								<SpecsList
									Icon={MdMemory}
									details={'Memory Ram In GB'}
									info={`${PID.ram} Gb`}
								/>
								<SpecsList
									Icon={MdSdStorage}
									details={'Internal Memory GB'}
									info={`${PID.storage} GB`}
								/>
								<SpecsList
									Icon={MdOutlinePhonelinkSetup}
									details={'Operating System'}
									info={`${PID.os}`}
								/>
								<SpecsList
									Icon={BiChip}
									details={'Processor CPU'}
									info={`${PID.chip}`}
								/>
								<SpecsList
									Icon={MdOutlineSmartScreen}
									details={'Display Size In Inches'}
									info={`${PID.display} Inches`}
								/>
								<SpecsList
									Icon={MdOutlineHighQuality}
									details={'Resolution'}
									info={`${PID.resolution} Pixels`}
								/>
								<SpecsList
									Icon={BsFillCameraFill}
									details={'Rear Camera'}
									info={`${PID.mainCamera} MP`}
								/>
								<SpecsList
									Icon={MdOutlineCameraFront}
									details={'Selfie Camera'}
									info={`${PID.selfieCamera} MP`}
								/>
								<SpecsList
									Icon={BsBatteryFull}
									details={'Battery'}
									info={`Li-Ion ${PID.battery} mAh`}
								/>
								<SpecsList
									Icon={IoColorFilterOutline}
									details={'Color'}
									info={`${PID.color}`}
								/>
							</>
						)}
						{checkLaptop && (
							<>
								<SpecsList
									Icon={MdMemory}
									details={'Memory Ram In GB'}
									info={`${PID.ram} Gb`}
								/>
								<SpecsList
									Icon={FiHardDrive}
									details={'Hard Disk Capacity'}
									info={`${PID.storage} ssd`}
								/>
								<SpecsList
									Icon={MdLaptopMac}
									details={'Operating System'}
									info={`${PID.os}`}
								/>
								<SpecsList
									Icon={BiChip}
									details={'Processor Type'}
									info={`${PID.chip}`}
								/>
								<SpecsList
									Icon={BsDisplay}
									details={'Screen Size'}
									info={`${PID.display} Inches`}
								/>
								<SpecsList
									Icon={MdOutlineHighQuality}
									details={'Resolution'}
									info={`${PID.resolution} Pixels`}
								/>
								<SpecsList
									Icon={IoColorFilterOutline}
									details={'Color'}
									info={`${PID.color}`}
								/>
							</>
						)}
						{checkWatches && (
							<>
								<SpecsList
									Icon={FiWatch}
									details={'Display'}
									info={`${PID.display} Inches`}
								/>
								<SpecsList
									Icon={BsSmartwatch}
									details={'Screen Size'}
									info={`${PID.screenSize} MM`}
								/>
								<SpecsList
									Icon={MdOutlineFullscreen}
									details={'Resolution'}
									info={`${PID.resolution} Pixels`}
								/>
								<SpecsList
									Icon={BiChip}
									details={'Operating System'}
									info={`${PID.os}`}
								/>
								<SpecsList
									Icon={BiChip}
									details={'Chip'}
									info={`${PID.chip}`}
								/>
								<SpecsList
									Icon={MdSdStorage}
									details={'Internal Memory GB'}
									info={`${PID.storage} GB`}
								/>
								<SpecsList
									Icon={BsBatteryFull}
									details={'Battery'}
									info={`Li-Ion ${PID.battery} mAh`}
								/>
								<SpecsList
									Icon={IoColorFilterOutline}
									details={'Color'}
									info={`${PID.color}`}
								/>
							</>
						)}
					</Specs>
				</Center>
				<Right>
					<Price>{`EGP ${PID.price.toLocaleString('en-us')}`}</Price>
					<CartContainr>
						{cart && cartID.includes(PID.id) ? (
							<CartBtn onClick={handleRemoveCart}>
								<MdRemoveCircleOutline color="red" />
								Remove From Cart
							</CartBtn>
						) : (
							<CartBtn onClick={handleAddToCart}>
								<MdShoppingCart color="black" />
								Add To Cart
							</CartBtn>
						)}

						{wishlist && wishlist.includes(PID.id) ? (
							<WishList onClick={handleRemoveWishlist}>
								<BsHeartFill className="activeHeart" />
								Remove from Wishlist
							</WishList>
						) : (
							<WishList onClick={HandleaddToWishlist}>
								<BsHeartFill />
								Add To Wishlist
							</WishList>
						)}
						<Variety>
							<AiOutlineDollarCircle />
							Money Back Guarantee
						</Variety>
						<Variety>
							<BiMedal />
							Secure Payment
						</Variety>
						<Variety>
							<FiTruck />
							Fast Delivery
						</Variety>
						<Payment src="https://www.rayashop.com/media/images/footer/payment-methods.png" />
					</CartContainr>
				</Right>
			</FirstBox>
		</Container>
	);
};

export default ProductPage;
