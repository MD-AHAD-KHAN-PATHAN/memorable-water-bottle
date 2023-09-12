import { useEffect } from "react";
import { useState } from "react";
import './Bottles.css';
import Bottle from "../Bottle/Bottle";
import { addToLS, getStoreCart, removeFromLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [purchaseBottles, setPurchaseBottle] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(() => {
        
        if(bottles.length) {
            const storeCart = getStoreCart();
            const saveCart = [];
            for(const id of storeCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle) {
                    saveCart.push(bottle);
                }
            }
            setPurchaseBottle(saveCart);
        }
        
    },[bottles])

    const addToCart = (bottle) => {
        
        const newBottle = [...purchaseBottles, bottle];
        setPurchaseBottle(newBottle);
        addToLS(bottle.id);

    }

    const removeFromCart = (id) => {

        const remainingCart = purchaseBottles.filter(bottle => bottle.id !== id)
        setPurchaseBottle(remainingCart);

        removeFromLS(id)
    }


    return (
        <div>
            <h2>Bottles : {bottles.length} </h2>

            <div className="bottle-container">

                {
                    bottles.map(bottle => <Bottle bottle={bottle} key={bottle.id} addToCart={addToCart}></Bottle>)
                }

            </div>

            <Cart purchaseBottles={purchaseBottles} removeFromCart={removeFromCart}></Cart>

           
        </div>
    );
};

export default Bottles;