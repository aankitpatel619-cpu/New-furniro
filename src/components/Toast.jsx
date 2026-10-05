import { useCart } from "../CartContext";
export default function Toast() {
  const { toast } = useCart();
  return toast ? <div className="toast-c" role="status">{toast}</div> : null;
}
