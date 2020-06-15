(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{359:function(t,e,a){"use strict";a.r(e);var n=a(43),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"relocating-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relocating-packages","aria-hidden":"true"}},[t._v("#")]),t._v(" Relocating Packages")]),t._v(" "),a("p",[t._v("Shadow is capable of scanning a project's classes and relocating specific dependencies to a new location.\nThis is often required when one of the dependencies is susceptible to breaking changes in versions or\nto classpath pollution in a downstream project.")]),t._v(" "),a("blockquote",[a("p",[t._v("Google's Guava and the ASM library are typical cases where package relocation can come in handy.")])]),t._v(" "),a("p",[t._v("Shadow uses the ASM library to modify class byte code to replace the package name and any import\nstatements for a class.\nAny non-class files that are stored within a package structure are also relocated to the new location.")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Relocating a Package")]),t._v("\nshadowJar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   relocate "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junit.framework'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadow.junit'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The code snippet will rewrite the location for any class in the "),a("code",[t._v("junit.framework")]),t._v(" to be "),a("code",[t._v("shadow.junit")]),t._v(".\nFor example, the class "),a("code",[t._v("junit.textui.TestRunner")]),t._v(" becomes "),a("code",[t._v("shadow.junit.TestRunner")]),t._v(".\nIn the resulting JAR, the class file is relocated from "),a("code",[t._v("junit/textui/TestRunner.class")]),t._v(" to\n"),a("code",[t._v("shadow/junit/TestRunner.class")]),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("Relocation operates at a package level.\nIt is not necessary to specify any patterns for matching, it will operate simply on the prefix\nprovided.")])]),t._v(" "),a("blockquote",[a("p",[t._v("Relocation will be applied globally to all instances of the matched prefix.\nThat is, it does "),a("strong",[t._v("not")]),t._v(" scope to "),a("em",[t._v("only")]),t._v(" the dependencies being shadowed.\nBe specific as possible when configuring relocation as to avoid unintended relocations.")])]),t._v(" "),a("h2",{attrs:{id:"filtering-relocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filtering-relocation","aria-hidden":"true"}},[t._v("#")]),t._v(" Filtering Relocation")]),t._v(" "),a("p",[t._v("Specific classes or files can be "),a("code",[t._v("included")]),t._v("/"),a("code",[t._v("excluded")]),t._v(" from the relocation operation if necessary. Use\n"),a("a",{attrs:{href:"https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant Path Matcher"),a("OutboundLink")],1),t._v("\nsyntax to specify matching path for your files and directories.")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configuring Filtering for Relocation")]),t._v("\nshadowJar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("relocate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junit.textui'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       exclude "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junit.textui.TestRunner'")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("relocate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junit.framework'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       include "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junit.framework.Test*'")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("For a more advanced path matching you might want to use "),a("a",{attrs:{href:"https://regexr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Regular Expressions"),a("OutboundLink")],1),t._v(" instead. Wrap the expresion in "),a("code",[t._v("%regex[]")]),t._v(" before\npassing it to "),a("code",[t._v("include")]),t._v("/"),a("code",[t._v("exclude")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configuring Filtering for Relocation with Regex")]),t._v("\nshadowJar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("relocate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       include "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%regex[org/foo/.*Factory[0-9].*]'")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"automatically-relocating-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatically-relocating-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" Automatically Relocating Dependencies")]),t._v(" "),a("p",[t._v("Shadow is shipped with a task that can be used to automatically configure all packages from all dependencies to be relocated.\nThis feature was formally shipped into a 2nd plugin ("),a("code",[t._v("com.github.johnrengelman.plugin-shadow")]),t._v(") but has been\nremoved for clarity reasons in version 4.0.0.")]),t._v(" "),a("p",[t._v("To configure automatic dependency relocation, declare a task of type "),a("code",[t._v("ConfigureShadowRelocation")]),t._v(" and configure the\n"),a("code",[t._v("target")]),t._v(" parameter to be the "),a("code",[t._v("ShadowJar")]),t._v(" task you wish to auto configure. You will also need to declare a task\ndependency so the tasks execute in the correct order.")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure Auto Relocation")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("jengelman"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("shadow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("tasks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("ConfigureShadowRelocation\n\ntask "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("relocateShadowJar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ConfigureShadowRelocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tasks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("shadowJar\n    prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"myapp"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Default value is "shadow"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ntasks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("shadowJar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("dependsOn tasks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("relocateShadowJar\n")])])]),a("blockquote",[a("p",[t._v("Configuring package auto relocation can add significant time to the shadow process as it will process all dependencies\nin the configurations declared to be shadowed. By default, this is the "),a("code",[t._v("runtime")]),t._v(" or "),a("code",[t._v("runtimeClasspath")]),t._v(" configurations.\nBe mindful that some Gradle plugins will automatically add dependencies to your class path. You may need to remove these\ndependencies if you do not intend to shadow them into your library.  The "),a("code",[t._v("java-gradle-plugin")]),t._v(" would normally cause such\nproblems if it were not for the special handling that Shadow provides as described in\n"),a("RouterLink",{attrs:{to:"/plugins/#special-handling-of-the-java-gradle-plugin-gevelopmeny-plugin"}},[t._v("Special Handling of the Java Gradle Plugin Development Plugin")]),t._v(".")],1)])])},[],!1,null,null,null);e.default=s.exports}}]);