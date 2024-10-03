import product from "./product_detail.json";
import styles from "./dashboard.module.css";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  const [cart, setCart] = useState([...product]);
  const [empty, setEmpty] = useState(true)
  const clearCart = () => {
    setCart([]);
  };
  // const [quantity, setQuantity] = useState(1);
  let total = 0;
  cart.forEach((props) => {
    let totalAmount = parseInt(props.amount);
    total += totalAmount * parseInt(props.quantity);;
  });

  // console.log(total);
  return (
    <main>
      <nav>
        <div className={styles.nav}>
          <h4>UseReducer</h4>
          <div className={styles.nav_container}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              // stroke-width="0"
              viewBox="0 0 576 490"
              className={styles.cart_icon}
              height="1.5rem"
              width="1.5rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path>
            </svg>

            <div className={styles.total_cart}>
              <p>{cart.length}</p>
            </div>
          </div>
        </div>
      </nav>

      <section>
        <header>
          <h2>This is Your Bag</h2>
        </header>

        <div className={styles.main_container}>
          {cart.map((props, index) => {
            // console.log(obj);
            const removeBtn = (index) => {
              const cartCopy = [...cart];
              cartCopy.splice(index, 1);
              // console.log(cartCopy);
              setCart(cartCopy);
            };

            const increaseQuantity = (index) => {
              const cartCopy = [...cart];
              cartCopy[index].quantity++;
              console.log(cartCopy);
              setCart(cartCopy);
            };

            const decreaseQuantity = (index) => {
              const cartCopy = [...cart];
              if (cartCopy[index].quantity > 1) {
                cartCopy[index].quantity--;
                console.log(cartCopy);
                setCart(cartCopy);
              } else {
                removeBtn();
              }
            };

            return (
              <article key={`cart_01${index}`}>
                <img src={props.link} alt="image" />
                <div className={styles.details}>
                  <h5>{props.name}</h5>
                  <p>${props.amount}</p>
                  <button
                    onClick={() => {
                      removeBtn(index);
                    }}
                  >
                    remove
                  </button>
                </div>

                <div className={styles.counter}>
                  <button
                    onClick={() => {
                      increaseQuantity(index);
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      className="amount-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                    </svg>
                  </button>
                  <span>{props.quantity}</span>
                  <button
                    onClick={() => {
                      decreaseQuantity(index);
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      className="amount-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <hr />

        <footer>
          <div className={styles.total}>
            <h5>Total </h5>
            <span>${total}</span>
          </div>
          <button onClick={() => {clearCart()}}>Clear Cart</button>
        </footer>
      </section>
    </main>
  );
};

export default Dashboard;
