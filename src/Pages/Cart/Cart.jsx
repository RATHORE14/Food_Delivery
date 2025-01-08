import React, { useContext } from "react";
import { StoreContext } from "../../Context/storeContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate()

  return (
    <div className="cart mt-10">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-6 items-center text-gray-600  text-sm mt-5">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item  grid grid-cols-6 items-center text-black text-sm font-medium mt-2 ">
                  <img className="w-10" src={item.image} alt="" />
                  <p >{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cross cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className="mt-2 " />
              </>
            );
          }
        })}
      </div>
      <div className="cat-bottom mt-8 flex flex-col justify-between gap-5 sm:gap-20 sm:flex-row">
        <div className="cart-total flex-1 flex-col ">
          <h2 className="font-semibold text-sm ">Cart Total</h2>
          
          <div className="cart-total-details flex justify-between text-[#555]">
            <p className="text-sm mt-5">Subtotal</p>
            <p className="mt-5">${getTotalCartAmount()}</p>
          </div>
          <hr className="mt-1" />
          <div className="cart-total-details  flex justify-between text-[#555]">
            <p className="text-sm">Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details  flex justify-between text-[#555]">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0 :  getTotalCartAmount()+2}</b>
          </div>
        <button onClick={()=>navigate('/order')} className="border-none text-white bg-red-500 w-44 text-sm mt-5 cursor-pointer p-2 rounded-md">Proceed To CheckOut</button>
        </div>
      <div className="cart-promocode">
        <div>
          <p className="text-sm font-medium mt-5">If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input className="border-2 border-gray-500 mr-1 px-2 py-1 rounded-md" type="text" placeholder="promo code" name="" id="" />
            <button className="border-none text-white bg-red-500 px-5 text-sm mt-5 cursor-pointer p-2 rounded-md">Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
