import ProgramTemplate from '../components/ProgramTemplate'
import { dataScienceProgram } from '../data/programContent/dataScience'

export default function DataScience() {
  return <ProgramTemplate program={dataScienceProgram} path="/programs/data-science" />
}
