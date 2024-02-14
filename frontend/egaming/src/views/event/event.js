import React, { useState } from "react";
import Nav from "../../components/navbar/nav";
import style from "./style.css";
const Event = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [nickname, setNickname] = useState("");
    const [ssn, setSsn] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log(firstname, lastname, email, phone, address, zip, city, nickname, ssn);
    };

    return (
        <div>
            <Nav />
            <div>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="left">
                        <div>
                            <label>Förnamn:</label>
                            <input name="name" type="text" value={firstname} onChange={e => setFirstname(e.target.value)} placeholder="Skriv ditt förnamn" required />
                        </div>
                        <div>
                            <label>Efternamn:</label>
                            <input name="lastname" type="text" value={lastname} onChange={e => setLastname(e.target.value)} placeholder="Skriv ditt efternamn" required />
                        </div>
                        <div>
                            <label>E-post:</label>
                            <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Skriv din e-post" required />
                        </div>
                        <div>
                            <label>Telefon:</label>
                            <input name="phone" type="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Skriv ditt telefonnummer" required />
                        </div>
                        <div>
                            <label>Adress:</label>
                            <input name="street-address" type="address" value={address} onChange={e => setAddress(e.target.value)} placeholder="Skriv din adress" required />
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <label>Postnummer:</label>
                            <input name="postal-code" type="postal-code" value={zip} onChange={e => setZip(e.target.value)} placeholder="Skriv ditt postnummer" required />
                        </div>
                        <div>
                            <label>Stad:</label>
                            <input name="city" type="city" value={city} onChange={e => setCity(e.target.value)} placeholder="Skriv din stad" required />
                        </div>
                        <div>
                            <label>Nickname:</label>
                            <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} placeholder="Skriv ditt smeknamn" required />
                        </div>
                        <div>
                            <label>Personnummer:</label>
                            <input name="name" type="ssn" value={ssn} onChange={e => setSsn(e.target.value)} placeholder="ÅÅÅÅMMDDXXXX" required="required" />
                        </div>
                        <div>
                            <label className="submit-label">Send</label>
                            <input className="submit" type="submit" name="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Event;