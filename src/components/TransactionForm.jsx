import { useState } from "react";
import { useCreateTransactionMutation } from "../api/apiSlice";

export const TransactionForm = () => {
  const [createTransaction] = useCreateTransactionMutation();

  const [formData, setFormData] = useState({
    descripcion: "",
    monto: 0,
    fecha: "",
    tipo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("submit");
    // console.log(formData);

    createTransaction({
      descripcion: formData.descripcion,
      monto: formData.monto,
      fecha: formData.fecha,
      tipo: formData.tipo,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="form_input"
          name="descripcion"
          placeholder="Descripcion"
          value={formData.descripcion}
          onChange={(e) =>
            setFormData({
              ...formData,
              descripcion: e.target.value,
            })
          }
        />
      </div>
      <div>
        <input
          type="number"
          min={0}
          className="form_input"
          name="monto"
          value={formData.monto}
          onChange={(e) =>
            setFormData({
              ...formData,
              monto: e.target.value,
            })
          }
        />
      </div>

      <div>
        <select
          name="tipo"
          id="tipo"
          value={formData.tipo}
          className="form_input"
          onChange={(e) =>
            setFormData({
              ...formData,
              tipo: e.target.value,
            })
          }
        >
          <option value="gasto">Gasto</option>
          <option value="ingreso">Ingreso</option>
        </select>
      </div>

      <div>
        <input
          type="date"
          className="form_input"
          name="fecha"
          value={formData.fecha}
          onChange={(e) =>
            setFormData({
              ...formData,
              fecha: e.target.value,
            })
          }
        />
      </div>

      <div>
        <button className="btn btn_add">Add Transaction</button>
      </div>
    </form>
  );
};
