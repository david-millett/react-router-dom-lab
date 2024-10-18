import { useState } from "react"
import { useNavigate } from "react-router-dom"

const initialState = {
    boxholder: '',
    boxSize: 'Small'
}

const MailboxForm = (props) => {

    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBox(formData)
        console.log(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }

    return (
        <>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="boxholder">Enter a Boxholder:</label>
                <input
                    type="text"
                    name="boxholder"
                    id="boxholder"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="boxSize">Select a Box Size:</label>
                <select name="boxSize" id="boxSize" onChange={handleChange}>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>

    )
}

export default MailboxForm