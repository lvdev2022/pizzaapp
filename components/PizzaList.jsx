import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN </h1>
        <p className={styles.desc}>   
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Tempore expedita aliquid molestiae consequuntur ullam velit fugiat 
        minus similique neque sunt laudantium, quasi veniam delectus assumenda
        magnam atque incidunt repellendus obcaecati.
        </p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
    </div>
  )
}

export default PizzaList