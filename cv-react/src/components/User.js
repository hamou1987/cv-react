import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" className="user__avatar" alt="Mohamed Ben Radhia" />
      <h1 className="user__name">Mohamed Ben Radhia</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 27 rue des jardins 7000 bizerte
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+21624709302">24709302</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:johndoe@gmail.com">Medbenradhia87@gmail.com</a>
        </p>
        <p className="user__info">
          <EventIcon /> Date de naissance: 15 aout 1987
        </p>
        <p className="user__info">
          <LocationOnIcon /> Lieu de naissance: lune
        </p>
      </div>
    </div>
  )
}

export default User
