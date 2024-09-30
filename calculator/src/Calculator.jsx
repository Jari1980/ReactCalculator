import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [operand, setOperand] = useState("");
  const [display, setDisplay] = useState("");

  const handleClickNum = (event) => {
    if(operand == ""){
      setFinalValue("")
    }
    const newNum = value.concat(event.target.value)
    setValue(newNum)
    setDisplay(newNum)
  }

  const handlePluss = () => {
    setFinalValue(value)
    setOperand("Pluss")
    setValue("")
    setDisplay("+")
  }

  const handleMinus = () => {
    setOperand("Minus")
    setFinalValue(value)
    setValue("")
    setDisplay("-")
  }

  const handleMultiplication = () => {
    setFinalValue(value)
    setOperand("Muliply")
    setValue("")
    setDisplay("*")
  }

  const handleDivision = () => {
    setFinalValue(value)
    setOperand("Divide")
    setValue("")
    setDisplay("/")
  }

  const handleBack = () => {
    setValue(value.substring(0, value.length - 1))
    setDisplay(value.substring(0, value.length - 1))
  }

  const handleReset = () => {
    setValue("")
    setOperand("")
    setFinalValue("")
    setDisplay("")
  }

  const handleResult = () => {
    if(operand == "Pluss"){
      setFinalValue((parseFloat(finalValue) + parseFloat(value)))
      setOperand("")
      setValue("")
      setDisplay((parseFloat(finalValue) + parseFloat(value)))
    }
    if(operand == "Minus"){
      setFinalValue((parseFloat(finalValue) - parseFloat(value)))
      setOperand("")
      setValue("")
      setDisplay((parseFloat(finalValue) - parseFloat(value)))
    }
    if(operand == "Muliply"){
      setFinalValue((parseFloat(finalValue) * parseFloat(value)))
      setOperand("")
      setValue("")
      setDisplay((parseFloat(finalValue) * parseFloat(value)))
    }
    if(operand == "Divide"){
      setFinalValue((parseFloat(finalValue) / parseFloat(value)))
      setOperand("")
      setValue("")
      setDisplay((parseFloat(finalValue) / parseFloat(value)))
    }
  }

  return (
    <>
        <div style={{position:"absolute", backgroundColor:"lightgray", left:"30%", borderStyle: "solid", borderRadius:15}}>
          
        <div style={{backgroundColor:"gray", width:178, height:35, borderStyle: "solid", paddingLeft:10, borderRadius:15}}>
            <b>{display}</b>
            </div>
            <br></br>
        <table className="table-sm table-borderless" style={{backgroundColor:"lightgrey", borderRadius:15}}>
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
