import { useSelectedToyStore } from "../../store";
import styles from "./detail.module.css";
import { Link } from "react-router-dom";

const Detail = () => {
  const toy = useSelectedToyStore((state) => state.selectedToy);
  const addToCart = useSelectedToyStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(toy);
    window.my_modal_1.showModal()
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgwrapper}>
        <div>
          <h1>{toy.title}</h1>
          <img src={toy.img} />
        </div>
        <div className={styles.description}>
          <p>{toy.description}</p>
          <h2>Get it right now for only. {toy.price} $</h2>
          <button onClick={handleAddToCart} className={`btn btn-warning text-white ${styles.button1}`}>
            Add to Cart
          </button>
          <Link to="/toys">
            <button className={`btn btn-secondary text-white ${styles.button2}`}>I want More Toys</button>
          </Link>
        </div>
      </div>
      <div>
      

<dialog id="my_modal_1" className="modal">
  <form method="dialog" className="modal-box bg-purple-500">
    <h1 className="font-bold text-5xl text-white" >¡¡Added to your Cart!!</h1>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-warning text-white">Close</button>
      <Link to='/checkout'>
        <button className="btn btn-secondary text-white">Checkout</button>
      </Link>
      
    </div>
  </form>
</dialog>
      </div>
    </div>
  );
};

export default Detail;
