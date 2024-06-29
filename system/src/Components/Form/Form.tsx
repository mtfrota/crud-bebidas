import React, { useState } from 'react';
interface FormProps {
  onAdd: (beverage: { type: string; brand: string; price: number }) => void;
}

const Form: React.FC<FormProps> = ({ onAdd }) => {
  const [type, setType] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [price, setPrice] = useState<number | ''>('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (type.trim() !== '' && brand.trim() !== '' && price !== '') {
      onAdd({ type: type.trim(), brand: brand.trim(), price: parseFloat(price.toString()) });
      setType('');
      setBrand('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group mb-3">
        <select
          className="form-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Selecione o tipo de bebida...</option>
          <option value="Cerveja">Cerveja</option>
          <option value="Vinho">Vinho</option>
          <option value="Vodka">Vodka</option>
          <option value="Whisky">Whisky</option>
          <option value="Rum">Rum</option>
          <option value="Gin">Gin</option>
          <option value="Tequila">Tequila</option>
          <option value="Licor">Licor</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Marca da bebida..."
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Preço da bebida..."
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
};

export default Form;
