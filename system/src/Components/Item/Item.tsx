import React from 'react';

interface Beverage {
  type: string;
  name: string;
  brand: string;
  price: number;
}

interface ItemProps {
  beverage: Beverage;
  onDelete: () => void;
}

const Item: React.FC<ItemProps> = ({ beverage, onDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{beverage.type}:</strong> {beverage.name} ({beverage.brand}) - R${beverage.price.toFixed(2)}
      </div>
      <button className="btn btn-danger" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Item;
