
# 二、用户管理模块--配置抽离、登录认证鉴权

## 1. 配置抽离 
  ### 1.1 配置
  `pnpm add @nestjs/config`, AppModule 引入 
  ```
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: 'src/.env'
  })
  ```
  src新建 .env  (根目录下的配置文件不会自动复制到 dist 目录)

  nest-cli.json 里加一下 assets 的配置
  ```
  "compilerOptions": {
    ***
    "watchAssets": true,
    "assets": ["**/*.env"]
  }
  ```
  ### 1.2 使用
  `configService.get('nest_server_port')`
  
  `inject: [ConfigService]`
