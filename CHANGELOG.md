# Change Log

## v0.0.33


- fix(cli) fix FilterWarningsPlugin configuration
- fix(typeorm) fix typeorm component configuration

- fix(cli) 修复 FilterWarningsPlugin 配置
- fix(typeorm) 修复 typeorm 组件配置


## v0.0.32
- The feat(cli) compilation process supports progress display
- The local operation of feat(cli) disables the PWA function by default, which can be manually turned on through malagu.webpack.workboxWebpackPlugin.generateInDevMode configuration, and the PWA function will be automatically turned on when publishing
- feat(cli) admin-app template update
- feat(core) optimize online and local log levels
- feat(widget) completes the design and implementation of the first version of the widget. The widget provides the ability to dynamically assemble, configure and expand the front-end page, and it is also the basic ability of the future micro-front-end and visualization
- feat(shell) adds a shell component and provides a highly extensible layout component by default
- feat(react) completed the first version of Slot design and implementation, so that front-end components can be injected into a slot, and dynamically manage front-end components, namely widgets
- feat(widget+react+grommet) internationalization, multi-theme, communication between front-end components (rxjs) design and implementation
- feat (cli) template supports github actions configuration

- feat(cli) 编译构建过程支持进度显示
- feat(cli) 本地运行默认关闭 PWA 功能，可以通过 malagu.webpack.workboxWebpackPlugin.generateInDevMode 配置手动开启，发布的时候会自动开启 PWA 功能
- feat(cli) admin-app 模板更新
- feat(core) 优化线上和本地日志级别
- feat(widget) 完成 widget 第一版设计与实现，通过 widget 提供前端页面的动态组装、配置和扩展的能力，同时也是未来微前端和可视化的基础能力
- feat(shell) 添加 shell 组件，默认提供了一个高度可扩展的布局组件
- feat(react) 完成第一版 Slot 设计与实现，让前端组件可以被注入到某个 Slot，动态管理前端组件，即 widget
- feat(widget+react+grommet) 国际化、多主题、前端组件之间通信（rxjs）设计与实现
- feat（cli）模板支持github actions 配置

## v0.0.31

- feat(fc-adapter + scf-adapter + express-adapter) supports urlencoded request content type
- feat(fc-adapter + scf-adapter + express-adapter) 支持urlencoded 请求内容类型

## v0.0.30

- fix(fc-adapter) Fix and optimize HTTS certificate configuration
- fix(fc-adapter) 修复并优化 HTTS 证书配置

## v0.0.29

- feat(cli+core) In the configuration of a node in the component configuration, if the _ignoreEl attribute is true, the expression calculation of the configuration node and child nodes is ignored
- feat(cli+core) ignores the expression calculation under the configuration node such as env by default

- feat(cli+core) 组件配置中某个节点配置如果存在 _ignoreEl 属性为 true，则忽略该配置节点以及子节点的表达式计算
- feat(cli+core) 默认忽略 env 等配置节点下面的表达式计算

## v0.0.28

- feat(cli) Change the compilation target to es6
- feat(cli) 变更编译目标到 es6

## v0.0.27

- fix(cli) Fix malagu init command execution failure
- fix(cli) 修复 malagu init 命令执行失败

## v0.0.26

- fix(react+material-ul) remove @Context id

## v0.0.25
- feat(cli) optimizes command line execution speed by loading modules on demand
- feat(core) front-end application is no longer directly in the body, and provides a div container with an id of malagu.hostDomId
- feat(cli) provides a default html template, if the index.html file exists in the project root directory, it will overwrite the default provided template
- feat(serve-static) defines two component attributes: path and apiPath, path matches the front-end route, and apiPath matches the back-end route
- feat(cli) adds the base tag to the default html template to allow the resources in html to be loaded by absolute routing
- feat(cli) serve, build and deploy add parameter entry and options -t, --targets uniformly, support non-malagu framework operation, build and deployment
- feat(cli) build command adds options -o, --output, custom code output location

- feat(cli) 通过按需加载模块优化命令行执行速度
- feat(core) 前端应用不再直接 body 里面，提供了一个 id 为 malagu.hostDomId 的 div 容器
- feat(cli) 提供一个默认的 html 模板，如果项目根目录存在 index.html 文件，会覆盖默认提供的模板
- feat(serve-static) 定义了两个组件属性：path 和 apiPath，path 匹配的前端路由，而 apiPath 匹配的是后端路由
- feat(cli) 默认 html 模板中添加 base 标签，让 html 中的资源以绝对路由的方式加载
- feat(cli) serve、build 和 deploy 统一添加参数 entry 和选项 -t, --targets，支持非 malagu 框架运行、构建和部署
- feat(cli) build 命令添加选项 -o, --output，自定义代码输出位置


## v0.0.24

- feat(cli) add admin-app application template
- feat(cli) deployment command no longer checks mode when skipping build
- feat(cli) supports automatic identification of favicon.ico in the root directory of the project
- feat(cli) supports generating resource manifest.json to facilitate access to the micro front-end system
- feat(cli) front-end application supports SPA
- feat(serve-static) optimizes the static resource caching strategy, js, css, pictures and other resources are permanently cached by default, and the HTML file is cached for 5 seconds
- fix(cli) Fix the sourcemap file contains the local path information of the packaged user
- fix(cli) Fix the problem of infinite loop when loading configuration file based on mode
- fix(fc-adapter) Fix the version/alias of the custom domain name binding does not follow the deployment environment

- feat(cli) 添加 admin-app 应用模板
- feat(cli) 部署命令跳过构建时不再检查 mode
- feat(cli) 支持自动识别在项目根目录下的 favicon.ico
- feat(cli) 支持生成资源 manifest.json，方便接入微前端体系
- feat(cli) 前端应用支持 SPA
- feat(serve-static) 优化静态资源缓存策略，js、css 和图片等资源默认永久缓存，html 文件缓存 5 秒
- fix(cli) 修复  sourcemap 文件中包含打包用户的本地路径信息
- fix(cli) 修复基于 mode 加载配置文件出现死循环问题
- fix(fc-adapter) 修复自定义域名绑定的版本/别名没有跟着部署环境走

## v0.0.23

- feat(scf-adapter) Add scf-adapter component
- feat(cli) Optimize multi-environment design
- feat(fc-adapter) The non-custom function of fc-adapter uses fc-express proxy forwarding
- feat(cli) Add scf related templates
- feat(vercel-adapter) Alter zeit-adapter to vercel-adapter

## v0.0.22

- feat(fc-adpater) Optimized the default value of malagu.server.endpoint
- feat(cli) The sample-app template adds serve-static dependencies
- feat(fc-adpater) Optimized configHooks logic

## v0.0.21

- fix(fc-adapter) Fix malagu.server.path default value
- fix(fc-adapter) Delete function initialization function entry
- fix(fc-adapter) Fix function handler path

## v0.0.20

- Modify build command options --skipBuild to --skip-build
- The configuration file supports runtime expression definition: ${{xxx}}
- Resources support multi-regional deployment

## v0.0.19

- feat(fc-adapter) support custom runtime
- feat(serve-static) add component serve-static
- feat(cli) support config hook
- feat(fc-adapter) support custom domain
- feat(cli) deploy command supports skip build process option