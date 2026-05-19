import ProgramTemplate from '../components/ProgramTemplate'
import { genAiProgram } from '../data/programContent/genAi'

export default function GenAI() {
  return <ProgramTemplate program={genAiProgram} path="/programs/gen-ai" />
}
