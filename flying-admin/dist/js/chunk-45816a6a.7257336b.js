(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45816a6a"],{"6da2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app")},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",{staticStyle:{padding:"24px"}},[a("add-app",{ref:"add",attrs:{parent:3}}),a("update-app",{ref:"update"}),a("a-layout-content",{style:{background:"#fff",padding:"0 ",margin:0,minHeight:"700px"}},[a("a-card",{attrs:{title:e.generateTitle("App.appManagement"),bordered:!1,size:"small",headStyle:{backgroundColor:"#42b983",color:"#fff"},bodyStyle:{padding:"24px"}}},[a("a-button",{staticClass:"editable-add-btn",staticStyle:{"margin-bottom":"8px"},attrs:{type:"primary"},on:{click:function(t){return e.addShow()}}},[e._v(" "+e._s(e.generateTitle("App.addApp"))+" ")]),a("a-table",{attrs:{columns:e.columns,"data-source":e.appList,"row-key":function(e){return e.id},pagination:e.pagination},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"name",fn:function(t){return a("a",{},[e._v(e._s(t))])}},{key:"node",fn:function(t){return a("span",{},e._l(t,(function(t){return a("a-tag",{key:t,attrs:{color:"loser"===t?"volcano":t.length>1?"#87d068":"#108ee9"}},[e._v(" "+e._s(t.toUpperCase())+" ")])})),1)}},{key:"createTime",fn:function(t){return a("span",{},[e._v(e._s(e._f("formatDate")(t)))])}},{key:"action",fn:function(t,n,o){return a("span",{},[a("a-space",[a("a-config-provider",{attrs:{"auto-insert-space-in-button":!1}},[a("a-button",{attrs:{type:"primary"},on:{click:function(a){return e.updateShow(t.id)}}},[e._v(" "+e._s(e.generateTitle("App.update"))+" ")])],1),a("a-button",{attrs:{type:"danger"},on:{click:function(a){return e.showDeleteConfirm(t)}}},[e._v(" "+e._s(e.generateTitle("App.delete"))+" ")])],1)],1)}}])},[a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[a("a-icon",{attrs:{type:"smile-o"}}),e._v(" Name")],1)])],1)],1)],1)},i=[],s=(a("b0c0"),a("5530")),p=a("0f66"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dev",[a("a-drawer",{attrs:{title:e.generateTitle("App.updateApp"),width:500,visible:e.visible,"body-style":{paddingBottom:"80px"},closable:!1,destroyOnClose:!0,VNode:"slot"},on:{close:e.onClose}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:20}},[a("a-form-model-item",{ref:"appId",attrs:{label:e.generateTitle("App.List.appId"),prop:"appId"}},[a("a-input",{attrs:{placeholder:e.generateTitle("App.placeholder.appId"),disabled:"true"},model:{value:e.form.appId,callback:function(t){e.$set(e.form,"appId",t)},expression:"form.appId"}})],1)],1)],1),a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:20}},[a("a-form-model-item",{ref:"name",attrs:{label:e.generateTitle("App.List.appName"),prop:"name"}},[a("a-input",{attrs:{placeholder:e.generateTitle("App.placeholder.appName")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1)],1),a("a-row",{attrs:{gutter:20}},[a("a-alert",{attrs:{message:e.generateTitle("App.placeholder.updateCheckNode"),banner:"",type:"warning",closable:""}})],1),a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:20}},[a("a-form-model-item",{attrs:{label:e.generateTitle("Node.node"),prop:"nodes"}},[a("a-checkbox-group",{model:{value:e.form.nodes,callback:function(t){e.$set(e.form,"nodes",t)},expression:"form.nodes"}},[e._l(e.nodeList,(function(t){return[a("a-tooltip",[t.status?e._e():a("template",{slot:"title"},[e._v(" "+e._s(e.generateTitle("App.placeholder.selectNode"))+" ")]),a("a-checkbox",{staticStyle:{"margin-right":"25px"},attrs:{value:t.id,name:t.name,disabled:!t.status}},[e._v(" "+e._s(t.name)+" ")])],2)]}))],2)],1)],1)],1)],1),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:e.onClose}},[e._v(" "+e._s(e.generateTitle("Button.cancel"))+" ")]),a("a-button",{attrs:{type:"primary",loading:e.iconLoading},on:{click:e.submit}},[e._v(" "+e._s(e.generateTitle("Button.update"))+" ")])],1)],1)],1)},c=[],d=a("b562"),u=a("79fa"),m=a("f06c"),f={name:"AddApp",data:function(){return{form:{appId:"",name:"",nodes:[]},visible:!1,nodeList:[],iconLoading:!1}},computed:{rules:function(){return{appId:[{required:!0,message:this.generateTitle("App.Verification.pleaseInputAppId"),trigger:"blur"}],name:[{required:!0,message:this.generateTitle("App.Verification.pleaseInputAppName"),trigger:"blur"}],nodes:[{type:"array",required:!0,message:this.generateTitle("App.Verification.selectNode"),trigger:"change"}]}}},created:function(){this.getNodeAll()},methods:{generateTitle:u["a"],showModal:function(e){this.visible=!0,this.findApp(e)},findApp:function(e){var t=this;Object(d["c"])(e).then((function(e){console.log(e),t.form=e.data.data.app}))},getNodeAll:function(){var e=this;Object(p["e"])().then((function(t){e.nodeList=t.data.data.list}))},submit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.iconLoading=!0,Object(d["e"])(e.form).then((function(t){e.iconLoading=!1,Object(m["a"])(e,t.data)&&(e.visible=!1,e.resetForm(),e.$parent.$parent.$parent.getAppList())}))}))},onClose:function(){this.visible=!1,this.iconLoading=!1,this.resetForm()},resetForm:function(){this.$refs.ruleForm.resetFields()}}},g=f,h=(a("f939"),a("2877")),b=Object(h["a"])(g,l,c,!1,null,"73ac56da",null),A=b.exports,v=a("91d0"),y=a("c466"),T={data:function(){var e=this;return{appList:[],pagination:{defaultPageSize:5,onShowSizeChange:function(t,a){return e.pageSize=a},total:0}}},computed:{columns:function(){return[{title:this.generateTitle("App.List.appName"),dataIndex:"name",key:"name",slots:{title:"customTitle"},scopedSlots:{customRender:"name"}},{title:this.generateTitle("App.List.appId"),dataIndex:"appId",key:"appId"},{title:this.generateTitle("App.List.useEnvironment"),key:"node",dataIndex:"node",scopedSlots:{customRender:"node"}},{title:this.generateTitle("App.List.createTime"),dataIndex:"createTime",key:"createTime",scopedSlots:{customRender:"createTime"}},{title:this.generateTitle("App.List.operation"),key:"action",scopedSlots:{customRender:"action"}}]}},components:{UpdateApp:A,AddApp:v["a"]},filters:{formatDate:function(e){if(null!=e&&""!=e){var t=new Date(e);return Object(y["a"])(t,"yyyy-MM-dd hh:mm:ss")}return""}},mounted:function(){this.getAppList()},methods:{generateTitle:u["a"],addShow:function(){this.$refs.add.showModal()},updateShow:function(e){this.$refs.update.showModal(e)},handleTableChange:function(e){console.log(e);var t=Object(s["a"])({},this.pagination);t.current=e.current,this.pagination=t,this.getAppList({results:e.pageSize,page:e.current})},getAppList:function(){var e=this;Object(d["d"])(this.params).then((function(t){var a=Object(s["a"])({},e.pagination);console.log(t),a.total=t.data.data.total,e.pagination=a,e.appList=t.data.data.list}))},showDeleteConfirm:function(e){var t=this;this.$createElement;console.log(e.name);var a=this;this.$confirm({title:function(a){return a("div",{style:""},[t.$t("App.areDelete"),a("span",{style:"color: red; font-size: 20px"},[e.name])])},content:this.$t("App.confirmDelete"),okText:this.$t("Button.determine"),okType:"danger",cancelText:this.$t("Button.cancel"),onOk:function(){Object(d["b"])(e).then((function(e){Object(m["a"])(a,e.data)&&a.getAppList()}))},onCancel:function(){console.log("Cancel")}})}}},_=T,x=Object(h["a"])(_,r,i,!1,null,null,null),k=x.exports,w={name:"AppList",components:{App:k}},L=w,I=Object(h["a"])(L,n,o,!1,null,"6b8e1a24",null);t["default"]=I.exports},8255:function(e,t,a){"use strict";a("ae00")},"91d0":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dev",[a("a-drawer",{attrs:{title:e.generateTitle("App.addApp"),width:500,visible:e.visible,"body-style":{paddingBottom:"80px"},closable:!1,destroyOnClose:!0,VNode:"slot"},on:{close:e.onClose}},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:20}},[a("a-form-model-item",{ref:"appId",attrs:{label:e.generateTitle("App.List.appId"),prop:"appId"}},[a("a-input",{attrs:{placeholder:e.generateTitle("App.placeholder.appId")},model:{value:e.form.appId,callback:function(t){e.$set(e.form,"appId",t)},expression:"form.appId"}})],1)],1)],1),a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:20}},[a("a-form-model-item",{ref:"name",attrs:{label:e.generateTitle("App.List.appName"),prop:"name"}},[a("a-input",{attrs:{placeholder:e.generateTitle("App.placeholder.appName")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1)],1),a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:20}},[a("a-form-model-item",{attrs:{label:e.generateTitle("Node.node"),prop:"nodes"}},[a("a-checkbox-group",{model:{value:e.form.nodes,callback:function(t){e.$set(e.form,"nodes",t)},expression:"form.nodes"}},[e._l(e.nodeList,(function(t){return[a("a-tooltip",[t.status?e._e():a("template",{slot:"title"},[e._v(" "+e._s(e.generateTitle("App.placeholder.selectNode"))+" ")]),a("a-checkbox",{staticStyle:{"margin-right":"25px"},attrs:{value:t.id,name:t.name,disabled:!t.status}},[e._v(" "+e._s(t.name)+" ")])],2)]}))],2)],1)],1)],1)],1),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:e.onClose}},[e._v(" "+e._s(e.generateTitle("Button.cancel"))+" ")]),a("a-button",{attrs:{type:"primary",loading:e.iconLoading},on:{click:e.submit}},[e._v(" "+e._s(e.generateTitle("Button.create"))+" ")])],1)],1)],1)},o=[],r=a("0f66"),i=a("b562"),s=a("79fa"),p=a("f06c"),l={name:"AddApp",data:function(){return{form:{appId:"",name:"",nodes:[]},visible:!1,nodeList:[],iconLoading:!1}},computed:{rules:function(){return{appId:[{required:!0,message:this.generateTitle("App.Verification.pleaseInputAppId"),trigger:"blur"}],name:[{required:!0,message:this.generateTitle("App.Verification.pleaseInputAppName"),trigger:"blur"}],nodes:[{type:"array",required:!0,message:this.generateTitle("App.Verification.selectNode"),trigger:"change"}]}}},props:["parent"],created:function(){this.getNodeAll()},methods:{generateTitle:s["a"],showModal:function(){this.visible=!0},getNodeAll:function(){var e=this;Object(r["e"])().then((function(t){e.nodeList=t.data.data.list}))},submit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.iconLoading=!0,Object(i["a"])(e.form).then((function(t){e.iconLoading=!1,Object(p["a"])(e,t.data)&&(e.visible=!1,3===e.parent?e.$parent.$parent.$parent.getAppList():e.$parent.refreshApp(),e.resetForm())}))}))},onClose:function(){this.visible=!1,this.iconLoading=!1,this.resetForm()},resetForm:function(){this.$refs.ruleForm.resetFields()}}},c=l,d=(a("8255"),a("2877")),u=Object(d["a"])(c,n,o,!1,null,"49cfcc4e",null);t["a"]=u.exports},ae00:function(e,t,a){},b562:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return p}));var n=a("b5c6");function o(e){return Object(n["a"])({url:"/app/getAppList",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/app/createApp",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/app/deleteApp",method:"delete",data:e})}function s(e){return Object(n["a"])({url:"/app/findApp/"+e,method:"get"})}function p(e){return Object(n["a"])({url:"/app/updateApp",method:"put",data:e})}},db60:function(e,t,a){},f939:function(e,t,a){"use strict";a("db60")}}]);