import React, { Component } from "react";
import "./Products.css";
export class Products extends Component {
  render() {
    return (
      <div className="about-wrap" id="products">
        <div className="right-products"></div>
        <div className="left-products">
          <label className="title">
            Prodotti di Qualità
          </label>
          <p className="description">
            Presso "The Barber", abbiamo selezionato con cura una gamma di
            prodotti di altissima qualità per garantire che ogni cliente ottenga
            il massimo risultato e un look straordinario. Dalla cura dei capelli
            alla barba, ci prendiamo cura di ogni dettaglio con i seguenti
            prodotti:
          </p>

          <label className="sub-title">Shampoo e Balsamo di Lusso</label>
          <p className="description">
            Utilizziamo esclusivamente shampoo e balsamo di lusso per lavare e
            condizionare i capelli dei nostri clienti. Questi prodotti nutrono e
            rinvigoriscono i capelli, lasciandoli morbidi e lucenti.
          </p>

          <label className="sub-title">Prodotti per lo Styling</label>

          <p className="description">
            Per creare acconciature impeccabili, utilizziamo prodotti per lo
            styling di alta qualità. Dalle cere per capelli alle lacche
            fissanti, questi prodotti mantengono il tuo look inalterato per
            tutto il giorno.
          </p>
          <label className="sub-title">Oli e Balsami per la Barba</label>

          <p className="description">
            {" "}
            Per la cura della barba, offriamo una selezione di oli e balsami per
            la barba che idratano e ammorbidiscono i peli, mantenendo la barba
            in condizioni ottimali.
          </p>
          <label className="sub-title">Prodotti per la Rasatura</label>

          <p className="description">
            Per una rasatura impeccabile, utilizziamo creme da barba e dopobarba
            di alta qualità che proteggono la pelle e prevengono irritazioni.
          </p>
          <label className="sub-title">Profumi e Colonie</label>

          <p className="description">
            Completiamo l'esperienza con una vasta selezione di profumi e
            colonie di lusso per garantire che ogni cliente esca dal nostro
            salone con un profumo irresistibile.
          </p>
        </div>
      </div>
    );
  }
}

export default Products;
