---
title: "DVbot"
image: "/images/dvbot/dvbot-thumbnail.png"
image_alt: "dvbot robot"
description: "Véhicule sous marin téléguidé"
date: "2018-08-01"
date_interval: "Sept. 2018 - Oct. 2018"
images:
  [
    {
      "original": "/images/dvbot/dvbot-controller.png",
      "originalAlt": "dvbot controller",
    },
    {
      "original": "/images/dvbot/dvbot-robot.png",
      "originalAlt": "dvbot robot",
    },
    { "original": "/images/dvbot/dvbot-ros.png", "originalAlt": "dvbot ros" },
  ]
techs: ["C++", "Robot Operating System"]
---

## Contexte

Le projet DVbot a été développé dans le cadre d'un stage de 2ème année.
L'entreprise CISCREA (La Farlède) m'a fait confiance pour changer le protocole de communication de son robot sous-marin.
Le but du projet était de transformer le protocole de communication du robot DVbot pour le passer sous ROS (Robot Operating System). Le passage de ce robot sous ROS permet à l'entreprise de débugger et ajouter de nouveaux modules facilement sur leurs solution.

## Solution

Le protocole de communication a été changé entièrement sous ROS. Le robot peut être contrôlé via une manette de jeu grâce à un des modules développé sous ROS.
