import { useState } from "react";
import "./App.css";
import Profile from "./assets/img/no-avatar.jpg";

function App() {
  const [formEdit, setFormEdit] = useState(false);
  const [data, setData] = useState({
    aspek_penilaian_1: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_2: {
      mahasiswa_1: 2,
      mahasiswa_2: 2,
      mahasiswa_3: 2,
      mahasiswa_4: 2,
      mahasiswa_5: 2,
      mahasiswa_6: 2,
      mahasiswa_7: 2,
      mahasiswa_8: 2,
      mahasiswa_9: 2,
      mahasiswa_10: 2,
    },
    aspek_penilaian_3: {
      mahasiswa_1: 6,
      mahasiswa_2: 6,
      mahasiswa_3: 6,
      mahasiswa_4: 6,
      mahasiswa_5: 6,
      mahasiswa_6: 6,
      mahasiswa_7: 6,
      mahasiswa_8: 6,
      mahasiswa_9: 6,
      mahasiswa_10: 6,
    },
    aspek_penilaian_4: {
      mahasiswa_1: 10,
      mahasiswa_2: 10,
      mahasiswa_3: 10,
      mahasiswa_4: 10,
      mahasiswa_5: 10,
      mahasiswa_6: 10,
      mahasiswa_7: 10,
      mahasiswa_8: 10,
      mahasiswa_9: 10,
      mahasiswa_10: 10,
    },
  });

  const selectValue = (type, index) => {
    if (type === "aspek1") {
      const result = Object.values(data.aspek_penilaian_1);
      return result[Number(index)];
    } else if (type === "aspek2") {
      const result = Object.values(data.aspek_penilaian_2);
      return result[Number(index)];
    } else if (type === "aspek3") {
      const result = Object.values(data.aspek_penilaian_3);
      return result[Number(index)];
    } else {
      const result = Object.values(data.aspek_penilaian_4);
      return result[Number(index)];
    }
  };

  const selectName = (type, index) => {
    if (type === "aspek1") {
      const result = Object.keys(data.aspek_penilaian_1);
      return type + "_" + result[Number(index)];
    } else if (type === "aspek2") {
      const result = Object.keys(data.aspek_penilaian_2);
      return type + "_" + result[Number(index)];
    } else if (type === "aspek3") {
      const result = Object.keys(data.aspek_penilaian_3);
      return type + "_" + result[Number(index)];
    } else {
      const result = Object.keys(data.aspek_penilaian_4);
      return type + "_" + result[Number(index)];
    }
  };

  const handleChange = (e) => {
    // console.log(e);
    let getValue = Number(e.target.value);
    let name = e.target.name;
    let mahasiswaName = name.slice(7, name.length);
    let aspekName = name.includes("aspek1")
      ? "aspek_penilaian_1"
      : name.includes("aspek2")
      ? "aspek_penilaian_2"
      : name.includes("aspek3")
      ? "aspek_penilaian_3"
      : "aspek_penilaian_4";

    setData({
      ...data,
      [aspekName]: {
        ...data[aspekName],
        [mahasiswaName]: getValue,
      },
    });
  };

  return (
    <div className="App">
      <h2>Aplikasi Penilaian Mahasiswa</h2>
      <div>
        {formEdit ? (
          <table>
            <thead>
              <tr>
                <td></td>
                <td className="aspek-title">Aspek Penilaian 1</td>
                <td className="aspek-title">Aspek Penilaian 2</td>
                <td className="aspek-title">Aspek Penilaian 3</td>
                <td className="aspek-title">Aspek Penilaian 4</td>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data.aspek_penilaian_1).map((el, index) => {
                return (
                  <tr key={index} className="mahasiswa">
                    <td>
                      <img
                        src={Profile}
                        width={20}
                        className="avatar"
                        alt="avatar"
                      />
                      <span>Mahasiswa {index + 1}</span>
                    </td>
                    <td>
                      <select
                        value={selectValue("aspek1", index)}
                        name={selectName("aspek1", index)}
                        onChange={handleChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </td>
                    <td>
                      <select
                        value={selectValue("aspek2", index)}
                        name={selectName("aspek2", index)}
                        onChange={handleChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </td>
                    <td>
                      <select
                        value={selectValue("aspek3", index)}
                        name={selectName("aspek3", index)}
                        onChange={handleChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </td>
                    <td>
                      <select
                        value={selectValue("aspek4", index)}
                        name={selectName("aspek4", index)}
                        onChange={handleChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tr>
              <td colSpan={5}>
                <button className="simpan-btn" onClick={() => setFormEdit(false)}>Simpan</button>
              </td>
            </tr>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                <td></td>
                <td className="aspek-title">Aspek Penilaian 1</td>
                <td className="aspek-title">Aspek Penilaian 2</td>
                <td className="aspek-title">Aspek Penilaian 3</td>
                <td className="aspek-title">Aspek Penilaian 4</td>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data.aspek_penilaian_1).map((el, index) => {
                return (
                  <tr key={index} className="mahasiswa">
                    <td>
                      <img
                        src={Profile}
                        width={20}
                        className="avatar"
                        alt="avatar"
                      />
                      <span>Mahasiswa {index + 1}</span>
                    </td>
                    <td>{selectValue("aspek1", index)}</td>
                    <td>{selectValue("aspek2", index)}</td>
                    <td>{selectValue("aspek3", index)}</td>
                    <td>{selectValue("aspek4", index)}</td>
                  </tr>
                );
              })}
            </tbody>
            <tr>
              <td colSpan={5}>
                <button
                  className="simpan-btn"
                  onClick={() => setFormEdit(true)}
                >
                  Edit
                </button>
              </td>
            </tr>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
