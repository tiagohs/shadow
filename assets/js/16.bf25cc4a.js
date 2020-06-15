(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{365:function(e,a,t){"use strict";t.r(a);var n=t(43),s=Object(n.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"using-shadow-to-package-gradle-plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-shadow-to-package-gradle-plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Shadow to Package Gradle Plugins")]),e._v(" "),t("p",[e._v("In some scenarios, writing a Gradle plugin can be problematic because your plugin may depend on a version that\nconflicts with the same dependency provided by the Gradle runtime. If this is the case, then you can utilize Shadow\nto relocate your dependencies to a different package name to avoid the collision.")]),e._v(" "),t("p",[e._v("Configuring the relocation has always been possible, but the build author is required to know all the package names\nbefore hand. Shadow v2.0 corrects this by introducing a new task type "),t("code",[e._v("ConfigureShadowRelocation")]),e._v(".\nTasks of this type are configured to target an instance of a "),t("code",[e._v("ShadowJar")]),e._v(" task and run immediately before it.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("ConfigureShadowRelocation")]),e._v(" task, scans the dependencies from the configurations specified on the associated\n"),t("code",[e._v("ShadowJar")]),e._v(" task and collects the package names contained within them. It then configures relocation for these\npackages using the specified "),t("code",[e._v("prefix")]),e._v(" on the associated "),t("code",[e._v("ShadowJar")]),e._v(" task.")]),e._v(" "),t("p",[e._v("While this is useful for developing Gradle plugins, nothing about the "),t("code",[e._v("ConfigureShadowRelocation")]),e._v(" task is tied to\nGradle projects. It can be used for standard Java or Groovy projects.")]),e._v(" "),t("p",[e._v("A simple Gradle plugin can use this feature by applying the "),t("code",[e._v("shadow")]),e._v(" plugin and configuring the relocation task\nto execute before the "),t("code",[e._v("shadowJar")]),e._v(" tasks:")]),e._v(" "),t("div",{staticClass:"language-groovy no-plugins extra-class"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" com"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("github"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("jengelman"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("gradle"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("shadow"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("tasks"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("ConfigureShadowRelocation\n\nplugins "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  id "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'com.github.johnrengelman.shadow'")]),e._v(" version "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'6.0.0'")]),e._v("\n  id "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'java'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\ndependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    shadow "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("localGroovy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    shadow "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("gradleApi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n    compile "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'org.jdom:jdom2:2.0.6'")]),e._v("\n    compile "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'org.ow2.asm:asm:6.0'")]),e._v("\n    compile "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'org.ow2.asm:asm-commons:6.0'")]),e._v("\n    compile "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'commons-io:commons-io:2.4'")]),e._v("\n    compile "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'org.apache.ant:ant:1.9.4'")]),e._v("\n    compile "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'org.codehaus.plexus:plexus-utils:2.0.6'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\ntask "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("relocateShadowJar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ConfigureShadowRelocation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    target "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" tasks"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("shadowJar\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\ntasks"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("shadowJar"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("dependsOn tasks"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v("relocateShadowJar\n")])])]),t("p",[e._v("Note that the "),t("code",[e._v("localGroovy()")]),e._v(" and "),t("code",[e._v("gradleApi()")]),e._v(" dependencies are added to the "),t("code",[e._v("shadow")]),e._v(" configuration instead of the\nnormal "),t("code",[e._v("compile")]),e._v(" configuration. These 2 dependencies are provided by Gradle to compile your project but are ultimately\nprovided by the Gradle runtime when executing the plugin. Thus, it is "),t("strong",[e._v("not")]),e._v(" advisable to bundle these dependencies\nwith your plugin.")]),e._v(" "),t("h2",{attrs:{id:"special-handling-of-the-java-gradle-plugin-development-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#special-handling-of-the-java-gradle-plugin-development-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Special Handling of the Java Gradle Plugin Development Plugin")]),e._v(" "),t("p",[e._v("The Java Gradle Plugin Development plugin, "),t("code",[e._v("java-gradle-plugin")]),e._v(", automatically adds the full Gradle API to the "),t("code",[e._v("compile")]),e._v("\nconfiguration; thus overriding a possible assignment of "),t("code",[e._v("gradleApi()")]),e._v(" to the "),t("code",[e._v("shadow")]),e._v(" configuration.  Since it is never\na good idea to include the Gradle API when creating a Gradle plugin, the dependency is removed so that it is not\nincluded in the resultant shadow jar.  Virtually:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// needed to prevent inclusion of gradle-api into shadow JAR\nconfigurations.compile.dependencies.remove dependencies.gradleApi()\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);