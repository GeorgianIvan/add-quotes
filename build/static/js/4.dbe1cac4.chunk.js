(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{38:function(e,t,n){"use strict";var r=n(37),c=n(35),s=n(40),a=n(36),o=n.n(a),u=n(0);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(i,{status:t?"pending":null,data:null,error:null}),a=Object(s.a)(n,2),m=a[0],d=a[1],l=Object(u.useCallback)(function(){var t=Object(c.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,d({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:l},m)}},39:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return b}));var r=n(37),c=n(35),s=n(36),a=n.n(s),o="https://fir-realtime-db-b2e17-default-rtdb.firebaseio.com/";function u(){return i.apply(this,arguments)}function i(){return(i=Object(c.a)(a.a.mark((function e(){var t,n,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in c=[],n)u=Object(r.a)({id:s},n[s]),c.push(u);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(t){var n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return s=Object(r.a)({id:t},c),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function e(t){var n,c,s,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(u in s=[],c)i=Object(r.a)({id:u},c[u]),s.push(i);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},47:function(e,t,n){e.exports={comments:"Comments_comments__1Xt3g"}},48:function(e,t,n){e.exports={form:"NewCommentForm_form__w0ZaJ",loading:"NewCommentForm_loading__3fveR",control:"NewCommentForm_control__3v9Pp",actions:"NewCommentForm_actions__3TwsE"}},49:function(e,t,n){e.exports={item:"CommentItem_item__2Z_oK"}},50:function(e,t,n){e.exports={comments:"CommentsList_comments__2Yeez"}},52:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__3bJxN"}},54:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),s=n(8),a=n(40),o=n(51),u=n(38),i=n(39),m=n(14),d=n(47),l=n.n(d),j=n(48),p=n.n(j),f=n(1),b=function(e){var t=Object(r.useRef)(),n=Object(u.a)(i.a),c=n.sendRequest,s=n.status,a=n.error,o=e.onAddedComment;Object(r.useEffect)((function(){"completed"!==s||a||o()}),[s,a,o]);var d=function(n){n.preventDefault();var r=t.current.value;c({commentData:{text:r},quoteId:e.quoteId})};return Object(f.jsxs)("form",{className:p.a.form,onSubmit:d,children:["pending"===s&&Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(m.a,{})}),Object(f.jsxs)("div",{className:p.a.control,onSubmit:d,children:[Object(f.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(f.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(f.jsx)("div",{className:p.a.actions,children:Object(f.jsx)("button",{className:"btn",children:"Add Comment"})})]})},h=n(49),x=n.n(h),O=function(e){return Object(f.jsx)("li",{className:x.a.item,children:Object(f.jsx)("p",{children:e.text})})},v=n(50),w=n.n(v),g=function(e){return Object(f.jsx)("ul",{className:w.a.comments,children:e.comments.map((function(e){return Object(f.jsx)(O,{text:e.text},e.id)}))})},C=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(o.useParams)(),d=Object(u.a)(i.c),j=d.sendRequest,p=d.status,h=d.data;Object(r.useEffect)((function(){j(s.quoteId)}),[j,s.quoteId]);var x,O=Object(r.useCallback)((function(){j(s.quoteId)}),[j,s.quoteId]);return"pending"===p&&(x=Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(m.a,{})})),"completed"===p&&h&&(x=Object(f.jsx)(g,{comments:h})),"completed"!==p||h&&0!==h.length||(x=Object(f.jsx)("p",{className:"centered",children:" No comments added yet."})),Object(f.jsxs)("section",{className:l.a.comments,children:[Object(f.jsx)("h2",{children:"User Comments"}),!n&&Object(f.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(f.jsx)(b,{quoteId:s.quoteId,onAddedComment:O}),x]})},N=n(52),_=n.n(N),q=function(e){return Object(f.jsxs)("figure",{className:_.a.quote,children:[Object(f.jsx)("p",{children:e.text}),Object(f.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(c.useParams)(),t=Object(c.useRouteMatch)(),n=Object(u.a)(i.e,!0),a=n.sendRequest,o=n.status,d=n.data,l=n.error;return Object(r.useEffect)((function(){a(e.quoteId)}),[a,e.quoteId]),"pending"===o?Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(m.a,{})}):l?Object(f.jsx)("p",{className:"centered",children:l}):(console.log(d),d.text?Object(f.jsxs)(r.Fragment,{children:[Object(f.jsx)(q,{text:d.text,author:d.author}),Object(f.jsx)(c.Route,{path:t.path,exact:!0,children:Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(s.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),Object(f.jsx)(c.Route,{path:"".concat(t.path,"/comments"),children:Object(f.jsx)(C,{})})]}):Object(f.jsx)("p",{children:"No Quote Found!"}))}}}]);
//# sourceMappingURL=4.dbe1cac4.chunk.js.map