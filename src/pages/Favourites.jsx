import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import ProductGrid from "../components/ProductGrid";
import { useCart } from "../CartContext";
export default function Favourites() {
  const { favourites } = useCart();
  return (
    <main>
      <PageBanner title="Favourites" />
      <div className="container-xl py-5">
        {favourites.length ? <ProductGrid list={favourites} /> : (
          <div className="text-center py-5"><h4 className="fw-medium">No favourites yet</h4>
            <p className="muted">Tap the heart on any product to save it here.</p>
            <Link to="/shop" className="btn btn-gold">Browse the shop</Link></div>
        )}
      </div>
    </main>
  );
}
