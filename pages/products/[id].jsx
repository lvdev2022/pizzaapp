import { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Products = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img:"/img/pizza.png",
        name: "CAMPANHA",
        price:[19.9, 23.9, 27.9],
        description: "Molho de tomate, mussarela, presunto, ovos, cebola, azeitonas, orégano e azeite de oliva.",
    };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} alt="" layout="fill" objectFit="contain"/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
            <p className={styles.desc}> {pizza.description} </p>
            <h3 className={styles.choose}> Choose the size</h3>
            <div className={styles.sizes}>
                <div className={styles.size}>
                    <Image src="/img/size.png" alt="" layout="fill"/>
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size}>
                    <Image src="/img/size.png" alt="" layout="fill"/>
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size}>
                    <Image src="/img/size.png" alt="" layout="fill"/>
                    <span className={styles.number}>Large</span>
                </div>
                </div>
        </div>

    </div>
  )
}

export default Products