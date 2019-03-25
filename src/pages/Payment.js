import React from 'react';
import styled from 'styled-components';

function Payment({ onSubmit }) {
  const chooseCovenant = () => {
    onSubmit('convenio');
  };

  return (
    <StyledWrapper>
      <h1 className="pageTitle">Dr. Luiz Bandim</h1>
      <h2>Escolha a forma de pagamento</h2>

      <ul className="selectList">
        <li>
          <button onClick={() => onSubmit('dinheiro')}>
            <h3>Dinheiro</h3>
            <p>A ser pago no local de atendimento</p>
            <span className="price">R$ 300</span>
          </button>
        </li>

        <li>
          <button onClick={() => onSubmit('cheque')}>
            <h3>Cheque</h3>
            <p>A ser pago no local de atendimento</p>
            <span className="price">R$ 300</span>
          </button>
        </li>

        <li>
          <button onClick={() => onSubmit('debito')}>
            <h3>Cartão de Débito</h3>
            <p>A ser pago no local de atendimento</p>
            <span className="price">R$ 300</span>
          </button>
        </li>

        <li>
          <button onClick={chooseCovenant}>
            <h3>Convênio</h3>
            <p>A ser pago no local de atendimento</p>
            <span className="price">R$ 300</span>
          </button>
        </li>
      </ul>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  color: red;

  h2 {
    color: #d40000;
    font-size: 1em;
    text-transform: uppercase;
    padding: 0 0.5em;
    border-bottom: 1px solid #ddd;
    line-height: 3em;
    margin: 0;
  }

  .selectList {
    padding: 0;
    margin: 0;

    li {
      list-style: none;

      button {
        position: relative;
        background: transparent;
        border: none;
        width: 100%;
        padding: 1em 6em 1em 1em;
        border-bottom: 1px solid #ddd;
        text-align: left;
        cursor: pointer;

        h3 {
          text-transform: uppercase;
          margin: 0;
          font-size: 1.25em;
          line-height: 1.6em;
        }
        p {
          color: #444;
          margin: 0;
          line-height: 2;
        }
        .price {
          position: absolute;
          right: 1em;
          top: 2em;
          line-height: 2;
          padding: 0 1em;
          background: #4cb906;
          border-radius: 0.5em;
          color: white;
        }
      }
    }
  }
`;

export default Payment;
