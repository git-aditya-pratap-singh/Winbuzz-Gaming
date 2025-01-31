import PropTypes from "prop-types";
import "../../../assets/scss/tables.scss";

const Table = ({ tableHeader }) => {
  return (
    <>
      <div className="_tableContainer">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {
                tableHeader.map((item, index) => {
                  return <th key={index}>{item}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>No Data to Display</td>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
};

Table.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.string).isRequired, 
};
export default Table;