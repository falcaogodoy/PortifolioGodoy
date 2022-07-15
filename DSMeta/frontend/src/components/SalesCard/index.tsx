import NotificationButton from "../NotificationButton";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());



  return (
    <div className="principal-card">
      <h2 className="vendas-titulo">Vendas</h2>
      <div>
        <div className="form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div>
        <table className="tabela-vendas">
          <thead>
            <tr>
              <th className="show-responsi992"> Id</th>
              <th className="data-show-responsi"> Data</th>
              <th>Vendedor</th>
              <th className="show-responsi992"> Visitas</th>
              <th className="show-responsi992"> Vendas</th>
              <th> Total </th>
              <th>Notificar </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show-responsi992"> #01</td>
              <td className="data-show-responsi"> 08.08.08</td>
              <td>Nome01</td>
              <td className="show-responsi992"> 12</td>
              <td className="show-responsi992"> 02</td>
              <td> VALOR $ 01 </td>
              <td>
                <div className="btn-red-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-responsi992"> #02</td>
              <td className="data-show-responsi"> 08.08.08</td>
              <td>Nome02</td>
              <td className="show-responsi992"> 02</td>
              <td className="show-responsi992"> 02</td>
              <td> VALOR $ 01 </td>
              <td>
                <div className="btn-red-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-responsi992"> #03</td>
              <td className="data-show-responsi"> 08.08.08</td>
              <td>Nome03</td>
              <td className="show-responsi992"> 02</td>
              <td className="show-responsi992"> 02</td>
              <td> VALOR $ 01 </td>
              <td>
                <div className="btn-red-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
