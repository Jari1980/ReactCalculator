import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [operand, setOperand] = useState("");

  const handleClickNum = (event) => {
    console.log("Clicked " + event.target.value)
    const newNum = value.concat(event.target.value)
    setValue(newNum)
    console.log("Value: " + value)
  }

  return (
    <>
      <div>
        <h1>Calculator in React</h1>
        <br />
        <br />
        <table className="table-sm table-borderless">
            <caption style={{backgroundColor:"gray", position:top}}>
            {value}
            </caption>
            <tbody>
              <tr>
                <td>
                  <button className="btn btn-primary" value="7" type="button" onClick={handleClickNum}>
                    7
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary" value="8" type="button" onClick={handleClickNum}>
                    8
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary" value="9" type="button" onClick={handleClickNum}>
                    9
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" type="button" style={{width:40}}>
                    C
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-primary" value="4" type="button" onClick={handleClickNum}>
                    4
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary" value="5" type="button" onClick={handleClickNum}>
                    5
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary" value="6" type="button" onClick={handleClickNum}>
                    6
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" type="button" style={{width:40}}>
                    &#60;-
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-primary" value="1" type="button" onClick={handleClickNum}>
                    1
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary" value="2" type="button" onClick={handleClickNum}>
                    2
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary" value="3" type="button" onClick={handleClickNum}>
                    3
                  </button>
                </td>
                <td>
                  <button className="btn btn-info" type="button" style={{width:40}}>
                    /
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-info" type="button">
                    +
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary" value="0" type="button" onClick={handleClickNum}>
                    0
                  </button>
                </td>
                <td>
                  <button className="btn btn-info" type="button">
                    -
                  </button>
                </td>
                <td>
                  <button className="btn btn-info" type="button" style={{width:40}}>
                    *
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <button className="btn btn-primary" value="." type="button" onClick={handleClickNum}>
                    .
                  </button>
                </td>
                <td>
                  <button className="btn btn-success" type="button" style={{width:40}}>
                    =
                  </button>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </>
  );
}
