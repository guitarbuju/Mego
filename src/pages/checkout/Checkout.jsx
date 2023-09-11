import Card from "../../components/card/Card";
import { useSelectedToyStore } from "../../store";
import styles from "./checkout.module.css";
import SliderPage from "../../components/sliderPage/SliderPage";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cart = useSelectedToyStore((state) => state.cart);
  const removeFromCart = useSelectedToyStore((state) => state.removeFromCart);

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  const cartSum = cart.reduce((sum, toy) => sum + toy.price, 0);

  // const [wannaPay, setWannaPay] = useState(false);

  return (
    <div className={cart.length > 0 ? styles.container: styles.container2}>
      {cart.length > 0 && (
        <div>
          <ul className={styles.list}>
            {cart.map((toy, index) => (
              <li className={styles.Card} key={index}>
                <Card title={toy.title} img={toy.img} price={toy.price} />
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className={'btn btn-secondary'}
                >
                  Remove it!
                </button>
              </li>
            ))}
          </ul>
          <div>
            <h1
              className={`text-white-700 text-lg font-bold mb-2 ${styles.total}`}
            >
              your Total is {cartSum} $
            </h1>
          </div>
        </div>
      
       
      )}

      {cart.length > 0 ? (
        <motion.div
          className={styles.sliderpage}
          initial={{ x: "-100%" }} // Initial position (off the screen to the left)
          animate={{ x: 0 }} // Final position (on the screen)
          transition={{ duration: 0.5 }} // Animation duration
        >
          <SliderPage sum={cartSum} />
        </motion.div>
      ) : (
        <div className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Hey No toys!!!!!!!</span>
          <Link to='/'>
            <button className="btn btn-wide btn-outline">Go Back Home</button>
          </Link>
          
        </div>
      )} 

    
    </div>
  );
};

export default Checkout;
