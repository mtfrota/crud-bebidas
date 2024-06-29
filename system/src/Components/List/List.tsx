import React from 'react';
import Item from '../Item/Item';

interface Beverage {
  type: string;
  name: string;
  brand: string;
  price: number;
}

interface ListProps {
  beverages: Beverage[];
  setBeverages: React.Dispatch<React.SetStateAction<Beverage[]>>;
}

const List: React.FC<ListProps> = ({ beverages, setBeverages }) => {
  const handleDelete = (index: number) => {
    const updatedBeverages = beverages.filter((_, idx) => idx !== index);
    setBeverages(updatedBeverages);
  };

  return (
    <div>
      <ul className="list-group">
        {beverages.map((beverage, index) => (
          <Item key={index} beverage={beverage} onDelete={() => handleDelete(index)} />
        ))}
      </ul>
    </div>
  );
};

export default List;
