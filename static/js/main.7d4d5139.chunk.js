(this["webpackJsonpex4-signets"]=this["webpackJsonpex4-signets"]||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},178:function(e,t,a){},286:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(14),i=a.n(s),r=(a(156),a(48)),o=a(28),l=a(17),u=(a(157),a(158),a(341)),j=a(327),d=a(9),b=a(7);function h(e){var t=e.utilisateur;return Object(b.jsxs)("header",{className:"Entete",children:[Object(b.jsxs)("div",{className:"logo",children:["Signets",Object(b.jsx)(j.a,{variant:"outlined",size:"small",className:"btn-deconnexion",onClick:function(){return d.a.auth().signOut()},children:"D\xe9connexion"})]}),Object(b.jsxs)("div",{className:"utilisateur",children:[t.displayName," ",Object(b.jsx)(u.a,{className:"avatar",alt:t.displayName,src:t.photoURL})]})]})}var O=a(96),m=a.n(O),f=a(131),p=(a(165),a(166),a(331)),x=a(132),g=a.n(x),v=a(133),N=a.n(v),C=a(142),D=a(342),A=a.p+"static/media/couverture.2dc9ece9.webp";function k(e){e.id;var t=e.nom,a=e.couleur,n=e.datemodif,s=e.couverture,i=Object(c.useState)(null),r=Object(l.a)(i,2),o=r[0],u=r[1],j=function(){u(null)};return Object(b.jsxs)("article",{className:"Dossier",style:{backgroundColor:a},children:[Object(b.jsxs)("div",{className:"couverture",children:[Object(b.jsx)(p.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(b.jsx)(g.a,{})}),Object(b.jsx)("img",{src:s=""==s?A:s,alt:t})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("p",{children:["Modifi\xe9 : ",I(n)]})]}),Object(b.jsx)(p.a,{className:"modifier","aria-label":"modifier",size:"small",onClick:function(e){u(e.currentTarget)},children:Object(b.jsx)(N.a,{})}),Object(b.jsxs)(C.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:j,children:[Object(b.jsx)(D.a,{onClick:j,children:"Modifier"}),Object(b.jsx)(D.a,{onClick:j,children:"Supprimer"})]})]})}function I(e){var t=e?new Date(1e3*e.seconds):new Date;return"".concat(t.getDate()," ").concat(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]," ").concat(t.getFullYear())}var S=a(134);a(288);d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyBXMXFNKCTgaTIlqmLQMDi6rEqGsEL782Y",authDomain:"pvt-h21-6325d.firebaseapp.com",databaseURL:"https://pvt-h21-6325d-default-rtdb.firebaseio.com",projectId:"pvt-h21-6325d",storageBucket:"pvt-h21-6325d.appspot.com",messagingSenderId:"333873683665",appId:"1:333873683665:web:c2cef6521d4a60a2f2b9f0"});var w=new S.a.AuthUI(d.a.auth()),y=d.a.firestore();function E(e){var t=e.utilisateur,a=e.etatDossiers,n=Object(l.a)(a,2),s=n[0],i=n[1];return console.log(s),Object(c.useEffect)((function(){function e(){return(e=Object(f.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,y.collection("utilisateurs-ex4").doc(t.uid).collection("dossiers").get();case 3:e.sent.forEach((function(e){a.push(Object(r.a)({id:e.id},e.data()))})),i(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)("ul",{className:"ListeDossiers",children:s.length>0?s.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(k,Object(r.a)({},e))},e.id)})):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("article",{className:"Dossier",style:{backgroundColor:"blue"},children:Object(b.jsx)("div",{className:"info",children:Object(b.jsx)("h2",{children:"Il n'y a pas de dossiers :)"})})})})})}var R=a(336),F=a(140),V=a.n(F);a(178),a(179);function M(){return Object(c.useEffect)((function(){return w.start("#firebaseui-widget",{signInOptions:[d.a.auth.GoogleAuthProvider.PROVIDER_ID,d.a.auth.FacebookAuthProvider.PROVIDER_ID,d.a.auth.GithubAuthProvider.PROVIDER_ID],signInFlow:"popup"},[])})),Object(b.jsxs)("div",{className:"Accueil",children:[Object(b.jsxs)("h3",{className:"logo",children:["Signets ",Object(b.jsx)("span",{children:"beta"})]}),Object(b.jsxs)("h2",{className:"amorce",children:["Organisez vos signets Web, ",Object(b.jsx)("br",{}),"Simple comme bonjour !"]}),Object(b.jsx)("h4",{className:"connexion-etiquette",children:"Connexion \xe0 Signets"}),Object(b.jsx)("div",{id:"firebaseui-widget"})]})}var P=a(333),z=a(337),L=a(339),T=a(335),B=a(334),q=a(340),G=a(141);function U(e){var t=e.ouvert,a=e.setOuvert,n=e.gererAjout,s=Object(c.useState)(""),i=Object(l.a)(s,2),r=i[0],o=i[1],u=Object(c.useState)(""),d=Object(l.a)(u,2),h=d[0],O=d[1],m=Object(c.useState)("#537169"),f=Object(l.a)(m,2),p=f[0],x=f[1],g=Object(P.a)({boutonVert:{background:"green",color:"white"},boutonRouge:{background:"red",color:"white"}});function v(){o(""),O(""),x("#537169")}return Object(b.jsx)("div",{className:"AjouterDossier",children:Object(b.jsxs)(L.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(q.a,{id:"form-dialog-title",children:"Ajouter un dossier"}),Object(b.jsxs)(B.a,{children:[Object(b.jsx)(z.a,{autoFocus:!0,margin:"normal",id:"nomDossier",label:"Nom du dossier",type:"text",fullWidth:!0,onChange:function(e){return o(e.target.value)},defaultValue:r}),Object(b.jsx)(z.a,{margin:"normal",id:"urlImage",label:"Adresse de l'image de couverture",type:"text",fullWidth:!0,onChange:function(e){return O(e.target.value)},defaultValue:h}),Object(b.jsx)(G.a,{width:"100%",triangle:"hide",colors:["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555"],onChangeComplete:function(e,t){return x(e.hex)},color:p})]}),Object(b.jsxs)(T.a,{children:[Object(b.jsx)(j.a,{onClick:function(){a(!1),v()},className:g().boutonRouge,children:"Annuler"}),Object(b.jsx)(j.a,{onClick:function(){""!==r&&n(r,h,p),v()},className:g().boutonVert,children:"Ajouter"})]})]})})}function W(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),u=i[0],j=i[1],O=Object(c.useState)(!1),m=Object(l.a)(O,2),f=m[0],p=m[1];return Object(c.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){n(e),e&&y.collection("utilisateurs-ex4").doc(e.uid).set({nom:e.displayName,courriel:e.email,datecompte:d.a.firestore.FieldValue.serverTimestamp()},{merge:!0})}))}),[]),Object(b.jsx)("div",{className:"Appli",children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{utilisateur:a}),Object(b.jsxs)("section",{className:"contenu-principal",children:[Object(b.jsx)(E,{utilisateur:a,etatDossiers:s}),Object(b.jsx)(U,{ouvert:f,setOuvert:p,gererAjout:function(e,t,c){var n={nom:e,couverture:t,couleur:c,datemodif:d.a.firestore.FieldValue.serverTimestamp(),signets:[]};y.collection("utilisateurs-ex4").doc(a.uid).collection("dossiers").add(n).then((function(e){e.get().then((function(e){return j([].concat(Object(o.a)(u),[Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id})]))})),p(!1)}))}}),Object(b.jsx)(R.a,{onClick:function(){return p(!0)},className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(b.jsx)(V.a,{})})]})]}):Object(b.jsx)(M,{})})}i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("racine"))}},[[286,1,2]]]);
//# sourceMappingURL=main.7d4d5139.chunk.js.map