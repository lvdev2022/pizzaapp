import styles from '../styles/Cart.module.css';
import Image from 'next/image';


const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.left}>
                    <table className={styles.table}>
                        <tr className={styles.trTitle}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>     
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image 
                                        src="/img/pizza.png" 
                                        alt="" 
                                        layout="fill" 
                                        objectFit="cover"/>
                                </div>
                             </td>
                             <td>
                                <span className={styles.name}>CORALZO</span>
                             </td>
                             <td>
                                <span className={styles.extras}>
                                    Double Ingredients, spicy sauce
                                </span>
                             </td>
                             <td>
                                <span className={styles.price}>$ 12.99</span>
                             </td>
                             <td>
                                <span className={styles.quantity}>1</span>
                             </td>
                             <td>
                                <span className={styles.total}>$ 12.99</span>
                             </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image 
                                        src="/img/pizza.png" 
                                        alt="" 
                                        layout="fill" 
                                        objectFit="cover"/>
                                </div>
                             </td>
                             <td>
                                <span className={styles.name}>CORALZO</span>
                             </td>
                             <td>
                                <span className={styles.extras}>
                                    Double Ingredients, spicy sauce
                                </span>
                             </td>
                             <td>
                                <span className={styles.price}>$ 12.99</span>
                             </td>
                             <td>
                                <span className={styles.quantity}>1</span>
                             </td>
                             <td>
                                <span className={styles.total}>$ 12.99</span>
                             </td>
                        </tr>        
                    </table>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal: </b> $79.99
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount: </b> $79.99
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total: </b> $79.99
                    </div>
                    <button className={styles.button}>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart; 