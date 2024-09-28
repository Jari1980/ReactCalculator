import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <>
      <div>
        <h1>Calculator in React</h1>
        <br />
        <br />
        <table class="table-sm table-borderless">
          <div>
            <div style={{backgroundColor:"gray"}}>
            <span></span>
            </div>
            <tbody>
              <tr>
                <td>
                  <button class="btn btn-primary" type="button">
                    7
                  </button>
                </td>
                <td>
                  <button class="btn btn-primary" type="button">
                    8
                  </button>
                </td>
                <td>
                  <button class="btn btn-primary" type="button">
                    9
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger" type="button" style={{width:40}}>
                    C
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button class="btn btn-primary" type="button">
                    4
                  </button>
                </td>
                <td>
                  <button class="btn btn-primary" type="button">
                    5
                  </button>
                </td>
                <td>
                  <button class="btn btn-primary" type="button">
                    6
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger" type="button" style={{width:40}}>
                    &#60;-
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button class="btn btn-primary" type="button">
                    1
                  </button>
                </td>
                <td>
                  <button class="btn btn-primary" type="button">
                    2
                  </button>
                </td>
                <td>
                  <button class="btn btn-primary" type="button">
                    3
                  </button>
                </td>
                <td>
                  <button class="btn btn-info" type="button" style={{width:40}}>
                    /
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button class="btn btn-info" type="button">
                    +
                  </button>
                </td>
                <td>
                  <button class="btn btn-primary" type="button">
                    0
                  </button>
                </td>
                <td>
                  <button class="btn btn-info" type="button">
                    -
                  </button>
                </td>
                <td>
                  <button class="btn btn-info" type="button" style={{width:40}}>
                    *
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <button class="btn btn-primary" type="button">
                    .
                  </button>
                </td>
                <td>
                  <button class="btn btn-success" type="button" style={{width:40}}>
                    =
                  </button>
                </td>
              </tr>
            </tbody>
          </div>
        </table>
      </div>
    </>
  );
}
