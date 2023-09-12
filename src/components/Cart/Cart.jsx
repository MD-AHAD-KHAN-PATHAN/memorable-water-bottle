import './Cart.css'

const Cart = ({purchaseBottles, removeFromCart}) => {

    return (
        <div>
            <h2>Purchase Bottle : {purchaseBottles.length}</h2>

            <div className='bottle-container'>
                {
                    purchaseBottles.map(bottle => 
                        <>
                            <div className="bottle">
                                <img src={bottle.img} alt="" />
                                <h3>Name : {bottle.name} </h3>
                                <h2>Price :  {bottle.price} </h2>
                                <button onClick={() => removeFromCart(bottle.id)}>Remove</button>
                            </div>
                        </>
                     )
                }
            </div>
        </div>
    );
};

export default Cart;