import './contact.css'

function Contact() {
    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <p>Feel free to reach out to us!</p>
            <form>
                <label>Name:</label>
                <br />
                <input type="text" name="name" />
                <br />
                <label>Email: </label>
                <br />
                <input type="email" name="email" />
                <br /> 
                <label >Message: </label>
                <br />
                <textarea name="message"></textarea>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;         