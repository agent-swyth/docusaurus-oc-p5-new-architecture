"use strict";(self.webpackChunkdocusaurus_oc_p_5_new_architecture=self.webpackChunkdocusaurus_oc_p_5_new_architecture||[]).push([[57],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5136:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const l={},i="Contrat d\u2019Architecture des utilisateurs Business",s={unversionedId:"Architecture/architecture-contract-with-business",id:"Architecture/architecture-contract-with-business",title:"Contrat d\u2019Architecture des utilisateurs Business",description:"| Projet  | Nouvelle Architecture d\u2019Entreprise |",source:"@site/docs/Architecture/40-architecture-contract-with-business.md",sourceDirName:"Architecture",slug:"/Architecture/architecture-contract-with-business",permalink:"/docusaurus-oc-p5-new-architecture/Architecture/architecture-contract-with-business",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"artefactSidebar",previous:{title:"Sp\xe9cification des Conditions requises pour l\u2019Architecture",permalink:"/docusaurus-oc-p5-new-architecture/Architecture/architecture-requirements-specification"},next:{title:"Contrat de Conception et de D\xe9veloppement de l\u2019Architecture",permalink:"/docusaurus-oc-p5-new-architecture/Architecture/architecture-contract-with-engineering"}},u={},o=[{value:"<strong>Objet de ce document</strong>",id:"objet-de-ce-document",level:2},{value:"<strong>Introduction et Contexte</strong>",id:"introduction-et-contexte",level:2},{value:"<strong>La nature de l\u2019accord</strong>",id:"la-nature-de-laccord",level:2},{value:"<strong>Objectifs et p\xe9rim\xe8tre</strong>",id:"objectifs-et-p\xe9rim\xe8tre",level:2},{value:"Objectifs",id:"objectifs",level:3},{value:"P\xe9rim\xe8tre",id:"p\xe9rim\xe8tre",level:3},{value:"Parties prenantes, pr\xe9occupations et visions",id:"parties-prenantes-pr\xe9occupations-et-visions",level:3},{value:"<strong>Conditions requises pour la conformit\xe9</strong>",id:"conditions-requises-pour-la-conformit\xe9",level:2},{value:"<strong>Personnes adoptant l\u2019architecture</strong>",id:"personnes-adoptant-larchitecture",level:2},{value:"<strong>Fen\xeatre temporelle</strong>",id:"fen\xeatre-temporelle",level:2},{value:"<strong>M\xe9triques Business de l\u2019architecture</strong>",id:"m\xe9triques-business-de-larchitecture",level:2},{value:"<strong>Accords de service pour l\u2019architecture</strong>",id:"accords-de-service-pour-larchitecture",level:2},{value:"Accords de niveau de service (SLA)",id:"accords-de-niveau-de-service-sla",level:3},{value:"KPI et m\xe9triques",id:"kpi-et-m\xe9triques",level:3},{value:"Niveau de service, Classification et Priorit\xe9",id:"niveau-de-service-classification-et-priorit\xe9",level:3},{value:"R\xe9ponse de service",id:"r\xe9ponse-de-service",level:3},{value:"Disponibilit\xe9 du support de service",id:"disponibilit\xe9-du-support-de-service",level:3},{value:"<strong>Personnes approuvant ce plan</strong>",id:"personnes-approuvant-ce-plan",level:2}],p={toc:o},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contrat-darchitecture-des-utilisateurs-business"},"Contrat d\u2019Architecture des utilisateurs Business"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Projet"),(0,a.kt)("th",{parentName:"tr",align:null},"Nouvelle Architecture d\u2019Entreprise"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client"),(0,a.kt)("td",{parentName:"tr",align:null},"Foosus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Auteurs"),(0,a.kt)("td",{parentName:"tr",align:null},"Yoann Talon")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"objet-de-ce-document"},(0,a.kt)("strong",{parentName:"h2"},"Objet de ce document")),(0,a.kt)("p",null,"Les Contrats d\u2019architecture sont les accords communs entre les partenaires de d\xe9veloppement et les sponsors sur les livrables, la qualit\xe9, et la correspondance \xe0 l\u2019objectif d\u2019une architecture. L\u2019impl\xe9mentation r\xe9ussie de ces accords sera livr\xe9e gr\xe2ce \xe0 une gouvernance de l\u2019architecture efficace (voir TOGAF Partie VII, Gouvernance de l\u2019architecture). En impl\xe9mentant une approche dirig\xe9e du management de contrats, les \xe9l\xe9ments suivants seront garantis :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Un syst\xe8me de contr\xf4le continu pour v\xe9rifier l\u2019int\xe9grit\xe9, les changements, les prises de d\xe9cisions, et l\u2019audit de toutes les activit\xe9s relatives \xe0 l\u2019architecture au sein de l\u2019organisation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"L\u2019adh\xe9sion aux principes, standards et conditions requises des architectures existantes ou en d\xe9veloppement")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"L\u2019identification des risques dans tous les aspects du d\xe9veloppement et de l\u2019impl\xe9mentation des/de l\u2019architecture(s), y compris le d\xe9veloppement interne en fonction des standards accept\xe9s, des politiques, des technologies et des produits, de m\xeame que les\taspects op\xe9rationnels des architectures de fa\xe7on \xe0 ce que l\u2019organisation puisse poursuivre son business au sein d\u2019un\tenvironnement r\xe9sistant.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Un ensemble de process et de pratiques qui garantissent la transparence, la responsabilit\xe9 et la discipline au regard du d\xe9veloppement et de l\u2019utilisation de tous les artefacts architecturaux")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Un accord formel sur l\u2019organe de gouvernance responsable du contrat, son degr\xe9 d\u2019autorit\xe9, et le p\xe9rim\xe8tre de l\u2019architecture sous la gouvernance de cet organe"))),(0,a.kt)("p",null,"Ceci est une d\xe9claration d\u2019intention de se conformer \xe0 l\u2019architecture d\u2019entreprise, d\xe9livr\xe9e par les utilisateurs business entreprise. Lorsque l\u2019architecture d\u2019entreprise aura \xe9t\xe9 impl\xe9ment\xe9e (\xe0 la fin de la Phase F), un Contrat d\u2019Architecture sera normalement \xe9tabli entre la fonction architecture (ou la fonction de gouvernance IT, englobant la fonction architecture) et les utilisateurs business qui par la suite construiront et d\xe9ploieront des applications syst\xe8me dans l\u2019environnement cr\xe9\xe9 par l\u2019architecture."),(0,a.kt)("h2",{id:"introduction-et-contexte"},(0,a.kt)("strong",{parentName:"h2"},"Introduction et Contexte")),(0,a.kt)("p",null,"La plateforme Foosus actuelle ne peut ",(0,a.kt)("strong",{parentName:"p"},"plus soutenir la croissance et l\u2019expansion")," de l\u2019entreprise avec ",(0,a.kt)("strong",{parentName:"p"},"son architecture actuelle"),". "),(0,a.kt)("p",null,"Ses ",(0,a.kt)("strong",{parentName:"p"},"analyses commerciales")," ont montr\xe9 que ",(0,a.kt)("strong",{parentName:"p"},"les clients souhaitent acheter local")," et \xeatre ",(0,a.kt)("strong",{parentName:"p"},"mis en relation")," avec des ",(0,a.kt)("strong",{parentName:"p"},"producteurs pr\xe8s de chez eux"),". "),(0,a.kt)("p",null,"L\u2019entreprise souhaite ",(0,a.kt)("strong",{parentName:"p"},"cr\xe9er une nouvelle plateforme")," qui ",(0,a.kt)("strong",{parentName:"p"},"soutiendra sa croissance")," et fournira \xe0 leurs ",(0,a.kt)("strong",{parentName:"p"},"clients une nouvelle exp\xe9rience"),"."),(0,a.kt)("h2",{id:"la-nature-de-laccord"},(0,a.kt)("strong",{parentName:"h2"},"La nature de l\u2019accord")),(0,a.kt)("p",null,"La nature de cet accord est de partager et valider avec la ma\xeetrise d\u2019ouvrage les objectifs de l\u2019Etat Cible de l\u2019Architecture, suivant les objectifs business que nous nous sommes fix\xe9s. Cet accord vaudra comme un des feu verts n\xe9cessaire au lancement de la phase 2 du projet de nouvelle architecture."),(0,a.kt)("h2",{id:"objectifs-et-p\xe9rim\xe8tre"},(0,a.kt)("strong",{parentName:"h2"},"Objectifs et p\xe9rim\xe8tre")),(0,a.kt)("h3",{id:"objectifs"},"Objectifs"),(0,a.kt)("p",null,"Les objectifs business de ce travail d\u2019architecture sont les suivants :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Objectif Business"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tirer partie de la g\xe9olocalisation pour relier les fournisseurs locaux et les consommateurs"),(0,a.kt)("td",{parentName:"tr",align:null},"Les \xe9tudes de march\xe9 et les analyses commerciales montrent que nos clients souhaitent acheter local et soutiennent les producteurs locaux. Proposer des produits disponibles pr\xe8s des lieux de r\xe9sidence.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Proposer une architecture \xe9volutive, soutenant la croissance de l\u2019entreprise."),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9ployer les services sur diverses r\xe9gions, dans des villes et des pays donn\xe9s. Etre dot\xe9 de nouvelles fonctionnalit\xe9s au fil du temps.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Eviter toute interruption de service nuisant \xe0 la disponibilit\xe9 de la plateforme pour les utilisateurs, impactant le Chiffre d\u2019Affaire."),(0,a.kt)("td",{parentName:"tr",align:null},"Nous avons constat\xe9 des pannes caus\xe9es par l'incapacit\xe9 de notre syst\xe8me logiciel d'absorber les pics d'utilisation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Prendre en charge divers types d\u2019utilisateur (Consommateurs, Fournisseurs locaux, Personnel Back-Office Foosus) avec fonctionnalit\xe9s et services sp\xe9cifiques pour chaque, au sein d\u2019une m\xeame plateforme."),(0,a.kt)("td",{parentName:"tr",align:null},"Une seule port\xe9e d\u2019entr\xe9e pour n\u2019importe quel utilisateur.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Proposer une solution multi-plateforme (Web et mobile) pour les utilisateurs"),(0,a.kt)("td",{parentName:"tr",align:null},"Responsive Web Design")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fournir une alternative automatis\xe9e pour mettre \xe0 jour l\u2019inventaire des produits alimentaires."),(0,a.kt)("td",{parentName:"tr",align:null},"Concevoir une alternative au traitement manuel de l\u2019inventaire de produits alimentaires")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"R\xe9am\xe9nager la cha\xeene de valeur, en optimisant les d\xe9lais d\u2019approvisionnement et de livraison"),(0,a.kt)("td",{parentName:"tr",align:null},"Diminuer le Lead time")))),(0,a.kt)("h3",{id:"p\xe9rim\xe8tre"},"P\xe9rim\xe8tre"),(0,a.kt)("p",null,"Le p\xe9rim\xe8tre de la phase 2 comprend : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"La mise en \u0153uvre de l\u2019Etat Cible de l\u2019Architecture"),", tel que d\xe9finit dans les documents dans la vision architecturale, et la d\xe9claration de travail d\u2019architecture.")),(0,a.kt)("h3",{id:"parties-prenantes-pr\xe9occupations-et-visions"},"Parties prenantes, pr\xe9occupations et visions"),(0,a.kt)("p",null,"Le tableau suivant montre les parties prenantes qui utilisent ce document, leurs pr\xe9occupations, et la fa\xe7on dont le travail d\u2019architecture r\xe9pondra \xe0 ces pr\xe9occupations par l\u2019expression de plusieurs visions."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Partie prenante"),(0,a.kt)("th",{parentName:"tr",align:null},"Pr\xe9occupation"),(0,a.kt)("th",{parentName:"tr",align:null},"Vision"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CEO - Board Members"),(0,a.kt)("td",{parentName:"tr",align:null},"La nouvelle architecture doit assurer le d\xe9veloppement \xe9conomique de l\u2019entreprise."),(0,a.kt)("td",{parentName:"tr",align:null},"Faire rayonner Foosus au niveau d\xe9partemental, r\xe9gional, national, international.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Engineering Product Team"),(0,a.kt)("td",{parentName:"tr",align:null},"Concevoir et int\xe9grer de nouvelles fonctionnalit\xe9s utilisables et r\xe9actives."),(0,a.kt)("td",{parentName:"tr",align:null},"Offrir une exp\xe9rience utilisateur de premier plan.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Marketing Team"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9ployer et maintenir une architecture \xe9volutive"),(0,a.kt)("td",{parentName:"tr",align:null},"Faire franchir le million d\u2019utilisateurs inscrits \xe0 notre base client.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Financial Team"),(0,a.kt)("td",{parentName:"tr",align:null},"Augmenter la rentabilit\xe9 de Foosus"),(0,a.kt)("td",{parentName:"tr",align:null},"La nouvelle architecture soutiendra la croissance \xe9conomique de Foosus")))),(0,a.kt)("h2",{id:"conditions-requises-pour-la-conformit\xe9"},(0,a.kt)("strong",{parentName:"h2"},"Conditions requises pour la conformit\xe9")),(0,a.kt)("p",null,"L\u2019Etat Cible de l\u2019Architecture devra v\xe9rifier les m\xe9triques business fix\xe9es, et respecter les accords de niveau de service pr\xe9alablement r\xe9dig\xe9s. Ces conditions sont requises pour assurer la conformit\xe9 de l\u2019architecture d\u2019entreprise."),(0,a.kt)("h2",{id:"personnes-adoptant-larchitecture"},(0,a.kt)("strong",{parentName:"h2"},"Personnes adoptant l\u2019architecture")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Repr\xe9sentant de l\u2019\xe9quipe satisfaction client \u2014 face au client"),(0,a.kt)("li",{parentName:"ul"},"Membre de l\u2019\xe9quipe finance \u2014 facturation"),(0,a.kt)("li",{parentName:"ul"},"CEO et membre du conseil d\u2019administration"),(0,a.kt)("li",{parentName:"ul"},"Membres de l\u2019\xe9quipe Produit"),(0,a.kt)("li",{parentName:"ul"},"Membres de l\u2019\xe9quipe Marketing")),(0,a.kt)("h2",{id:"fen\xeatre-temporelle"},(0,a.kt)("strong",{parentName:"h2"},"Fen\xeatre temporelle")),(0,a.kt)("p",null,"La fen\xeatre temporelle de la phase 2 est de 6 mois, et commencera \xe0 la suite de la signature des contrats d\u2019architecture."),(0,a.kt)("h2",{id:"m\xe9triques-business-de-larchitecture"},(0,a.kt)("strong",{parentName:"h2"},"M\xe9triques Business de l\u2019architecture")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:null},"Technique de mesure"),(0,a.kt)("th",{parentName:"tr",align:null},"Valeur cible"),(0,a.kt)("th",{parentName:"tr",align:null},"Justification"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nombre d'adh\xe9sions d'utilisateurs par jour"),(0,a.kt)("td",{parentName:"tr",align:null},"Nombre d\u2019inscription journali\xe8re \xe0 la plateforme"),(0,a.kt)("td",{parentName:"tr",align:null},"Augmentation de 10%"),(0,a.kt)("td",{parentName:"tr",align:null},"La nouvelle architecture doit accompagner la croissance de l\u2019entreprise, notamment en augmentant le nombre d\u2019adh\xe9sion quotidien.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Adh\xe9sion de producteurs alimentaires"),(0,a.kt)("td",{parentName:"tr",align:null},"Nombre d\u2019inscription \xe0 la plateforme"),(0,a.kt)("td",{parentName:"tr",align:null},"4 adh\xe9sion / mois"),(0,a.kt)("td",{parentName:"tr",align:null},"Actuellement de 1,5/mois, nous souhaitons acc\xe9l\xe9rer l\u2019adh\xe9sion de nouveaux fournisseurs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9lai moyen de livraison en production"),(0,a.kt)("td",{parentName:"tr",align:null},"Temps entre chaque nouveau d\xe9ploiement"),(0,a.kt)("td",{parentName:"tr",align:null},"Moins d\u2019une semaine"),(0,a.kt)("td",{parentName:"tr",align:null},"Actuellement \xe0 3,5 semaines. Nous souhaitons livrer plus rapidement de petits incr\xe9ments dans notre plateforme.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Taux d\u2019incident en production"),(0,a.kt)("td",{parentName:"tr",align:null},"Nombre d\u2019incidents av\xe9r\xe9s en production sur 1 mois"),(0,a.kt)("td",{parentName:"tr",align:null},"Inf\xe9rieur \xe0 1/mois"),(0,a.kt)("td",{parentName:"tr",align:null},"Actuellement \xe0 plus de 25/mois, le taux d\u2019incidence en production a une cons\xe9quence sur notre chiffre d\u2019affaire.")))),(0,a.kt)("h2",{id:"accords-de-service-pour-larchitecture"},(0,a.kt)("strong",{parentName:"h2"},"Accords de service pour l\u2019architecture")),(0,a.kt)("h3",{id:"accords-de-niveau-de-service-sla"},"Accords de niveau de service (SLA)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Le SLA est un contrat de service Business qui pr\xe9cise ce que le fournisseur de service (en l\u2019\xe9tat Foosus) promet \xe0 ses clients/utilisateurs en terme de temps de fonctionnement, de performance du service, r\xe9activit\xe9, responsabilit\xe9, etc.")),(0,a.kt)("h3",{id:"kpi-et-m\xe9triques"},"KPI et m\xe9triques"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"M\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:null},"Engagement"),(0,a.kt)("th",{parentName:"tr",align:null},"Mesure"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Disponibilit\xe9"),(0,a.kt)("td",{parentName:"tr",align:null},"97%"),(0,a.kt)("td",{parentName:"tr",align:null},"Taux de disponibilit\xe9 annuel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"R\xe9currence d\u2019incident"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"en production"),(0,a.kt)("td",{parentName:"tr",align:null},"Moins de 1 / mois"),(0,a.kt)("td",{parentName:"tr",align:null},"Nombre d\u2019incident")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"en production"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"niveau-de-service-classification-et-priorit\xe9"},"Niveau de service, Classification et Priorit\xe9"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Niveau de s\xe9v\xe9rit\xe9"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"R\xe9ponse cible"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1. Interruption"),(0,a.kt)("td",{parentName:"tr",align:null},"Serveur SaaS en panne"),(0,a.kt)("td",{parentName:"tr",align:null},"Imm\xe9diat")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2. Critique"),(0,a.kt)("td",{parentName:"tr",align:null},"Risque \xe9lev\xe9 d'indisponibilit\xe9 du serveur"),(0,a.kt)("td",{parentName:"tr",align:null},"Sous 10 minutes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3. Urgent"),(0,a.kt)("td",{parentName:"tr",align:null},"Impact sur l'utilisateur final initi\xe9"),(0,a.kt)("td",{parentName:"tr",align:null},"Sous 20 minutes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4. Important"),(0,a.kt)("td",{parentName:"tr",align:null},"Potentiel d'impact sur les performances s'il n'est pas trait\xe9"),(0,a.kt)("td",{parentName:"tr",align:null},"Sous 30 minutes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5. Supervision"),(0,a.kt)("td",{parentName:"tr",align:null},"Probl\xe8me trait\xe9 mais potentiellement impactant \xe0 l'avenir"),(0,a.kt)("td",{parentName:"tr",align:null},"Sous un jour ouvr\xe9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6. Informationnel"),(0,a.kt)("td",{parentName:"tr",align:null},"Requ\xeate pour information"),(0,a.kt)("td",{parentName:"tr",align:null},"Sous 48 heures")))),(0,a.kt)("h3",{id:"r\xe9ponse-de-service"},"R\xe9ponse de service"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Service"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Cible SLA"),(0,a.kt)("th",{parentName:"tr",align:null},"M\xe9trique de performance"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1. Interruption"),(0,a.kt)("td",{parentName:"tr",align:null},"L\u2019acc\xe8s \xe0 la plateforme Foosus est impossible"),(0,a.kt)("td",{parentName:"tr",align:null},"Imm\xe9diat"),(0,a.kt)("td",{parentName:"tr",align:null},"Temps de r\xe9ponse entre le d\xe9but du probl\xe8me et la communication de Foosus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2. Critique"),(0,a.kt)("td",{parentName:"tr",align:null},"Risque \xe9lev\xe9 de temps d\u2019arr\xeat de la plateforme."),(0,a.kt)("td",{parentName:"tr",align:null},"En 10 minutes"),(0,a.kt)("td",{parentName:"tr",align:null},"Temps de r\xe9ponse entre le d\xe9but du probl\xe8me et la communication de Foosus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3. Urgent"),(0,a.kt)("td",{parentName:"tr",align:null},"Impact de l\u2019utilisateur final d\xe9but\xe9."),(0,a.kt)("td",{parentName:"tr",align:null},"En 20 minutes"),(0,a.kt)("td",{parentName:"tr",align:null},"Temps de r\xe9ponse entre le d\xe9but du probl\xe8me et la communication de Foosus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4. Important"),(0,a.kt)("td",{parentName:"tr",align:null},"Risque d'impact sur les performances en l'absence de mesures correctives"),(0,a.kt)("td",{parentName:"tr",align:null},"En 30 minutes"),(0,a.kt)("td",{parentName:"tr",align:null},"Temps de r\xe9ponse entre le d\xe9but du probl\xe8me et la communication de Foosus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5. Supervision"),(0,a.kt)("td",{parentName:"tr",align:null},"Probl\xe8me r\xe9solu mais potentiellement impactant pour le futur"),(0,a.kt)("td",{parentName:"tr",align:null},"En un jour ouvr\xe9"),(0,a.kt)("td",{parentName:"tr",align:null},"Temps de r\xe9ponse entre le d\xe9but du probl\xe8me et la communication de Foosus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6. Informationnel"),(0,a.kt)("td",{parentName:"tr",align:null},"Demande d\u2019information"),(0,a.kt)("td",{parentName:"tr",align:null},"En 48 heures"),(0,a.kt)("td",{parentName:"tr",align:null},"Temps de r\xe9ponse entre le d\xe9but du probl\xe8me et la communication de Foosus")))),(0,a.kt)("h3",{id:"disponibilit\xe9-du-support-de-service"},"Disponibilit\xe9 du support de service"),(0,a.kt)("p",null,"La couverture des services par Foosus, telle qu'elle est d\xe9crite dans le pr\xe9sent accord, suit le calendrier sp\xe9cifi\xe9 ci-dessous :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Support sur l\u2019application")," : 9h \xe0 18h, Lundi au Vendredi"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Support t\xe9l\xe9phonique")," : 12 heures /jour, Lundi au Vendredi"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Support par mail")," : 12 heures /jour, Lundi au Vendredi")),(0,a.kt)("h2",{id:"personnes-approuvant-ce-plan"},(0,a.kt)("strong",{parentName:"h2"},"Personnes approuvant ce plan")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Validateur"),(0,a.kt)("th",{parentName:"tr",align:null},"Domaine de responsabilit\xe9"),(0,a.kt)("th",{parentName:"tr",align:null},"Date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x")))))}c.isMDXComponent=!0}}]);