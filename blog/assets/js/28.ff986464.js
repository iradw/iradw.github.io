(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{523:function(s,n,a){"use strict";a.r(n);var t=a(4),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("使用Linux作为主力系统已经1周了，踩了一些坑，但是比之前在学校使用"),a("code",[s._v("Ubuntu")]),s._v("时遇到的问题少很多，"),a("code",[s._v("ArchLinux")]),s._v("系的"),a("code",[s._v("manjaro")]),s._v("，生态较好，安装软件除了官方软件仓库外，还可以从"),a("a",{attrs:{href:"https://aur.archlinux.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("AUR"),a("OutboundLink")],1),s._v("下载。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("保险起见，不要将windows系统删除，较新的电脑安装双系统比较容易，Linux下的钉钉、qq等功能不完全，比如钉钉没有投屏、云打印，有些版本不能收到消息通知、不能在线预览文件、没有截图功能。")])]),s._v(" "),a("h2",{attrs:{id:"yarn、npm权限问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn、npm权限问题"}},[s._v("#")]),s._v(" yarn、npm权限问题")]),s._v(" "),a("p",[s._v("每次使用"),a("code",[s._v("yarn或npm")]),s._v("启动项目或者安装依赖时，都需要"),a("code",[s._v("sudo")]),s._v("，每次都要多敲5个字符，还要输入密码，非常麻烦。这个问题的原因是当前用户对"),a("code",[s._v("npm")]),s._v("全局安装目录(默认好像是"),a("code",[s._v("/usr")]),s._v("下面的某个目录)的写权限不够，解决方法如下")]),s._v(" "),a("ol",[a("li",[s._v("在用户目录下创建两个文件夹"),a("code",[s._v(".npm-global")]),s._v("和"),a("code",[s._v(".npm-cache")]),s._v("，前者用来存储全局依赖，后者做缓存。"),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/.npm-global\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/.npm-cache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[s._v("修改"),a("code",[s._v("npm")]),s._v("和"),a("code",[s._v("yarn")]),s._v("的全局安装位置"),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改yarn全局依赖安装位置")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global-folder "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/.npm-global"')]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改yarn缓存位置")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" cache-folder "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/.npm-cache"')]),s._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改npm全局依赖安装位置")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" prefix "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/.npm-global"')]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改npm缓存位置")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" cache "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/.npm-cache"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])]),s._v(" "),a("li",[s._v("配置环境变量"),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" ~/.profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),s._v("写入"),a("code",[s._v("export PATH=~/.npm-global/bin:$PATH")]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使环境变量生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])]),s._v(" "),a("p",[s._v("这样执行"),a("code",[s._v("yarn")]),s._v("或"),a("code",[s._v("npm")]),s._v("命令时就不需要使用"),a("code",[s._v("sudo")]),s._v("了")])])}),[],!1,null,null,null);n.default=e.exports}}]);