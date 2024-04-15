import currencyFormatter from "../helpers/currencyFormatter";

const ItemRow = ({ item }) => {
  return (
    <tr>
      <td>{item.description}</td>
      <td>{item.quantity}</td>
      <td>{currencyFormatter.format(item.price)}</td>
    </tr>
  );
};

export default ItemRow;
