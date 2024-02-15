import React, { useState, useEffect } from "react";
import Nav from "../../components/navbar/nav";
import style from "./style.css";
import { useLocation, useNavigate } from 'react-router-dom';
import sverokModel from "../../models/sverokModel";
import eventModel from "../../models/eventModel";
import userModel from "../../models/userModel";
const Event = () => {
    const location = useLocation();
    const seat = location.state?.seat; // Use optional chaining operator
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [nickname, setNickname] = useState("");
    const [ssn, setSsn] = useState("");

    useEffect(() => {
        // Redirect to "/book" if the seat is not available
        if (!seat) {
            navigate('/book');
        }
    }, [seat]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission here

        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if (!validateEmail(email)) {
            alert("Felaktig e-postadress");
            return;
        }
        // Är personen medlem?
        // let response = await sverokModel.createMember({ firstname, lastname, email, phone, address, zip, city, nickname, ssn })
        let response = { request_result: "success" }
        if (response.name === "An Internal Error Has Occurred." || response.request_result === "success") {
            // Om ja eller nej, skapa i databas och boka plats
            let now = new Date();
            let date = now.toLocaleDateString('sv-SE');
            console.log(seat.row, seat.nr);
            let body = {
                "member": {
                    "firstname": firstname,
                    "lastname": lastname,
                    "email": email,
                    "phone1": phone,
                    "address": address,
                    "zip_code": zip,
                    "city": city,
                    "member_nick": nickname,
                    "street": address,
                    "renewed": date.toString(),
                },
                "seat": {
                    "row": seat.row,
                    "seat": seat.nr,
                }
            };
            // await userModel.createMember({ firstname, lastname, email, phone, address, zip, city, nickname, });
            await userModel.createUser(body);
            await eventModel.bookSeat({ seat });
        } else {
            // Om något inte stämmer, visa felmeddelande  
            alert("Kontrollera personuppgifterna och försök igen.");
        }

        console.log({ firstname, lastname, email, phone, address, zip, city, nickname, ssn });
    };

    return (
        <div>
            <Nav />
            <div className="form-container">
                <h1>Bokning av plats {seat.row}{seat.nr}</h1>
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