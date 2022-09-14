import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}># 123456</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>322 Calle Crystal Ball</span>
              </td>
              <td>
                <span className={styles.total}>$79.99</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src={"/img/paid.png"} alt="" width={30} height={30} />
            <span>Payment</span>
            <div className={styles.checkIcon}>
              <Image
                className={styles.checkIcon}
                src={"/img/checked.png"}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src={"/img/delivered.png"} alt="" width={30} height={30} />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
            <Image
              className={styles.checkedIcon}
              src={"/img/checked.png"}
              alt=""
              width={20}
              height={20}
            />
            </div>
          </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
