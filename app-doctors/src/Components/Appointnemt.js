import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import $ from "jquery";

export default function Appointnemt() {
  const [itemsAppointment, setItemsAppointment] = useState([]);
  useEffect(() => {
    axios
      .get(`https://642cde0e66a20ec9ce8ff0c4.mockapi.io/Appointments`)
      .then((response) => {
        console.log(response.data);
        setItemsAppointment(response.data);
      });
  }, []);
  let all_tr = $("tr");
  $('td Button[id="buttonSeleced"]').on("click", function () {
    all_tr.removeClass("selected");
    $(this).closest("tr").addClass("selected");
  });
  return (
    <div>
      <Table className="tableAppointment">
        <thead></thead>
        <tbody>
          {itemsAppointment.map((item) => (
            <tr key={item.id}>
              <td>{item.day}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>
                <Button
                  type="button"
                  id="buttonSeleced"
                  className="allButtons"
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
