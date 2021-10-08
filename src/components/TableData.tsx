import { Table } from 'react-bootstrap'
import { Brief } from '../types/brief.type'
interface Props {
  data: Brief
}

const TableData = ({ data }: Props) => {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>confirmed</th>
          <th>recovered</th>
          <th>deaths</th>
          <th>fatality rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{new Intl.NumberFormat('de-DE').format(data.confirmed)}</td>
          <td>{new Intl.NumberFormat('de-DE').format(data.recovered)}</td>
          <td>{new Intl.NumberFormat('de-DE').format(data.deaths)}</td>
          <td>{((data.deaths / data.confirmed) * 100).toFixed(2)} %</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableData
