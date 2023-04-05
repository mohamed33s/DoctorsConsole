import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Green = { background: "#dff2e2" };
const Red = { background: "#f7c4c4" };
export default function Appointnemt() {
  const [itemsAppointment, setItemsAppointment] = useState([]);
  const [color, setColor] = useState(Green);
  useEffect(() => {
    axios
      .get(`https://642cde0e66a20ec9ce8ff0c4.mockapi.io/Appointments`)
      .then((response) => {
        console.log(response.data);
        setItemsAppointment(response.data);
      });
  }, []);
  return (
    <div>
      <Table style={color} className="tableAppointment">
        <thead></thead>
        <tbody>
          {itemsAppointment.map((item) => (
            <tr key={item.id}>
              <td>{item.day}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>
                <Button
                  onClick={() => setColor(Red)}
                  variant="outline-success"
                >
                  احجز
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
