# TypeScript Express Serverless Template

in this template is setup to deploy to [Amazon Web Services](https://aws.amazon.com/) on region [ap-southeast-1](https://en.wikipedia.org/wiki/Singapore) with disable [Versioning Deployed Functions](https://www.serverless.com/framework/docs/providers/aws/guide/functions#versioning-deployed-functions)

[Prisma](https://github.com/prisma/prisma) installation
```
prisma generate
prisma db push
```

installation
```
yarn install
```
or
```
npm install
```

to start (build and start)
```
npm run start
```

to build
```
npm run build
```

to deploy development stage
```
npm run deploy-dev
```

to deploy production stage
```
npm run deploy-prod
```

to seed example data
```
npm run seed
```