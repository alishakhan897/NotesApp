// Write your code here
import {List} from './styledComponents'

const NotesItem = props => {
  const {NotesDetails} = props
  const {titlename, note} = NotesDetails

  return (
    <List>
      <h1>{titlename}</h1>
      <p>{note}</p>
    </List>
  )
}

export default NotesItem
