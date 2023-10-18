import Image from "next/image";
import clock from "../img/clock.svg";
import phone from "../img/phone.svg";
import email from "../img/email.svg";

import loja from "../img/loja-fisica.svg";

import visa from "../img/visa.svg";
import american from "../img/american.svg";
import pix from "../img/pix.svg";
import master from "../img/master.svg";

import apple from "../img/appstore.svg";
import play from "../img/playstore.svg";

import slide from "../img/slide.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="contact">
          <div className="box-footer-contact">
            <Image width={40} height={40} src={clock} alt="" />
            <p>
              Atendimento Loja Virtual <br />
              Segunda a sexta 8h às 12h e das 14h às 18h
            </p>
          </div>
          <div className="box-footer-contact">
            <Image width={40} height={40} src={phone} alt="" />
            <p>(12)345678910</p>
          </div>
          <div className="box-footer-contact">
            <Image width={40} height={40} src={email} alt="" />
            <p>lorem@ipslum.com</p>
          </div>
        </div>
        <div className="contact">
          <div className="box-footer-contact">
            <Image width={40} height={40} src={loja} alt="" />
            <p>Loja física</p>
          </div>
          <div className="box-footer-contact p-horarios">
            <p>Segunda a sexta das 9h as 19h Sábado das 9h as 13h</p>
          </div>
        </div>
        <div className="footer-true">
          <div className="top-footer-true">
            <div className="box1">
              <h2>Institucional</h2>
              <ul>
                <li>Quem Somos?</li>
                <li>Localização</li>
                <li>Nossas lojas</li>
              </ul>
            </div>
            <div className="box2">
              <h2>Dúvidas</h2>
              <ul>
                <li>Quem Somos?</li>
                <li>Localização</li>
                <li>Nossas lojas</li>
              </ul>
            </div>
            <div className="box3">
              <h2>Ajuda</h2>
              <ul>
                <li>Quem Somos?</li>
                <li>Localização</li>
                <li>Nossas lojas</li>
              </ul>
            </div>
            <div className="box4">
              <h2>Pagamento</h2>
              <ul>
                <li>
                  <Image width={60} height={60} src={visa} alt="" />
                </li>
                <li>
                  <Image width={60} height={60} src={american} alt="" />
                </li>
                <li>
                  <Image width={60} height={60} src={pix} alt="" />
                </li>
                <li>
                  <Image width={60} height={60} src={master} alt="" />
                </li>
              </ul>
            </div>
            <div className="box5">
              <h2>Baixe os Aplicativos</h2>
              <ul>
                <li>
                  <Image width={60} height={60} src={apple} alt="" />
                </li>
                <li>
                  <Image width={60} height={60} src={play} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <h2>Ecommerce</h2>
          <p>Ecommerce feito apenas para usos educacionais</p>
          <a href="#header" className="btn-footer-tohome">
            <Image width={40} height={40} src={slide} alt="" />
          </a>
        </div>
      </footer>
    </>
  );
}
