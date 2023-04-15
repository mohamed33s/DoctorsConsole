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
            <tr className="color-font">
              <th scope="col">الطبيب</th>
              <th scope="col">التخصص</th>
              <th scope="col">التقييم</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {itemsDoctors
              .sort((a, b) => b.review - a.review)
              .map((item) => (
                <tr className="color-font" key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.position}</td>
                  <td>{item.review}</td>
                  <Accordion defaultActiveKey={["1"]} alwaysOpen>
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
