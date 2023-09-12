
import './Bottle.css'

const Bottle = ({bottle, addToCart}) => {

    const {name, img, price} = bottle;

    return (
        <div className="bottle">

            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <h2>Price : {price}</h2>
            <button onClick={() => addToCart(bottle)} >Purchase</button>
            
        </div>
    );
};

export default Bottle;