webpackJsonp([1],{102:function(e,t){},103:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jodel",class:e.jodel.color},[n("router-link",{attrs:{to:e._a(0,function(){return{name:"jodel",params:{id:e.jodel.id}}})}},[n("div",{staticClass:"jodel--wrapper_left"},[n("div",{staticClass:"jodel--info"},[n("span",[e._v(e._s(e.jodel.location))]),e._v(" "),n("span",[e._v(" ∙ Main Feed ∙ ")]),e._v(" "),n("span",[e._v(e._s(e.timeAgo))])]),e._v(" "),n("div",{staticClass:"jodel--body"},[n("p",[e._v(e._s(e.jodel.text))]),e._v(" "),this.pressed?e._e():n("div",{staticClass:"jodel--backpic"}),e._v(" "),e.jodel.img&&!this.pressed?n("div",{staticClass:"jodel--pic",on:{touchstart:function(t){t.preventDefault(),e.startPress(t)},touchend:function(t){t.preventDefault(),e.stopPress(t)},touchcancel:function(t){t.preventDefault(),e.stopPress(t)}}},[n("i",{staticClass:"material-icons"},[e._v("photo_camera")]),e._v(" Gedrückt halten")]):e._e(),e._v(" "),this.pressed?n("div",{staticClass:"jodel--bigpic"},[n("img",{attrs:{src:this.jodel.img}})]):e._e()])])]),e._v(" "),n("div",{staticClass:"jodel--vote"},[n("span",{class:{disabled:e.votedOn},on:{click:function(t){e.vote(1)}}},[n("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_up")])]),e._v(" "),n("span",[e._v(e._s(e.jodel.score))]),e._v(" "),n("span",{class:{disabled:e.votedOn},on:{click:function(t){e.vote(-1)}}},[n("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_down")])])]),e._v(" "),n("div",{staticClass:"jodel--footer"},[n("span",[e.jodel.comments.length>0?n("span",[n("i",{staticClass:"material-icons"},[e._v("comment")]),e._v(" "+e._s(e.jodel.comments.length))]):e._e()]),e._v(" "),n("span",[e._v("...")]),e._v(" "),n("span")])],1)},a=[],s={render:o,staticRenderFns:a};t.a=s},106:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",[e._m(0),e._v(" "),n("span",{staticClass:"city-title"},[e._v(e._s(e.location))]),e._v(" "),n("span",{staticClass:"karma-counter"},[e._v("\n        +"+e._s(e.karma)),n("span",[e._v("MEIN KARMA")])])]),e._v(" "),n("main",e._l(e.jodels,function(e){return n("jodel",{key:e.id,attrs:{jodel:e}})})),e._v(" "),n("footer",[n("span",{class:["recent"===e.activeTab?"footer--active":""],on:{click:function(t){e.recentJodels()}}},[n("i",{staticClass:"material-icons"},[e._v("access_time")])]),e._v(" "),n("span",{staticClass:"footer--center",class:["comments"===e.activeTab?"footer--active":""],on:{click:function(t){e.mostCommentedJodels()}}},[n("i",{staticClass:"material-icons"},[e._v("comment")])]),e._v(" "),n("span",{class:["top"===e.activeTab?"footer--active":""],on:{click:function(t){e.topJodels()}}},[n("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_up")])])]),e._v(" "),n("router-link",{attrs:{to:"/new"}},[n("div",{staticClass:"btn--new-jodel"})])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("i",{staticClass:"material-icons"},[e._v("wifi_tethering")])])}],s={render:o,staticRenderFns:a};t.a=s},107:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s={render:o,staticRenderFns:a};t.a=s},108:function(e,t,n){"use strict";var o=n(41),a=n(109),s=n(45),i=n(110),c=n(195),r=n(50);o.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Home",component:s.a},{name:"newjodel",component:i.a,path:"/new"},{name:"jodel",component:c.a,path:"/jodel/:id"},{path:"/camera",name:"camera",component:r.a}]})},110:function(e,t,n){"use strict";function o(e){n(111)}var a=n(49),s=n(194),i=n(9),c=o,r=i(a.a,s.a,!1,c,"data-v-a94c778e",null);t.a=r.exports},111:function(e,t){},112:function(e,t){},193:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"camera-modal"},[n("video",{ref:"video",staticClass:"camera-stream"}),e._v(" "),n("div",{staticClass:"camera-modal-container"},[n("span",{on:{click:e.capture}})]),e._v(" "),n("div",{on:{click:e.back}},[e._v("back")])])},a=[],s={render:o,staticRenderFns:a};t.a=s},194:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"new_jodel"},[n("header",{staticClass:"new_jodel--header"},[n("span",{on:{click:function(t){e.$router.go(-1)}}},[n("i",{staticClass:"material-icons"},[e._v("arrow_back")])]),e._v(" "),n("span"),e._v(" "),n("span",{on:{click:function(t){e.createJodel()}}},[e._v("Senden")])]),e._v(" "),n("main",{class:e.color},[this.taken?e._e():n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{name:"newjodel",rows:"8",cols:"80",maxlength:"240",placeholder:"Teile hier deine Gedanken und Erlebnisse mit den Studenten in deiner Umgebung!"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),e._v(" "),this.taken?n("img",{attrs:{src:e.img}}):e._e(),e._v(" "),this.picJodel?n("camera",{on:{pictureTaken:function(t){e.savePic(t)}}}):e._e()],1),e._v(" "),n("footer",[n("div",{staticClass:"takephoto",on:{click:function(t){e.picJodel=!0}}},[n("i",{staticClass:"material-icons"},[e._v("photo_camera")])])])])},a=[],s={render:o,staticRenderFns:a};t.a=s},195:function(e,t,n){"use strict";function o(e){n(196)}var a=n(91),s=n(200),i=n(9),c=o,r=i(a.a,s.a,!1,c,"data-v-1cb5a2a8",null);t.a=r.exports},196:function(e,t){},197:function(e,t,n){"use strict";function o(e){n(198)}var a=n(92),s=n(199),i=n(9),c=o,r=i(a.a,s.a,!1,c,"data-v-1408d882",null);t.a=r.exports},198:function(e,t){},199:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment"},[n("div",{staticClass:"comment--info"},[n("span",[e._v(e._s(e.comment.location))]),e._v(" "),n("span",[e._v(" ∙ Main Feed ∙ ")]),e._v(" "),n("span",[e._v(e._s(e.timeAgo))])]),e._v(" "),n("div",{staticClass:"comment--body"},[n("p",[e._v(e._s(e.comment.text))])]),e._v(" "),n("div",{staticClass:"comment--vote"},[n("span",{class:{disabled:e.votedOn},on:{click:function(t){e.vote(1)}}},[n("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_up")])]),e._v(" "),n("span",[e._v(e._s(e.comment.score))]),e._v(" "),n("span",{class:{disabled:e.votedOn},on:{click:function(t){e.vote(-1)}}},[n("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_down")])])]),e._v(" "),e._m(0)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment--footer"},[n("span"),e._v(" "),n("span",[e._v("...")]),e._v(" "),n("span")])}],s={render:o,staticRenderFns:a};t.a=s},200:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jodel__detail",class:e.jodel.color},[n("header",{staticClass:"new_jodel--header"},[n("span",{on:{click:function(t){e.$router.push("/")}}},[n("i",{staticClass:"material-icons"},[e._v("arrow_back")])]),e._v(" "),n("span"),e._v(" "),e._m(0)]),e._v(" "),n("main",[n("jodel",{attrs:{jodel:e.jodel}}),e._v(" "),e._l(e.jodel.comments,function(e){return n("comment",{key:e.id,attrs:{comment:e}})})],2),e._v(" "),n("footer",[n("div",{staticClass:"newcomment"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newComment,expression:"newComment"}],attrs:{type:"text",name:"",placeholder:"#GoodVibesOnly",maxlength:"240"},domProps:{value:e.newComment},on:{input:function(t){t.target.composing||(e.newComment=t.target.value)}}}),e._v(" "),""!==e.newComment?n("span",{staticClass:"comment__send",on:{click:function(t){e.submitComment()}}},[n("i",{staticClass:"material-icons"},[e._v("send")])]):e._e(),e._v(" "),""===e.newComment?n("span",{staticClass:"comment__pic"},[n("i",{staticClass:"material-icons"},[e._v("photo_camera")])]):e._e()])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("i",{staticClass:"material-icons"},[e._v("share")])])}],s={render:o,staticRenderFns:a};t.a=s},202:function(e,t){},44:function(e,t,n){"use strict";var o=n(45);t.a={name:"app",components:{JodelList:o.a}}},45:function(e,t,n){"use strict";function o(e){n(98)}var a=n(46),s=n(106),i=n(9),c=o,r=i(a.a,s.a,!1,c,"data-v-c643b524",null);t.a=r.exports},46:function(e,t,n){"use strict";var o=n(99),a=n.n(o),s=n(47),i=n(104);n.n(i);t.a={name:"jodellist",data:function(){return{jodels:[],karma:"100",location:"Leipzig",activeTab:"recent"}},components:{Jodel:s.a},mounted:function(){this.getJodels()},methods:{getJodels:function(){navigator.onLine?(console.log("online"),this.saveJodelstoCache()):(console.log("offline"),this.jodels=JSON.parse(localStorage.getItem("jodels")))},saveJodelstoCache:function(){var e=this;this.$http.get("https://fehler40.uber.space/vuedel/jodel/").then(function(t){e.jodels=t.body,e.recentJodels(),e.jodels=e.countComments(e.jodels),localStorage.setItem("jodels",a()(e.jodels))},function(e){console.log(e)})},countComments:function(e){return e.map(function(e){var t=e.comments.length;return e.numberOfComments=t,e})},recentJodels:function(){this.jodels=_.orderBy(this.jodels,"createdAt","desc"),this.activeTab="recent",window.scroll({top:0,left:0,behavior:"smooth"})},topJodels:function(){this.jodels=_.orderBy(this.jodels,"score","desc"),this.activeTab="top",window.scroll({top:0,left:0,behavior:"smooth"})},mostCommentedJodels:function(){this.jodels=_.orderBy(this.jodels,"numberOfComments","desc"),this.activeTab="comments",window.scroll({top:0,left:0,behavior:"smooth"})}},computed:{}}},47:function(e,t,n){"use strict";function o(e){n(102)}var a=n(48),s=n(103),i=n(9),c=o,r=i(a.a,s.a,!1,c,"data-v-5d2e63b9",null);t.a=r.exports},48:function(e,t,n){"use strict";t.a={name:"jodel",props:["jodel"],data:function(){return{votedOn:!1,pressed:!1}},methods:{vote:function(e){var t=this;this.votedOn||this.$http.get("https://fehler40.uber.space/vuedel/vote/jodel?id="+this.jodel.id+"&vote="+e).then(function(n){t.jodel.score+=e,t.votedOn=!0})},startPress:function(){this.pressed=!0},stopPress:function(){this.pressed=!1}},computed:{timeAgo:function(){var e=new Date(this.jodel.createdAt),t=new Date,n=Math.floor((t-e)/1e3);switch(!0){case n<60:return console.log("case seconds"),n+"s";case n>=60&&n<3600:return Math.floor(n/60)+"min";case n>=3600&&n<86400:return Math.floor(n/3600)+"h";case n>=86400:return Math.floor(n/86400)+" Tage";default:return"irgendwann"}}}}},49:function(e,t,n){"use strict";var o=n(50);t.a={name:"newjodel",data:function(){return{color:this.randomColor(),text:"",picJodel:!1,img:"",taken:!1}},components:{Camera:o.a},methods:{randomColor:function(){var e=["orange","yellow","red","blue","bluegrey","green"];return e[Math.floor(Math.random()*e.length)]},savePic:function(e){console.log("pic: ",e),this.img=e,this.taken=!0},createJodel:function(){var e=this;console.log("create: ",this.img),this.$http.post("https://fehler40.uber.space/vuedel/jodel/create",{text:this.text,color:this.color,img:this.img}).then(function(t){console.log(t);var n=t.body.id;e.$router.push({name:"jodel",params:{id:n}})},function(e){console.log("http error")})}}}},50:function(e,t,n){"use strict";function o(e){n(112)}var a=n(51),s=n(193),i=n(9),c=o,r=i(a.a,s.a,!1,c,"data-v-2dd2d606",null);t.a=r.exports},51:function(e,t,n){"use strict";var o=n(52);t.a={name:"camera",mounted:function(){var e=this;navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"}}}).then(function(t){e.mediaStream=t,e.$refs.video.srcObject=t,e.$refs.video.play()}).catch(function(e){return console.error("getUserMedia() error:",e)})},destroyed:function(){this.mediaStream.getTracks().map(function(e){return e.stop()}),console.log("camera destroyed")},methods:{back:function(){this.$parent.$data.picJodel=!1},capture:function(){var e=this,t=this.mediaStream.getVideoTracks()[0];new window.ImageCapture(t).takePhoto().then(function(t){o.a.ref().child("images/picture-"+(new Date).getTime()).put(t).then(function(t){console.log(t);var n=t.downloadURL;e.$emit("pictureTaken",n),e.back()})})}}}},52:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(113),a=n.n(o),s={apiKey:"AIzaSyCtJehoCB7QSbwX85x-OyUcOSBAfTISivs",authDomain:"vuedel-56616.firebaseapp.com",databaseURL:"https://vuedel-56616.firebaseio.com",projectId:"vuedel-56616",storageBucket:"vuedel-56616.appspot.com",messagingSenderId:"434577888210"};a.a.initializeApp(s);var i=a.a.storage();a.a.database()},91:function(e,t,n){"use strict";var o=n(47),a=n(197);t.a={name:"detail",components:{jodel:o.a,comment:a.a},data:function(){return{id:this.$route.params.id,jodel:{},newComment:""}},mounted:function(){this.getJodel()},methods:{getJodel:function(){var e=this;if(navigator.onLine)this.$http.get("https://fehler40.uber.space/vuedel/jodel/"+this.id).then(function(t){e.jodel=t.body,console.log(e.jodel)},function(e){console.log("http error")});else{var t=JSON.parse(localStorage.getItem("jodels"));this.jodel=_.find(t,{id:this.id})}},submitComment:function(){var e=this;this.$http.post("https://fehler40.uber.space/vuedel/comment/create",{parent:this.id,text:this.newComment}).then(function(t){console.log(t),e.$router.go()},function(e){console.log("http error")})}}}},92:function(e,t,n){"use strict";t.a={name:"comment",props:["comment"],data:function(){return{votedOn:!1}},methods:{vote:function(e){var t=this;this.votedOn||this.$http.get("https://fehler40.uber.space/vuedel/vote/comment?id="+this.comment.id+"&vote="+e).then(function(n){t.comment.score+=e,t.votedOn=!0})}},computed:{timeAgo:function(){var e=new Date(this.comment.createdAt),t=new Date,n=Math.floor((t-e)/1e3);switch(!0){case n<60:return console.log("case seconds"),n+"s";case n>=60&&n<3600:return Math.floor(n/60)+"min";case n>=3600&&n<86400:return Math.floor(n/3600)+"h";case n>=86400:return Math.floor(n/86400)+" Tage";default:return"irgendwann"}}}}},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(41),a=n(95),s=n(108),i=n(201),c=n(203),r=n.n(c);n(52);o.a.config.productionTip=!1;var l=s.a;o.a.use(i.a),o.a.use(r.a),new o.a({el:"#app",router:l,template:"<App/>",components:{App:a.a}}).$mount("#app")},95:function(e,t,n){"use strict";function o(e){n(96)}var a=n(44),s=n(107),i=n(9),c=o,r=i(a.a,s.a,!1,c,null,null);t.a=r.exports},96:function(e,t){},98:function(e,t){}},[93]);
//# sourceMappingURL=app.c1c23fc545ebdee891c7.js.map