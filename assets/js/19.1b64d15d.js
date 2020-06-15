(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{368:function(n,t,a){"use strict";a.r(t);var s=a(43),e=Object(s.a)({},function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"publishing-shadow-jars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishing-shadow-jars","aria-hidden":"true"}},[n._v("#")]),n._v(" Publishing Shadow JARs")]),n._v(" "),a("h2",{attrs:{id:"publishing-with-maven-publish-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishing-with-maven-publish-plugin","aria-hidden":"true"}},[n._v("#")]),n._v(" Publishing with Maven-Publish Plugin")]),n._v(" "),a("p",[n._v("The Shadow plugin will automatically configure the necessary tasks in the presence of Gradle's\n"),a("code",[n._v("maven-publish")]),n._v(" plugin.\nThe plugin provides the "),a("code",[n._v("component")]),n._v(" method from the "),a("code",[n._v("shadow")]),n._v(" extension to configure the\npublication with the necessary artifact and dependencies in the POM file.")]),n._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// Publishing a Shadow JAR with the Maven-Publish Plugin")]),n._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'java'")]),n._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'maven-publish'")]),n._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'com.github.johnrengelman.shadow'")]),n._v("\n\npublishing "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n  publications "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("MavenPublication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v(" publication "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("->")]),n._v("\n      project"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(".")]),n._v("shadow"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("publication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n  repositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n      url "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[n._v('"http://repo.myorg.com"')]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),a("h2",{attrs:{id:"publishing-with-maven-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishing-with-maven-plugin","aria-hidden":"true"}},[n._v("#")]),n._v(" Publishing with Maven Plugin")]),n._v(" "),a("p",[n._v("The Shadow plugin will automatically configure the necessary tasks in the presence of Gradle's\n"),a("code",[n._v("maven")]),n._v(" plugin.\nTo publish the JAR, simply configure the publish location for the "),a("code",[n._v("uploadShadow")]),n._v(" task and execute it.")]),n._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// Publishing a Shadow JAR with the Maven Plugin")]),n._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'java'")]),n._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'maven'")]),n._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'com.github.johnrengelman.shadow'")]),n._v("\n\nuploadShadow "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n  repositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    mavenDeployer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[n._v('"http://repo.myorg.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),a("h2",{attrs:{id:"shadow-configuration-and-publishing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shadow-configuration-and-publishing","aria-hidden":"true"}},[n._v("#")]),n._v(" Shadow Configuration and Publishing")]),n._v(" "),a("p",[n._v("The Shadow plugin provides a custom configuration ("),a("code",[n._v("configurations.shadow")]),n._v(") to specify\nruntime dependencies that are "),a("strong",[n._v("not")]),n._v(" merged into the final JAR file.\nWhen configuring publishing with the Shadow plugin, the dependencies in the "),a("code",[n._v("shadow")]),n._v("\nconfiguration, are translated to become "),a("code",[n._v("RUNTIME")]),n._v(" scoped dependencies of the\npublished artifact.")]),n._v(" "),a("p",[n._v("No other dependencies are automatically configured for inclusion in the POM file.\nFor example, excluded dependencies are "),a("strong",[n._v("not")]),n._v(" automatically added to the POM file or\nif the configuration for merging are modified by specifying\n"),a("code",[n._v("shadowJar.configurations = [configurations.myconfiguration]")]),n._v(", there is no automatic\nconfiguration of the POM file.")]),n._v(" "),a("p",[n._v("This automatic configuration occurs "),a("em",[n._v("only")]),n._v(" when using the above methods for\nconfiguring publishing. If this behavior is not desirable, then publishing "),a("strong",[n._v("must")]),n._v("\nbe manually configured.")])])},[],!1,null,null,null);t.default=e.exports}}]);