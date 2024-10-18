import { Link } from "react-router-dom"

const MailboxList = (props) => {
    return(
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailboxes.map((box) => {
                    return (
                        <li key={box._id} className="mail-box">
                            <Link to={`/mailboxes/${box._id}`}>
                                <p>Mailbox {box._id}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default MailboxList