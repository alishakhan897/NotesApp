// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NotesItem from '../NoteItem'

import {
  MainContainer,
  SmallContainer,
  Card,
  Heading,
  Input,
  TextArea,
  ButtonDiv,
  Button,
  Card2,
} from './styledComponents'

const Notes = () => {
  const [listing, isEmptyList] = useState([])
  const [titlename, isTitle] = useState('')
  const [note, isNotes] = useState('')

  const titleChange = event => {
    isTitle(event.target.value)
  }

  const noteChange = event => {
    const inputValue = event.target.value.trim()
    if (inputValue.trim() !== '') {
      isNotes(inputValue)
    }
  }

  const AddButton = event => {
    event.preventDefault()
    const newData = {
      id: uuidv4(),
      titlename,
      note,
    }

    isEmptyList(prev => [...prev, newData])
    isTitle('') // Reset titlename state to an empty string
    isNotes('')
  }

  console.log(listing)
  return (
    <MainContainer>
      <SmallContainer>
        <Heading>Notes</Heading>
        <Card onSubmit={AddButton}>
          <Input placeholder="Title" onChange={titleChange} value={titlename} />
          <TextArea
            placeholder="Take a Note.."
            onChange={noteChange}
            value={note}
          />

          <ButtonDiv>
            <Button type="submit">Add</Button>
          </ButtonDiv>
        </Card>
        <Card2>
          {listing.length > 0 ? (
            listing.map(each => <NotesItem key={each.id} NotesDetails={each} />)
          ) : (
            <>
              <img
                src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
                alt="notes empty"
              />
              <h1>No Notes Yet</h1>
              <p>Notes You add will appear here</p>
            </>
          )}
        </Card2>
      </SmallContainer>
    </MainContainer>
  )
}

export default Notes
