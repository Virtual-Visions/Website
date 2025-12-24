"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "de" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  de: {
    // Navigation
    "nav.overview": "Überblick",
    "nav.services": "Leistungen",
    "nav.projects": "Projekte",
    "nav.vision": "Vision",
    "nav.about": "Über uns",

    // Footer
    "footer.description":
      "Innovative VR/AR Lösungen für Ihr Unternehmen. Wir entwickeln maßgeschneiderte immersive Erlebnisse.",
    "footer.sections.title": "Bereiche",
    "footer.social.title": "Soziale Medien",
    "footer.contact.title": "Kontakt",
    "footer.rights": "alle Rechte vorbehalten",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",

    // Contact
    "contact.title": "KONTAKT",
    "contact.subtitle":
      "Haben Sie Fragen oder möchten Sie mehr über unsere Leistungen erfahren? Kontaktieren Sie uns noch heute.",
    "contact.write": "SCHREIBEN SIE UNS",
    "contact.email.description":
      "Haben Sie Fragen zu unseren VR-Lösungen oder möchten Sie ein Projekt besprechen? Senden Sie uns eine E-Mail und wir melden uns schnellstmöglich bei Ihnen.",
    "contact.address": "Adresse",
    "contact.phone": "Telefon",
    "contact.email": "E-Mail",
    "contact.maps": "In Google Maps öffnen",

    // Projects
    "projects.title": "UNSERE PROJEKTE",
    "projects.subtitle": "Entdecken Sie unsere innovativen VR/AR-Lösungen und immersiven Erlebnisse.",
    "projects.back": "Zurück zur Übersicht",
    "projects.back.home": "Zurück zur Startseite",
    "projects.filter.all": "Alle",
    "projects.discover": "Projekt entdecken",
    "projects.cta.title": "Haben Sie ein Projekt im Kopf?",
    "projects.cta.desc": "Lassen Sie uns gemeinsam Ihre Vision in eine immersive Realität verwandeln.",
    "projects.cta.button": "Projekt besprechen",
    "project.description": "PROJEKTBESCHREIBUNG",
    "project.trailer": "TRAILER",
    "project.gallery": "GALERIE",
    "project.technical": "TECHNISCHE DETAILS",

    // Project descriptions
    "memoria.description":
      "Ein immersives VR-Erlebnis, das Erinnerungen und Emotionen durch interaktive Umgebungen erforscht.",
    "cnc.description": "Eine VR-Simulation für das Training an CNC-Maschinen, die realistische Bedienung vermittelt.",
    "mixmaster.description":
      "Eine virtuelle DJ-Umgebung zum Mischen und Produzieren von Musik in einer immersiven 3D-Welt.",
    "physics.description.short":
      "Eine innovative Benutzeroberfläche, die physikalische Gesetze nutzt, um intuitive Interaktionen zu ermöglichen.",
    "grabbing.description.short":
      "Ein VR-Framework für natürliche Greifinteraktionen, das realistische Haptik und Physik simuliert.",
    "walking.description.short":
      "Eine Fortbewegungslösung für VR, die natürliche Bewegungen in virtuellen Umgebungen ermöglicht.",

    // Video
    "video.not.supported": "Ihr Browser unterstützt das Video-Tag nicht.",

    // CNC Machine
    "cnc.title": "CNC MACHINE",
    "cnc.subtitle":
      "Eine VR-Simulation für das Training an CNC-Maschinen, die realistische Bedienung und Sicherheitsaspekte vermittelt.",
    "cnc.description.p1":
      "Die CNC Machine VR-Simulation bietet eine sichere und kosteneffektive Möglichkeit, das Bedienen von CNC-Maschinen zu erlernen. Durch realistische 3D-Modelle und physikbasierte Interaktionen können Benutzer verschiedene Bearbeitungsverfahren üben, ohne teure Maschinen oder Materialien zu benötigen.",
    "cnc.description.p2":
      "Die Simulation umfasst verschiedene Trainingsmodule, von grundlegenden Maschinenbedienungen bis hin zu komplexen Bearbeitungsaufgaben. Benutzer lernen Sicherheitsprotokoll, Werkzeugwechsel, Programmierung und Qualitätskontrolle in einer risikofreien Umgebung.",
    "cnc.description.p3":
      "Durch die Integration in reale Ausbildungsprogramme hat sich die VR-Schulung als unverzichtbarer Bestandteil der CNC-Ausbildung etabliert und verbessert sowohl die Sicherheit als auch die Effizienz des Lernprozesses.",
    "cnc.case.study": "CASE STUDY",
    "cnc.case.study.subtitle": "CNC-Fräsen-Schulung in VR: Pflichtmodul für reale Maschinenkurse",
    "cnc.client": "Kunde: Pioniergarage Salzburg",
    "cnc.industry": "Branche: Technische Weiterbildung / Werkstattbetrieb",
    "cnc.use.case": "Use Case: Schulung für CNC-Fräsen-Nutzung",
    "cnc.initial.situation": "Ausgangssituation",
    "cnc.initial.text":
      "Die Pioniergarage Salzburg bildet technisch interessierte Teilnehmer im Umgang mit CNC-Fräsen aus. Die traditionelle Einschulung an den Maschinen war zeitintensiv, ressourcenaufwendig und mit Risiken für Anfänger verbunden. Ziel war es, eine effektive Vorqualifikation zu schaffen, um den realen Intensivkurs sicherer und effizienter zu gestalten.",
    "cnc.solution": "Lösung mit Virtual Visions",
    "cnc.solution.text":
      "Virtual Visions entwickelte eine immersive VR-Schulung, die den vollständigen CNC-Fräsprozess realitätsnah abbildet – von der Softwarebedienung bis zur Maschinenvorbereitung.",
    "cnc.key.components": "KERNINHALTE DER SCHULUNG",
    "cnc.interactive.tutorials": "Interaktive Tutorials",
    "cnc.interactive.tutorials.desc": "Interaktive Tutorials zur Festlegung der Fräswege",
    "cnc.knowledge.verification": "Wissensüberprüfung",
    "cnc.knowledge.verification.desc": "Multiple-Choice-Tests zur Wissensüberprüfung",
    "cnc.independent.preparation": "Eigenständige Durchführung",
    "cnc.independent.preparation.desc":
      "Eigenständige Durchführung aller Vorbereitungen: Opferplatte einlegen, Nullpunktbestimmung, Objektfixierung",
    "cnc.safety.training": "Sicherheitstraining",
    "cnc.safety.training.desc": "Simulation sicherheitskritischer Arbeitsschritte vor dem realen Betrieb",
    "cnc.results": "ERGEBNIS",
    "cnc.results.text": "Die virtuelle Schulung ist heute verpflichtender Bestandteil des Einschulungsprozesses.",
    "cnc.results.mandatory":
      "Jeder Teilnehmer muss die VR-Schulung absolvieren, bevor er Zugang zum mehrtägigen Maschinenkurs erhält",
    "cnc.results.efficiency": "Die reale Einschulung läuft schneller, sicherer und strukturierter ab",
    "cnc.results.staff": "Das Personal wird entlastet – weniger Wiederholungsfragen, weniger Fehler",
    "cnc.testimonial": "KUNDENSTIMME",
    "cnc.testimonial.text":
      "Dank der virtuellen Schulung kommen unsere Teilnehmer mit einem viel besseren Vorwissen in den Maschinenkurs. Das spart Zeit, reduziert Risiken – und macht richtig Spaß.",
    "cnc.testimonial.author": "– Ausbildungsleitung, Pioniergarage Salzburg",
    "cnc.tech.technology": "Technologie",
    "cnc.tech.functions": "Funktionen",
    "cnc.tech.benefits": "Vorteile",
    "cnc.tech.unity": "Unity",
    "cnc.tech.realistic.physics": "Realistische Physik",
    "cnc.tech.high.resolution": "Hochauflösende 3D-Modelle",
    "cnc.tech.realistic.materials": "Realistische Materialien",
    "cnc.tech.machine.control": "Maschinensteuerung",
    "cnc.tech.training.scenarios": "Trainingsszenarien",
    "cnc.tech.error.diagnosis": "Fehlerdiagnose",
    "cnc.tech.performance.monitoring": "Leistungsüberwachung",
    "cnc.tech.safe.training": "Sicheres Training",
    "cnc.tech.cost.effective": "Kosteneffektiv",
    "cnc.tech.reduced.learning": "Reduzierte Lernkurve",
    "cnc.tech.location.independent": "Ortsunabhängig",

    // MixMaster VR
    "mixmaster.title": "MIXMASTER VR",
    "mixmaster.subtitle":
      "Eine virtuelle Cocktail-Mixing-Umgebung, die es Benutzern ermöglicht, Getränke in einer immersiven 3D-Bar zu mischen.",
    "mixmaster.description.p1":
      "Mix Master VR ist eine innovative Cocktail-Mixing-Anwendung, die die Kraft der virtuellen Realität nutzt, um ein unterhaltsames Getränkemix-Erlebnis zu schaffen. Die Anwendung versetzt Benutzer in eine stilvolle 3D-Bar, in der sie mit VR-Controllern verschiedene Cocktails zubereiten können.",
    "mixmaster.description.p2":
      "Mit intuitiven Controller-Bewegungen können Benutzer Zutaten auswählen, Flüssigkeiten eingießen, Cocktails schütteln und fertige Getränke garnieren. Die Anwendung bietet eine Auswahl an klassischen und kreativen Cocktail-Rezepten, die Schritt für Schritt angeleitet werden.",
    "mixmaster.description.p3":
      "Mix Master VR unterstützt sowohl Einsteiger als auch Cocktail-Enthusiasten mit einer benutzerfreundlichen Oberfläche und einem detaillierten Feedback-System, das die Genauigkeit der Zubereitung bewertet. Die virtuelle Bar-Umgebung bietet eine entspannte Atmosphäre zum Experimentieren mit verschiedenen Getränkekreationen.",
    "mixmaster.features": "HAUPTFUNKTIONEN",
    "mixmaster.features.realistic.bar": "Realistische Bar-Umgebung",
    "mixmaster.features.realistic.bar.desc":
      "Detaillierte 3D-Bar mit authentischer Atmosphäre und professioneller Ausstattung",
    "mixmaster.features.cocktail.recipes": "Cocktail-Rezepte",
    "mixmaster.features.cocktail.recipes.desc":
      "Umfangreiche Sammlung klassischer und moderner Cocktail-Rezepte mit Schritt-für-Schritt-Anleitungen",
    "mixmaster.features.realistic.physics": "Realistische Physik",
    "mixmaster.features.realistic.physics.desc":
      "Physikbasierte Flüssigkeitssimulation für authentisches Mixing-Erlebnis",
    "mixmaster.features.interactive.tools": "Interaktive Bar-Tools",
    "mixmaster.features.interactive.tools.desc":
      "Vollständige Ausstattung mit Shakern, Jiggers, Barlöffeln und anderen professionellen Tools",
    "mixmaster.features.feedback.system": "Feedback-System",
    "mixmaster.features.feedback.system.desc":
      "Detailliertes Bewertungssystem für Mixing-Techniken und Rezeptgenauigkeit",
    "mixmaster.features.customization": "Anpassung",
    "mixmaster.features.customization.desc":
      "Möglichkeit zur Erstellung eigener Cocktail-Kreationen und Rezeptvariationen",

    // Grabbing
    "grabbing.title": "GRABBING",
    "grabbing.subtitle":
      "Ein VR-Framework für natürliche Greifinteraktionen, das realistische Haptik und Physik simuliert.",
    "grabbing.description.p1":
      "Grabbing ist ein fortschrittliches VR-Framework, das sich auf die Entwicklung natürlicher und intuitiver Greifinteraktionen in virtuellen Umgebungen konzentriert. Das Projekt zielt darauf ab, die Kluft zwischen virtuellen und realen Interaktionen zu überbrücken, indem es realistische Haptik und Physik simuliert.",
    "grabbing.description.p2":
      "Das Framework ermöglicht es Benutzern, virtuelle Objekte mit ihren Händen zu greifen, zu manipulieren und zu interagieren, wobei die natürlichen Bewegungen und Einschränkungen der menschlichen Hand berücksichtigt werden. Es unterstützt verschiedene Arten von Griffen, von Präzisionsgriffen für kleine Objekte bis hin zu Kraftgriffen für größere Gegenstände.",
    "grabbing.description.p3":
      "Durch die Integration fortschrittlicher Physikberechnungen und haptischer Feedback-Systeme bietet Grabbing eine immersive Erfahrung, die die Grenzen zwischen virtuellen und realen Welten verwischt. Das Framework ist für Entwickler konzipiert, die realistische Interaktionen in ihre VR-Anwendungen implementieren möchten, von Spielen bis hin zu professionellen Trainingsanwendungen.",
    "grabbing.image.alt.main": "Grabbing Projekt Hauptbild",
    "grabbing.image.alt.detail1": "Grabbing Detail 1",
    "grabbing.image.alt.detail2": "Grabbing Detail 2",
    "grabbing.video.description":
      "Erleben Sie einen Einblick in unser innovatives VR-Greif-Framework für natürliche Interaktionen.",
    "grabbing.features.title": "HAUPTMERKMALE",
    "grabbing.features.free.tracking": "Freies Handtracking",
    "grabbing.features.no.controllers": "Keine Controller erforderlich",
    "grabbing.features.natural.movements": "Natürliche Handbewegungen",
    "grabbing.features.finger.recognition": "Präzise Fingererkennung",
    "grabbing.features.realtime.tracking": "Echtzeit-Tracking",
    "grabbing.features.intuitive.interaction": "Intuitive Interaktion",
    "grabbing.features.realistic.grabbing": "Realistische Greifbewegungen",
    "grabbing.features.object.manipulation": "Objektmanipulation",
    "grabbing.features.natural.gestures": "Natürliche Gesten",
    "grabbing.features.immersive.experience": "Immersive Erfahrung",
    "grabbing.features.vr.integration": "VR-Integration",
    "grabbing.features.seamless.integration": "Nahtlose VR-Einbindung",
    "grabbing.features.optimized.performance": "Optimierte Performance",
    "grabbing.features.stable.recognition": "Stabile Erkennung",
    "grabbing.features.extended.compatibility": "Erweiterte Kompatibilität",
    "grabbing.tech.hand.modeling": "Hand-Modellierung",
    "grabbing.tech.hand.anatomical": "Anatomisch korrekte Handmodelle",
    "grabbing.tech.hand.joints": "Realistische Fingergelenke",
    "grabbing.tech.hand.constraints": "Natürliche Bewegungseinschränkungen",
    "grabbing.tech.hand.sizes": "Anpassbare Handgrößen",
    "grabbing.tech.hand.tracking": "Unterstützung für Handtracking",
    "grabbing.tech.physics.system": "Physiksystem",
    "grabbing.tech.physics.collision": "Präzise Kollisionserkennung",
    "grabbing.tech.physics.friction": "Realistische Reibung und Gewicht",
    "grabbing.tech.physics.force": "Dynamische Kraftübertragung",
    "grabbing.tech.physics.finger": "Physikbasierte Fingerinteraktionen",
    "grabbing.tech.physics.performance": "Optimierte Performance",
    "grabbing.tech.haptic.feedback": "Haptisches Feedback",
    "grabbing.tech.haptic.vibration": "Controller-Vibration",
    "grabbing.tech.haptic.devices": "Erweiterte haptische Geräte",
    "grabbing.tech.haptic.material": "Materialspezifisches Feedback",
    "grabbing.tech.haptic.weight": "Gewichtssimulation",
    "grabbing.tech.haptic.texture": "Texturbasierte Haptik",
    "grabbing.gallery.image1": "Grabbing Galerie Bild 1",
    "grabbing.gallery.image2": "Grabbing Galerie Bild 2",
    "grabbing.gallery.image3": "Grabbing Galerie Bild 3",
    "grabbing.gallery.image4": "Grabbing Galerie Bild 4",

    // Walking
    "walking.title": "WALKING",
    "walking.subtitle":
      "Eine Fortbewegungslösung für VR, die natürliche Bewegungen in virtuellen Umgebungen ermöglicht und Motion Sickness reduziert.",
    "walking.description.p1":
      "Walking ist ein innovativer VR-Fortbewegungssystem, das entwickelt wurde, um eine der größten Herausforderungen in der virtuellen Realität zu lösen: natürliche Bewegung in begrenzten physischen Räumen. Das Projekt bietet eine Lösung, die es Benutzern ermöglicht, sich frei in virtuellen Umgebungen zu bewegen, während nur minimaler Platz in der realen Welt benötigt wird.",
    "walking.description.p2":
      "Das System kombiniert verschiedene Fortbewegungstechniken, einschließlich natürlichem Gehen für kurze Distanzen, intelligenter Teleportation für längere Strecken und innovativen Bewegungsalgorithmen, die die Wahrnehmung des Benutzers manipulieren, um größere Räume in kleineren physischen Bereichen zu simulieren.",
    "walking.description.p3":
      "Ein besonderer Fokus liegt auf der Reduzierung von Motion Sickness, einem häufigen Problem bei VR-Bewegungen. Durch die Verwendung visueller Anker, gradueller Übergänge und personalisierter Komforteinstellungen minimiert Walking die Wahrscheinlichkeit von Unbehagen und ermöglicht längere, angenehmere VR-Erfahrungen.",
    "walking.image.alt.main": "Walking Projekt Hauptbild",
    "walking.image.alt.detail1": "Walking Detail 1",
    "walking.image.alt.detail2": "Walking Detail 2",
    "walking.video.description":
      "Erleben Sie einen Einblick in unsere innovative VR-Fortbewegungslösung, die natürliche Bewegung in virtuellen Umgebungen ermöglicht.",
    "walking.video.hover.description": "Walking Trailer Video",
    "walking.tech.movement.systems": "Bewegungssysteme",
    "walking.tech.natural.walking": "Natürliches Gehen mit Raumverfolgung",
    "walking.tech.intelligent.teleportation": "Intelligente Teleportation",
    "walking.tech.continuous.movement": "Kontinuierliche Bewegung mit Komfortoptionen",
    "walking.tech.arm.swing": "Arm-Schwung-Fortbewegung",
    "walking.tech.hybrid.modes": "Hybride Bewegungsmodi",
    "walking.tech.anti.motion.sickness": "Anti-Motion-Sickness",
    "walking.tech.visual.anchors": "Visuelle Anker und Referenzpunkte",
    "walking.tech.gradual.transitions": "Graduelle Bewegungsübergänge",
    "walking.tech.vignette.effects": "Vignetten-Effekte während der Bewegung",
    "walking.tech.comfort.settings": "Personalisierte Komforteinstellungen",
    "walking.tech.speed.adjustment": "Adaptive Geschwindigkeitsanpassung",
    "walking.tech.space.manipulation": "Raummanipulation",
    "walking.tech.redirected.algorithms": "Redirected-Walking-Algorithmen",
    "walking.tech.dynamic.scaling": "Dynamische Raumskalierung",
    "walking.tech.non.euclidean": "Nicht-euklidische Geometrie",
    "walking.tech.context.adaptation": "Kontextabhängige Umgebungsanpassung",
    "walking.tech.seamless.transitions": "Nahtlose Raumübergänge",
    "walking.gallery.image1": "Walking Galerie Bild 1",
    "walking.gallery.image2": "Walking Galerie Bild 2",

    // Physics Based UI
    "physics.title": "PHYSICS BASED UI",
    "physics.subtitle":
      "Eine innovative Benutzeroberfläche, die physikalische Gesetze nutzt, um intuitive und natürliche Interaktionen in VR zu ermöglichen.",
    "physics.description.p1":
      "Physics Based UI ist ein innovativer Unity-Package für die Entwicklung von Benutzeroberflächen in VR, das die Gesetze der Physik nutzt, um natürliche und intuitive Interaktionen mit VR-Controllern und Handtracking zu ermöglichen. Dieses Package bietet verschiedene Tools, die interaktives UI für VR ermöglichen und eine greifbare, dreidimensionale Erfahrung schaffen.",
    "physics.description.p2":
      "Mit diesem Unity-Package verhalten sich UI-Elemente wie reale Objekte mit Masse, Trägheit und Kollisionsphysik. Entwickler können Menüs erstellen, die schweben, Schaltflächen, die einen physischen Widerstand bieten, und Objekte mit realistischem Gewicht und Verhalten. Benutzer können diese Elemente mittels VR-Controllern und Handtracking intuitiv bedienen.",
    "physics.description.p3":
      "Das Unity-Package bietet Entwicklern eine umfangreiche Bibliothek von vorgefertigten UI-Komponenten, die leicht angepasst werden können, sowie Tools zur Erstellung eigener physikbasierter Elemente. Es ist speziell für VR-Umgebungen mit Controllern und Handtracking optimiert und lässt sich nahtlos in bestehende Unity-Projekte integrieren.",
    "physics.image.alt.overview": "Physics Based UI Übersicht",
    "physics.image.alt.swiper": "Physics Based UI Image Swiper",
    "physics.image.alt.timer": "Physics Based UI Timer",
    "physics.video.description":
      "Erleben Sie einen Einblick in unsere innovative physikbasierte Benutzeroberfläche für intuitive VR-Interaktionen.",
    "physics.components": "UI-KOMPONENTEN",
    "physics.component.swiper.title": "Image Swiper",
    "physics.component.swiper.description":
      "Eine intuitive Oberfläche zum Durchblättern und Vergleichen von Bildern. Benutzer können mit natürlichen Handbewegungen oder VR-Controllern durch Bilder wischen und zwischen verschiedenen Ansichten wechseln.",
    "physics.component.scroll.title": "Scroll Panel",
    "physics.component.scroll.description":
      "Physikbasierte Scrollbereiche, die es Benutzern ermöglichen, durch Inhalte zu navigieren, als würden sie mit realen Objekten interagieren. Die Panels reagieren auf VR-Controller und Handtracking-Eingaben.",
    "physics.component.timer.title": "Timer und Stoppuhr",
    "physics.component.timer.description":
      "Interaktive Zeitsteuerungselemente mit visuellen Fortschrittsanzeigen. Benutzer können Timer starten, pausieren und zurücksetzen durch physische Interaktionen mit VR-Controllern oder Handtracking.",
    "physics.advanced": "ERWEITERTE KOMPONENTEN",
    "physics.advanced.round.timer": "Rundenbasierter Timer",
    "physics.advanced.round.timer.description":
      "Ein fortschrittliches Timing-System, das Rundenzeiten verfolgt und anzeigt. Perfekt für VR-Trainingsanwendungen oder Spiele, bei denen die Leistung über mehrere Runden gemessen werden muss.",
    "physics.advanced.keyboard": "Virtuelle Tastatur",
    "physics.advanced.keyboard.description":
      "Eine physikbasierte Tastatur mit taktilen Tasten, die beim Drücken mit VR-Controllern oder Fingern nachgeben und haptisches Feedback bieten. Ermöglicht natürliche Texteingabe in VR.",
    "physics.labels": "INTERAKTIVE BESCHRIFTUNGEN",
    "physics.unity.integration": "UNITY-INTEGRATION",
    "physics.unity.seamless": "Nahtlose VR-Entwicklungsumgebung",
    "physics.unity.seamless.description.p1":
      "Das Physics Based UI-Package lässt sich nahtlos in Unity integrieren und bietet eine intuitive Entwicklungsumgebung für VR-Projekte. Entwickler können die vorgefertigten Komponenten per Drag-and-Drop in ihre VR-Szenen einfügen.",
    "physics.unity.seamless.description.p2":
      "Das Package enthält umfangreiche Dokumentation, VR-Beispielszenen und Tutorials, die den Einstieg erleichtern. Die Komponenten sind modular aufgebaut und können leicht an die spezifischen VR-Anforderungen angepasst werden.",
    "physics.unity.seamless.description.p3":
      "Die Integration mit Unity's eigenen Physik-Systemen und VR-Frameworks wie SteamVR und Oculus Integration ermöglicht eine optimale Performance auch bei komplexen UI-Interaktionen in VR.",
    "physics.tech.unity.integration": "Unity VR-Integration",
    "physics.tech.unity.xr.toolkit": "Unity XR Toolkit Support",
    "physics.tech.unity.inspector": "Custom VR Inspector Tools",
    "physics.tech.unity.prefabs": "VR-optimierte Prefabs",
    "physics.tech.unity.scripting": "C# VR Scripting API",
    "physics.tech.unity.performance": "Performance-optimiert für VR",
    "physics.tech.vr.interactions": "VR-Interaktionen",
    "physics.tech.vr.controller": "VR-Controller Integration",
    "physics.tech.vr.handtracking": "Handtracking Support",
    "physics.tech.vr.collision": "Präzise VR-Kollisionserkennung",
    "physics.tech.vr.haptic": "Haptisches Feedback",
    "physics.tech.vr.distances": "Anpassbare VR-Interaktionsdistanzen",
    "physics.tech.ui.components": "VR UI-Komponenten",
    "physics.tech.ui.buttons": "3D-physikalische Schaltflächen",
    "physics.tech.ui.menus": "Schwebende VR-Menüs",
    "physics.tech.ui.widgets": "Interaktive 3D-Widgets",
    "physics.tech.ui.panels": "VR-scrollbare Panels",
    "physics.tech.ui.keyboards": "3D-virtuelle Tastaturen",
    "physics.gallery.open.image": "Bild vergrößern",
    "physics.gallery.image.swiper": "Physics Based UI Image Swiper",
    "physics.gallery.image.timer": "Physics Based UI Timer und Stoppuhr",
    "physics.gallery.image.scroll": "Physics Based UI Scroll Panel",
    "physics.gallery.image.round.timer": "Physics Based UI Rundenbasierter Timer",
    "physics.gallery.image.labels": "Physics Based UI Interaktive Beschriftungen",
    "physics.gallery.image.keyboard": "Physics Based UI Virtuelle Tastatur",
    "physics.gallery.enlarged.image": "Vergrößertes Galerie-Bild",
  },
  en: {
    // Navigation
    "nav.overview": "Overview",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.vision": "Vision",
    "nav.about": "About",

    // Footer
    "footer.description": "Innovative VR/AR solutions for your business. We develop customized immersive experiences.",
    "footer.sections.title": "Sections",
    "footer.social.title": "Social Media",
    "footer.contact.title": "Contact",
    "footer.rights": "all rights reserved",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Policy",

    // Contact
    "contact.title": "CONTACT",
    "contact.subtitle": "Do you have questions or would you like to learn more about our services? Contact us today.",
    "contact.write": "GET IN TOUCH",
    "contact.email.description":
      "Have questions about our VR solutions or want to discuss a project? Send us an email and we'll get back to you as soon as possible.",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.maps": "Open in Google Maps",

    // Projects
    "projects.title": "OUR PROJECTS",
    "projects.subtitle": "Discover our innovative VR/AR solutions and immersive experiences.",
    "projects.back": "Back to Overview",
    "projects.back.home": "Back to Home",
    "projects.filter.all": "All",
    "projects.discover": "Discover project",
    "projects.cta.title": "Have a project in mind?",
    "projects.cta.desc": "Let's work together to turn your vision into an immersive reality.",
    "projects.cta.button": "Discuss project",
    "project.description": "PROJECT DESCRIPTION",
    "project.trailer": "TRAILER",
    "project.gallery": "GALLERY",
    "project.technical": "TECHNICAL DETAILS",

    // Project descriptions
    "memoria.description":
      "An immersive VR experience that explores memories and emotions through interactive environments.",
    "cnc.description": "A VR simulation for training on CNC machines that conveys realistic operation.",
    "mixmaster.description": "A virtual DJ environment for mixing and producing music in an immersive 3D world.",
    "physics.description.short":
      "An innovative user interface that uses physical laws to enable intuitive interactions.",
    "grabbing.description.short":
      "A VR framework for natural grabbing interactions that simulates realistic haptics and physics.",
    "walking.description.short": "A VR locomotion solution that enables natural movement in virtual environments.",

    // Video
    "video.not.supported": "Your browser does not support the video tag.",

    // CNC Machine
    "cnc.title": "CNC MACHINE",
    "cnc.subtitle": "A VR simulation for training on CNC machines that conveys realistic operation and safety aspects.",
    "cnc.description.p1":
      "The CNC Machine VR simulation offers a safe and cost-effective way to learn how to operate CNC machines. Through realistic 3D models and physics-based interactions, users can practice various machining processes without needing expensive machines or materials.",
    "cnc.description.p2":
      "The simulation includes various training modules, from basic machine operations to complex machining tasks. Users learn safety protocols, tool changes, programming, and quality control in a risk-free environment.",
    "cnc.description.p3":
      "Through integration into real training programs, VR training has established itself as an indispensable part of CNC education and improves both the safety and efficiency of the learning process.",
    "cnc.case.study": "CASE STUDY",
    "cnc.case.study.subtitle": "CNC Milling Training in VR: Mandatory Module for Real Machine Courses",
    "cnc.client": "Client: Pioniergarage Salzburg",
    "cnc.industry": "Industry: Technical Education / Workshop Operations",
    "cnc.use.case": "Use Case: Training for CNC Milling Usage",
    "cnc.initial.situation": "Initial Situation",
    "cnc.initial.text":
      "Pioniergarage Salzburg trains technically interested participants in the use of CNC mills. Traditional training on the machines was time-consuming, resource-intensive, and risky for beginners. The goal was to create an effective pre-qualification to make the real intensive course safer and more efficient.",
    "cnc.solution": "Solution with Virtual Visions",
    "cnc.solution.text":
      "Virtual Visions developed an immersive VR training that realistically depicts the complete CNC milling process – from software operation to machine preparation.",
    "cnc.key.components": "KEY TRAINING COMPONENTS",
    "cnc.interactive.tutorials": "Interactive Tutorials",
    "cnc.interactive.tutorials.desc": "Interactive tutorials for defining milling paths",
    "cnc.knowledge.verification": "Knowledge Verification",
    "cnc.knowledge.verification.desc": "Multiple-choice tests for knowledge verification",
    "cnc.independent.preparation": "Independent Execution",
    "cnc.independent.preparation.desc":
      "Independent execution of all preparations: inserting sacrificial plate, zero point determination, object fixation",
    "cnc.safety.training": "Safety Training",
    "cnc.safety.training.desc": "Simulation of safety-critical work steps before real operation",
    "cnc.results": "RESULTS",
    "cnc.results.text": "The virtual training is now a mandatory part of the training process.",
    "cnc.results.mandatory":
      "Every participant must complete the VR training before gaining access to the multi-day machine course",
    "cnc.results.efficiency": "Real training runs faster, safer, and more structured",
    "cnc.results.staff": "Staff is relieved – fewer repetitive questions, fewer errors",
    "cnc.testimonial": "CLIENT TESTIMONIAL",
    "cnc.testimonial.text":
      "Thanks to the virtual training, our participants come to the machine course with much better prior knowledge. This saves time, reduces risks – and is really fun.",
    "cnc.testimonial.author": "– Training Management, Pioniergarage Salzburg",
    "cnc.tech.technology": "Technology",
    "cnc.tech.functions": "Functions",
    "cnc.tech.benefits": "Benefits",
    "cnc.tech.unity": "Unity",
    "cnc.tech.realistic.physics": "Realistic Physics",
    "cnc.tech.high.resolution": "High-resolution 3D Models",
    "cnc.tech.realistic.materials": "Realistic Materials",
    "cnc.tech.machine.control": "Machine Control",
    "cnc.tech.training.scenarios": "Training Scenarios",
    "cnc.tech.error.diagnosis": "Error Diagnosis",
    "cnc.tech.performance.monitoring": "Performance Monitoring",
    "cnc.tech.safe.training": "Safe Training",
    "cnc.tech.cost.effective": "Cost-effective",
    "cnc.tech.reduced.learning": "Reduced Learning Curve",
    "cnc.tech.location.independent": "Location Independent",

    // MixMaster VR
    "mixmaster.title": "MIXMASTER VR",
    "mixmaster.subtitle":
      "A virtual cocktail mixing environment that allows users to mix drinks in an immersive 3D bar.",
    "mixmaster.description.p1":
      "Mix Master VR is an innovative cocktail mixing application that harnesses the power of virtual reality to create an entertaining drink mixing experience. The application places users in a stylish 3D bar where they can prepare various cocktails using VR controllers.",
    "mixmaster.description.p2":
      "With intuitive controller movements, users can select ingredients, pour liquids, shake cocktails, and garnish finished drinks. The application offers a selection of classic and creative cocktail recipes with step-by-step guidance.",
    "mixmaster.description.p3":
      "Mix Master VR supports both beginners and cocktail enthusiasts with a user-friendly interface and a detailed feedback system that evaluates the accuracy of preparation. The virtual bar environment provides a relaxed atmosphere for experimenting with different drink creations.",
    "mixmaster.features": "KEY FEATURES",
    "mixmaster.features.realistic.bar": "Realistic Bar Environment",
    "mixmaster.features.realistic.bar.desc": "Detailed 3D bar with authentic atmosphere and professional equipment",
    "mixmaster.features.cocktail.recipes": "Cocktail Recipes",
    "mixmaster.features.cocktail.recipes.desc":
      "Extensive collection of classic and modern cocktail recipes with step-by-step instructions",
    "mixmaster.features.realistic.physics": "Realistic Physics",
    "mixmaster.features.realistic.physics.desc": "Physics-based liquid simulation for authentic mixing experience",
    "mixmaster.features.interactive.tools": "Interactive Bar Tools",
    "mixmaster.features.interactive.tools.desc":
      "Complete equipment with shakers, jiggers, bar spoons, and other professional tools",
    "mixmaster.features.feedback.system": "Feedback System",
    "mixmaster.features.feedback.system.desc": "Detailed evaluation system for mixing techniques and recipe accuracy",
    "mixmaster.features.customization": "Customization",
    "mixmaster.features.customization.desc": "Ability to create own cocktail creations and recipe variations",

    // Grabbing
    "grabbing.title": "GRABBING",
    "grabbing.subtitle":
      "A VR framework for natural grabbing interactions that simulates realistic haptics and physics.",
    "grabbing.description.p1":
      "Grabbing is an advanced VR framework focused on developing natural and intuitive grabbing interactions in virtual environments. The project aims to bridge the gap between virtual and real interactions by simulating realistic haptics and physics.",
    "grabbing.description.p2":
      "The framework allows users to grab, manipulate, and interact with virtual objects using their hands, taking into account the natural movements and constraints of the human hand. It supports various types of grips, from precision grips for small objects to power grips for larger items.",
    "grabbing.description.p3":
      "By integrating advanced physics calculations and haptic feedback systems, Grabbing provides an immersive experience that blurs the boundaries between virtual and real worlds. The framework is designed for developers who want to implement realistic interactions in their VR applications, from games to professional training applications.",
    "grabbing.image.alt.main": "Grabbing Project Main Image",
    "grabbing.image.alt.detail1": "Grabbing Detail 1",
    "grabbing.image.alt.detail2": "Grabbing Detail 2",
    "grabbing.video.description":
      "Experience a glimpse of our innovative VR grabbing framework for natural interactions.",
    "grabbing.features.title": "KEY FEATURES",
    "grabbing.features.free.tracking": "Free Hand Tracking",
    "grabbing.features.no.controllers": "No controllers required",
    "grabbing.features.natural.movements": "Natural hand movements",
    "grabbing.features.finger.recognition": "Precise finger recognition",
    "grabbing.features.realtime.tracking": "Real-time tracking",
    "grabbing.features.intuitive.interaction": "Intuitive Interaction",
    "grabbing.features.realistic.grabbing": "Realistic grabbing motions",
    "grabbing.features.object.manipulation": "Object manipulation",
    "grabbing.features.natural.gestures": "Natural gestures",
    "grabbing.features.immersive.experience": "Immersive experience",
    "grabbing.features.vr.integration": "VR Integration",
    "grabbing.features.seamless.integration": "Seamless VR integration",
    "grabbing.features.optimized.performance": "Optimized performance",
    "grabbing.features.stable.recognition": "Stable recognition",
    "grabbing.features.extended.compatibility": "Extended compatibility",
    "grabbing.tech.hand.modeling": "Hand Modeling",
    "grabbing.tech.hand.anatomical": "Anatomically correct hand models",
    "grabbing.tech.hand.joints": "Realistic finger joints",
    "grabbing.tech.hand.constraints": "Natural movement constraints",
    "grabbing.tech.hand.sizes": "Customizable hand sizes",
    "grabbing.tech.hand.tracking": "Support for hand tracking",
    "grabbing.tech.physics.system": "Physics System",
    "grabbing.tech.physics.collision": "Precise collision detection",
    "grabbing.tech.physics.friction": "Realistic friction and weight",
    "grabbing.tech.physics.force": "Dynamic force transfer",
    "grabbing.tech.physics.finger": "Physics-based finger interactions",
    "grabbing.tech.physics.performance": "Optimized performance",
    "grabbing.tech.haptic.feedback": "Haptic Feedback",
    "grabbing.tech.haptic.vibration": "Controller vibration",
    "grabbing.tech.haptic.devices": "Advanced haptic devices",
    "grabbing.tech.haptic.material": "Material-specific feedback",
    "grabbing.tech.haptic.weight": "Weight simulation",
    "grabbing.tech.haptic.texture": "Texture-based haptics",
    "grabbing.gallery.image1": "Grabbing Gallery Image 1",
    "grabbing.gallery.image2": "Grabbing Gallery Image 2",
    "grabbing.gallery.image3": "Grabbing Gallery Image 3",
    "grabbing.gallery.image4": "Grabbing Gallery Image 4",

    // Walking
    "walking.title": "WALKING",
    "walking.subtitle":
      "A VR locomotion solution that enables natural movement in virtual environments and reduces motion sickness.",
    "walking.description.p1":
      "Walking is an innovative VR locomotion system designed to solve one of the biggest challenges in virtual reality: natural movement in limited physical spaces. The project offers a solution that allows users to move freely in virtual environments while requiring minimal space in the real world.",
    "walking.description.p2":
      "The system combines various locomotion techniques, including natural walking for short distances, intelligent teleportation for longer distances, and innovative movement algorithms that manipulate the user's perception to simulate larger spaces in smaller physical areas.",
    "walking.description.p3":
      "A special focus is on reducing motion sickness, a common problem with VR movement. By using visual anchors, gradual transitions, and personalized comfort settings, Walking minimizes the likelihood of discomfort and enables longer, more enjoyable VR experiences.",
    "walking.image.alt.main": "Walking Project Main Image",
    "walking.image.alt.detail1": "Walking Detail 1",
    "walking.image.alt.detail2": "Walking Detail 2",
    "walking.video.description":
      "Experience a glimpse of our innovative VR locomotion solution that enables natural movement in virtual environments.",
    "walking.video.hover.description": "Walking Trailer Video",
    "walking.tech.movement.systems": "Movement Systems",
    "walking.tech.natural.walking": "Natural walking with room tracking",
    "walking.tech.intelligent.teleportation": "Intelligent teleportation",
    "walking.tech.continuous.movement": "Continuous movement with comfort options",
    "walking.tech.arm.swing": "Arm-swing locomotion",
    "walking.tech.hybrid.modes": "Hybrid movement modes",
    "walking.tech.anti.motion.sickness": "Anti-Motion Sickness",
    "walking.tech.visual.anchors": "Visual anchors and reference points",
    "walking.tech.gradual.transitions": "Gradual movement transitions",
    "walking.tech.vignette.effects": "Vignette effects during movement",
    "walking.tech.comfort.settings": "Personalized comfort settings",
    "walking.tech.speed.adjustment": "Adaptive speed adjustment",
    "walking.tech.space.manipulation": "Space Manipulation",
    "walking.tech.redirected.algorithms": "Redirected walking algorithms",
    "walking.tech.dynamic.scaling": "Dynamic space scaling",
    "walking.tech.non.euclidean": "Non-Euclidean geometry",
    "walking.tech.context.adaptation": "Context-dependent environment adaptation",
    "walking.tech.seamless.transitions": "Seamless space transitions",
    "walking.gallery.image1": "Walking Gallery Image 1",
    "walking.gallery.image2": "Walking Gallery Image 2",

    // Physics Based UI
    "physics.title": "PHYSICS BASED UI",
    "physics.subtitle":
      "An innovative user interface that uses physical laws to enable intuitive and natural interactions in VR.",
    "physics.description.p1":
      "Physics Based UI is an innovative Unity package for developing user interfaces in VR that uses the laws of physics to enable natural and intuitive interactions with VR controllers and hand tracking. This package provides various tools that enable interactive UI for VR, creating a tangible, three-dimensional experience.",
    "physics.description.p2":
      "With this Unity package, UI elements behave like real objects with mass, inertia, and collision physics. Developers can create menus that float, buttons that offer physical resistance, and objects with realistic weight and behavior. Users can intuitively operate these elements using VR controllers and hand tracking.",
    "physics.description.p3":
      "The Unity package provides developers with an extensive library of pre-built UI components that can be easily customized, as well as tools for creating their own physics-based elements. It is specifically optimized for VR environments with controllers and hand tracking and can be seamlessly integrated into existing Unity projects.",
    "physics.image.alt.overview": "Physics Based UI Overview",
    "physics.image.alt.swiper": "Physics Based UI Image Swiper",
    "physics.image.alt.timer": "Physics Based UI Timer",
    "physics.video.description":
      "Experience a glimpse of our innovative physics-based user interface for intuitive VR interactions.",
    "physics.components": "UI COMPONENTS",
    "physics.component.swiper.title": "Image Swiper",
    "physics.component.swiper.description":
      "An intuitive interface for browsing and comparing images. Users can swipe through images with natural hand movements or VR controllers and switch between different views.",
    "physics.component.scroll.title": "Scroll Panel",
    "physics.component.scroll.description":
      "Physics-based scroll areas that allow users to navigate through content as if they were interacting with real objects. The panels respond to VR controller and hand tracking inputs.",
    "physics.component.timer.title": "Timer and Stopwatch",
    "physics.component.timer.description":
      "Interactive time control elements with visual progress indicators. Users can start, pause, and reset timers through physical interactions with VR controllers or hand tracking.",
    "physics.advanced": "ADVANCED COMPONENTS",
    "physics.advanced.round.timer": "Round-based Timer",
    "physics.advanced.round.timer.description":
      "An advanced timing system that tracks and displays lap times. Perfect for VR training applications or games where performance needs to be measured over multiple rounds.",
    "physics.advanced.keyboard": "Virtual Keyboard",
    "physics.advanced.keyboard.description":
      "A physics-based keyboard with tactile keys that give way when pressed with VR controllers or fingers and provide haptic feedback. Enables natural text input in VR.",
    "physics.labels": "INTERACTIVE LABELS",
    "physics.unity.integration": "UNITY INTEGRATION",
    "physics.unity.seamless": "Seamless VR Development Environment",
    "physics.unity.seamless.description.p1":
      "The Physics Based UI package integrates seamlessly into Unity and provides an intuitive development environment for VR projects. Developers can drag and drop the pre-built components into their VR scenes.",
    "physics.unity.seamless.description.p2":
      "The package includes comprehensive documentation, VR example scenes, and tutorials that make getting started easy. The components are modular and can be easily adapted to specific VR requirements.",
    "physics.unity.seamless.description.p3":
      "Integration with Unity's own physics systems and VR frameworks such as SteamVR and Oculus Integration enables optimal performance even with complex UI interactions in VR.",
    "physics.tech.unity.integration": "Unity VR Integration",
    "physics.tech.unity.xr.toolkit": "Unity XR Toolkit Support",
    "physics.tech.unity.inspector": "Custom VR Inspector Tools",
    "physics.tech.unity.prefabs": "VR-optimized Prefabs",
    "physics.tech.unity.scripting": "C# VR Scripting API",
    "physics.tech.unity.performance": "Performance-optimized for VR",
    "physics.tech.vr.interactions": "VR Interactions",
    "physics.tech.vr.controller": "VR Controller Integration",
    "physics.tech.vr.handtracking": "Hand tracking Support",
    "physics.tech.vr.collision": "Precise VR Collision Detection",
    "physics.tech.vr.haptic": "Haptic Feedback",
    "physics.tech.vr.distances": "Customizable VR Interaction Distances",
    "physics.tech.ui.components": "VR UI Components",
    "physics.tech.ui.buttons": "3D Physical Buttons",
    "physics.tech.ui.menus": "Floating VR Menus",
    "physics.tech.ui.widgets": "Interactive 3D Widgets",
    "physics.tech.ui.panels": "VR Scrollable Panels",
    "physics.tech.ui.keyboards": "3D Virtual Keyboards",
    "physics.gallery.open.image": "Open enlarged image",
    "physics.gallery.image.swiper": "Physics Based UI Image Swiper",
    "physics.gallery.image.timer": "Physics Based UI Timer and Stopwatch",
    "physics.gallery.image.scroll": "Physics Based UI Scroll Panel",
    "physics.gallery.image.round.timer": "Physics Based UI Round-based Timer",
    "physics.gallery.image.labels": "Physics Based UI Interactive Labels",
    "physics.gallery.image.keyboard": "Physics Based UI Virtual Keyboard",
    "physics.gallery.enlarged.image": "Enlarged Gallery Image",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de")

  useEffect(() => {
    // Initialize language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "de" || savedLanguage === "en")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
