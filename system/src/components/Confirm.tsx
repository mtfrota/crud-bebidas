import React, { useState } from 'react';
import './Confirm.css';

interface Beverage {
  type: string;
  name: string;
  brand: string;
  price: number;
}

interface Props {
  beverages: Beverage[];
}

const Confirm: React.FC<Props> = ({ beverages }) => {
  const [showModal, setShowModal] = useState(false);
  const [ageInput, setAgeInput] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Função para calcular a soma dos preços das bebidas
  const calculateTotalPrice = () => {
    return beverages.reduce((total, beverage) => total + beverage.price, 0);
  };

  // Função para lidar com a confirmação do pedido
  const handleConfirm = () => {
    setShowModal(true);
  };

  // Função para verificar a idade e mostrar a mensagem apropriada
  const handleAgeVerification = () => {
    const age = parseInt(ageInput, 10);
    if (age >= 18) {
      setConfirmationMessage('Pedido confirmado com sucesso. Tenha um ótimo fim de semana! 🍻🎉');
    } else {
      setConfirmationMessage('Vá tirar catinga do mijo. 🤨🤨');
      // Fechar a página após 3 segundos
      setTimeout(() => {
        window.close();
      }, 3000);
    }
    setShowModal(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2>Bebidas Selecionadas:</h2>
        <ul>
          {beverages.map((beverage, index) => (
            <li key={index}>
              {beverage.name} - R${' '}
              {new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(beverage.price)}
            </li>
          ))}
        </ul>
        <h3>Total: R$ {new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(calculateTotalPrice())}</h3>
        <button className="btn btn-primary btn-lg mt-3" onClick={handleConfirm}>
          Confirmar Pedido
        </button>

        {/* Modal para confirmar a idade */}
        {showModal && (
          <div className="modal" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirmação de Idade</h5>
                </div>
                <div className="modal-body">
                  <p>Por favor, informe sua idade para continuar:</p>
                  <input
                    type="number"
                    className="form-control"
                    value={ageInput}
                    onChange={(e) => setAgeInput(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={handleAgeVerification}>
                    Confirmar
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mensagem de confirmação */}
        {confirmationMessage && (
          <div className="alert alert-info mt-3" role="alert">
            {confirmationMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Confirm;

