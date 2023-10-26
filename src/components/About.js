import React, { Component } from "react";
import "./About.css";
export class About extends Component {
  render() {
    return (
      <div className="about-wrap" id="about">
        <div className="left">
          <label className="title">Chi siamo</label>
          <p className="description">
            "The Barber" a Como è un salone di barbieri che rappresenta il
            perfetto equilibrio tra tradizione e innovazione. Fondata negli anni
            '70 da Giovanni, questa iconica destinazione è stata un punto di
            riferimento per stile e cura dei capelli. Nel corso degli anni, il
            salone ha saputo evolversi, abbracciando le nuove tendenze senza
            dimenticare la sua eredità classica. La missione di "The Barber" è
            fornire ai clienti esperienze straordinarie basate sulla qualità,
            l'attenzione ai dettagli e la tradizione del mestiere. Oggi, il
            salone continua a essere un faro di eccellenza a Como, unendo
            passato e futuro per soddisfare i clienti in modo impeccabile.
          </p>
          <label className="title">Orari</label>
          <table className="tabella-orari">
            <tr>
              <td>Tuesday</td>
              <td>11:30 AM – 2:30 PM, 6:30 PM – 12 AM</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>11:30 AM – 2:30 PM, 6:30 PM – 12 AM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>11:30 AM – 2:30 PM, 6:30 PM – 12 AM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>11:30 AM – 2:30 PM, 6:30 PM – 12 AM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>11:30 AM – 2:30 PM, 6:30 PM – 12 AM</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>11:30 AM – 2:30 PM, 6:30 PM – 12 AM</td>
            </tr>
            <tr>
              <td>Monday</td>
              <td>11:30 AM – 2:30 PM, 6:30 PM – 12 AM</td>
            </tr>
          </table>
          <label className="title">Contatti</label>
          <p className="description">Telefono 031.387465</p>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default About;
