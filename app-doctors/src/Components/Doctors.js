import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import Accordion from "react-bootstrap/Accordion";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Appointnemt from "./Appointnemt";

export default function Doctors() {
  const [itemsDoctors, setItemsDoctors] = useState([]);

  useEffect(() => {
    axios
      .get(`https://642cde0e66a20ec9ce8ff0c4.mockapi.io/Doctors`)
      .then((response) => {
        console.log(response.data);
        setItemsDoctors(response.data);
      });
  }, []);
  return (
    <div className="doctors">
      <h2>قائمة الأطباء</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">الاسم</th>
              <th scope="col">التخصص</th>
              <th scope="col">التقييم</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {itemsDoctors
              .sort((a, b) => b.review - a.review)
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.position}</td>
                  <td>{item.review}</td>
                  <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <td>المواعيد</td>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Appointnemt />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
