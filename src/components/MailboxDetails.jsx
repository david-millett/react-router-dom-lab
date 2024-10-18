import { useParams } from "react-router-dom"

const MailboxDetails = (props) => {
    console.log(props)

    const { mailboxId } = useParams()
    const singleMailbox = props.mailboxes.find((box) => box._id === Number(mailboxId))



    return (
        <>
        {singleMailbox
        // If there is a mailbox
        ? <>
            <h1>Mailbox {singleMailbox._id}</h1>
            <h2>Details</h2>
            <p>Boxholder: {singleMailbox.boxholder}</p>
            <p>Box Size: {singleMailbox.boxSize}</p>
        </>
        // If there is no mailbox
        : <h1>Mailbox not found!</h1>
        }        
        </>
        

        
    )
}

export default MailboxDetails