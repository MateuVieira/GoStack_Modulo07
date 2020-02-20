import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-20-masculino/02/NQQ-0375-002/NQQ-0375-002_zoom1.jpg?ims=120x"
                alt="tenis"
              />
            </td>
            <td>
              <strong>Tênis lgl</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button" >
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button" >
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$259,80</strong>
            </td>
            <td>
              <button type="button" >
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button" >Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1580,40</strong>
        </Total>
      </footer>
    </Container>
  );
}