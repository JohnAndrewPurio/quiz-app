(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(18),s=c.n(r),a=c(14),o=c.n(a),i=c(19),u=c(6),j=(c(29),c(23)),l=(c(30),c(20)),h=c.n(l),b=c(1),d={spread:360,startVelocity:70,elementCount:100,duration:2e3};function O(e){var t=e.choice,c=e.index,n=e.checkAnswer,r=e.chosenAnswer,s=e.answeredCorrect,a=e.disabled,o=e.correctAnswer,i=c===r,u=c===o;return console.log(s,i,c,r,o),Object(b.jsxs)("button",{className:a?"disabled ".concat(i?s?"correct":"mistaken":u?"correct":""):"choice",onClick:function(){return n(c)},disabled:a,children:[Object(b.jsx)("h2",{dangerouslySetInnerHTML:{__html:t}}),Object(b.jsx)(h.a,{active:s&&i,config:d})]})}function x(e){var t=e.question;return Object(b.jsx)("div",{className:"question",children:Object(b.jsx)("h2",{dangerouslySetInnerHTML:{__html:t}})})}var f=c(2);function m(e){var t=e.timerLength,c={width:"".concat(t,"%"),backgroundColor:"".concat(t<=30?"firebrick":t<=60?"orange":"#adff2f")};return Object(b.jsx)("div",{className:"timer",style:c})}function p(e){var t=e.quizData,c=Object(n.useState)(0),r=Object(u.a)(c,2),s=r[0],a=r[1],o=Object(n.useState)(!1),i=Object(u.a)(o,2),l=i[0],h=i[1],d=Object(n.useState)(null),p=Object(u.a)(d,2),v=p[0],w=p[1],g=Object(n.useState)(0),S=Object(u.a)(g,2),q=S[0],y=S[1],N=Object(n.useState)(!1),_=Object(u.a)(N,2),k=_[0],C=_[1],T=Object(n.useState)([]),z=Object(u.a)(T,2),A=z[0],I=z[1],L=Object(n.useState)(100),M=Object(u.a)(L,2),D=M[0],H=M[1],E=Object(n.useState)(""),J=Object(u.a)(E,2),Y=J[0],B=J[1],K=Object(n.useState)(""),Q=Object(u.a)(K,2),R=Q[0],V=Q[1],F=t[s];Object(n.useEffect)((function(){s<t.length&&(G(),clearInterval(Y),clearTimeout(R))}),[s]);var G=function(){var e=setInterval((function(){return H((function(e){return e-.2}))}),10),t=setTimeout((function(){return P(-1)}),5e3);V(t),B(e)},P=function(e){var t=e===F.correctChoice,c=t?q+1:q,n=Object(j.a)(A);n.push(e),clearInterval(Y),clearTimeout(R),H(0),I(n),y(c),w(e),h(t),C(!0),setTimeout((function(){return U()}),3e3)},U=function(){var e=s+1;H(100),a(e),C(!1)};return console.log("Yay"),s===t.length?(clearTimeout(R),Object(b.jsx)(f.a,{to:{pathname:"/results",state:{score:q,quizData:t,answers:A}}})):Object(b.jsxs)("div",{className:"quiz",children:[Object(b.jsx)(m,{timerLength:D}),Object(b.jsx)("div",{className:"score",children:Object(b.jsxs)("h3",{children:["Score: ",q]})}),Object(b.jsx)(x,{question:F.question}),Object(b.jsx)("div",{className:"choices",children:F.choices.map((function(e,t){return Object(b.jsx)(O,{choice:e,index:t,checkAnswer:P,chosenAnswer:v,answeredCorrect:l,disabled:k,correctAnswer:F.correctChoice},e)}))})]})}var v=c(22);c(38);function w(e){var t=e.answers,c=e.quizData;return Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Question"}),Object(b.jsx)("th",{children:"Your Answer"}),Object(b.jsx)("th",{children:"Correct Answer"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{dangerouslySetInnerHTML:{__html:c[t].question}}),Object(b.jsx)("td",{className:"answers ".concat(e===c[t].correctChoice?"correct":"mistaken"),dangerouslySetInnerHTML:{__html:c[t].choices[e]}}),Object(b.jsx)("td",{className:"answers correct",dangerouslySetInnerHTML:{__html:c[t].choices[c[t].correctChoice]}})]},t)}))})]})}c(39);function g(e){var t=e.data,c=t.answers,n=t.quizData,r=t.score;return Object(b.jsxs)("div",{className:"results",children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("h1",{children:"Results"}),Object(b.jsxs)("h3",{children:["Score: ",r," / ",n.length]})]}),Object(b.jsx)(w,{answers:c,quizData:n})]})}function S(){return Object(b.jsx)("div",{className:"start",children:"Let's test your Knowledge"})}function q(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=function(){var e=Object(i.a)(o.a.mark((function e(){var t,c,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://opentdb.com/api.php?amount=10&category=19&type=multiple");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n=c.results,s=n.map((function(e){var t=e.question,c=e.correct_answer,n=e.incorrect_answers;console.log(t,c,n);var r={question:t,choices:n},s=Math.floor(Math.random()*r.choices.length+1);return r.choices.splice(s,0,c),r.correctChoice=s,r})),r(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(v.a,{children:Object(b.jsxs)(f.d,{children:[Object(b.jsx)(f.b,{exact:!0,path:"/",children:0===c.length?Object(b.jsx)("h2",{children:"Loading..."}):Object(b.jsx)(p,{quizData:c})}),Object(b.jsx)(f.b,{exact:!0,path:"/start",children:Object(b.jsx)(S,{})}),Object(b.jsx)(f.b,{exact:!0,path:"/results",render:function(e){return Object(b.jsx)(g,{data:e.location.state})}})]})})})}s.a.render(Object(b.jsx)(q,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.068c09ab.chunk.js.map