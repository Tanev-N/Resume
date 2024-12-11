import { useState } from "react";
import meImg from "./assets/Me.jpg";

import githubPath from "./assets/github.svg";
import telegramPath from "./assets/telegram.svg";
import emailPath from "./assets/email.svg";
import telephonePath from "./assets/telephone.svg";

import burgerPath from "./assets/burger.svg";

import Contact from "./components/Contact/Contact";
import Point from "./components/Point/Point";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

import nginx from "./assets/nginx.svg";
import boostrap from "./assets/bootstrap.svg";
import ts from "./assets/ts.svg";
import nodeJS from "./assets/nodejs.svg";
import vite from "./assets/vite.svg";
import reactJS from "./assets/react.svg";
// import redux from "./assets/redux.svg";
import sass from "./assets/sass.svg";

import gigamail from "./assets/Gigamail.png";
import django from "./assets/django1.png";

import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  const StackData = [
    {
      path: vite,
      title: "Vite",
    },
    {
      path: ts,
      title: "TypeScript",
    },
    {
      path: reactJS,
      title: "React",
    },
    // {
    //   path: redux,
    //   title: "Redux",
    // },
    {
      path: boostrap,
      title: "Boostrap",
    },
    {
      path: nodeJS,
      title: "NodeJS",
    },
    {
      path: sass,
      title: "Sass",
    },
    {
      path: nginx,
      title: "Nginx",
    },
  ];

  const PortfolioData = [
    {
      path: gigamail,
      title: "Giga-mail.ru",
      link: "https://github.com/frontend-park-mail-ru/2024_2_Gigachads"
    },
    {
      path: django,
      title: "StackOverflow",
      link: "https://github.com/Tanev-N/BMSTU-VK-Education/tree/main/web/askme_tanev"
    },
  ];

  const NavigationData = [
    { mark: "#about", text: "О себе", isSecondary: false },
    { mark: "#stack", text: "Стек", isSecondary: false },
    { mark: "#portfolio", text: "Портфолио", isSecondary: false },
    { mark: "#contacts", text: "Мои контакты", isSecondary: true },
  ];

  const ContactsData = [
    { Path: githubPath, text: "Tanev-N", href: "https://github.com/Tanev-N" },
    { Path: telegramPath, text: "@Teralai", href: "https://t.me/Teralai" },
    {
      Path: telephonePath,
      text: "+7(988)158-43-04",
      href: "tel:+79881584304",
    },
    {
      Path: emailPath,
      text: "kolya_tanev@mail.ru",
      href: "mailto:kolya_tanev@mail.ru",
    },
  ];

  const PointsData = [
    {
      id: "about",
      titleNode: (
        <>
          <div className="title__main">
            <p className="title__main-secondary">Привет !</p>
            <p className="title__main-primary">Я Николай Танев</p>
            <p className="title__main-primary">Фронтенд разрабочик</p>
          </div>
          <div className="title__description">
            <p className="title__description-primary">
              <p>
                Я — студент 3 курса бакалавриата МГТУ им. Н.Э. Баумана,
                направление «Информатика и вычислительная техника».
              </p>

              <p>Имею опыт разработки фронтенд-приложений, включая:</p>
              <ul>
                <li>почтовый клиент;</li>
                <li>аналог платформы StackOverflow.</li>
              </ul>

              <p>
                Экспериментировал с созданием собственного аналога React,
                используя архитектуру Feature-Sliced Design (FSD).
              </p>

              <p>
                Стремлюсь к постоянному развитию в профессии, которая приносит
                мне настоящее удовольствие.
              </p>
            </p>
          </div>
        </>
      ),
      children: <img className="content__MainAvatar" src={meImg} />,
    },
    {
      id: "stack",
      titleNode: <>Стек</>,
      children: (
        <>
          {StackData.map((card, index) => (
            <Card
              name="stackCard"
              key={index}
              path={card.path}
              title={card.title}
            />
          ))}
        </>
      ),
    },
    {
      id: "portfolio",
      titleNode: <>Портфолио</>,
      children: (
        <>
          {PortfolioData.map((card, index) => (
            <Card name="portfolio"  key={index} path={card.path} title={card.title} onClick= {() => window.open(card.link) } />
          ))}
        </>
      ),
    },
    {
      id: "contacts",
      titleNode: <>Мои контакты</>,
      children: (
        <>
          {ContactsData.map((contact, index) => (
            <Contact
              href={contact.href}
              key={index}
              Path={contact.Path}
              text={contact.text}
            />
          ))}
        </>
      ),
    },
  ];

  return (
    <>
      <header className="AppHeader">
        <div className="AppHeader__burger" onClick={toggleMenu}>
          <img src={burgerPath}></img>
        </div>
        <div className={`AppHeader__navigator ${isMenuOpen ? "show" : ""}`}>
          {NavigationData.map((navigatorEl) => (
            <Button
              isSecondary={navigatorEl.isSecondary}
              onClick={handleNavClick}
              mark={navigatorEl.mark}
              text={navigatorEl.text}
            ></Button>
          ))}
        </div>
      </header>
      <main className="AppMain">
        {PointsData.map((point, index) => (
          <Point key={index} id={point.id} titleNode={point.titleNode}>
            {point.children}
          </Point>
        ))}
      </main>
      <footer className="AppFooter"></footer>
    </>
  );
}

export default App;
