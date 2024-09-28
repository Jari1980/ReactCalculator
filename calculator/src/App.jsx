import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [finalValue, setFinalValue] = useState("")
  const [operand, setOperand] = useState("");

  const handleClickNum = (event) => {
    console.log("Clicked " + event.target.value)
    const newNum = value.concat(event.target.value)
    setValue(newNum)
  }

  const handlePluss = () => {
    setFinalValue(value)
    setOperand("Pluss")
    setValue("")
  }

  const handleMinus = () => {
    console.log("Minus clicked: ")
    setOperand("Minus")
    setFinalValue(value)
    setValue("")
  }

  const handleMultiplication = () => {
    setFinalValue(value)
    setOperand("Muliply")
    setValue("")
  }

  const handleDivision = () => {
    setFinalValue(value)
    setOperand("Divide")
    setValue("")
  }

  const handleBack = () => {
    setValue(value.substring(0, value.length - 1))
  }

  const handleReset = () => {
    setValue("")
    setOperand("")
    setFinalValue("")
  }

  const handleResult = () => {
    if(operand == "Pluss"){
      setFinalValue((parseFloat(finalValue) + parseFloat(value)))
      setOperand("")
      setValue("")
    }
    if(operand == "Minus"){
      setFinalValue((parseFloat(finalValue) - parseFloat(value)))
      setOperand("")
      setValue("")
    }
    if(operand == "Muliply"){
      setFinalValue((parseFloat(finalValue) * parseFloat(value)))
      setOperand("")
      setValue("")
    }
    if(operand == "Divide"){
      setFinalValue((parseFloat(finalValue) / parseFloat(value)))
      setOperand("")
      setValue("")
    }
  }

  return (
    <>
      <div>
        <h1>Calculator in React</h1>
        <br />
        <br />
        <caption style={{backgroundColor:"gray", width:178, height:40}}>
            <b>{finalValue}</b>
            </caption>
            <caption style={{backgroundColor:"lightgrey", width:178, height:40}}>
            <b>{operand}</b>
            </caption>
        <caption style={{backgroundColor:"gray", width:178, height:40}}>
            <b>{value}</b>
            </caption>
        <table className="table-sm table-borderless" style={{backgroundColor:"lightgrey"}}>
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
                  <button className="btn btn-danger" type="button" style={{width:40}} onClick={handleReset}>
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
                  <button className="btn btn-danger" type="button" style={{width:40}} onClick={handleBack}>
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
                  <button className="btn btn-info" type="button" style={{width:40}} onClick={handleDivision}>
                    /
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-info" type="button" onClick={handlePluss}>
                    +
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary" value="0" type="button" onClick={handleClickNum}>
                    0
                  </button>
                </td>
                <td>
                  <button className="btn btn-info" type="button" onClick={handleMinus}>
                    -
                  </button>
                </td>
                <td>
                  <button className="btn btn-info" type="button" style={{width:40}} onClick={handleMultiplication}>
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
                  <button className="btn btn-success" type="button" style={{width:40}} onClick={handleResult}>
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
