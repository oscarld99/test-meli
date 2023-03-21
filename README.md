## Test Mercado libre

The content of this test includes:

- React js
- Sass
- Typescript
- React Router Dom
- Test with testing Library
- Module css/scss
- Http client with fetch (I prefer not to use axios or any other library)
- MockData


## Preview

![image](https://user-images.githubusercontent.com/74792282/226700425-a10124bf-90ed-49ca-987c-3680136047cb.png)

![image](https://user-images.githubusercontent.com/74792282/226700915-897d6240-0e5e-4f8d-bbcb-4a9c22bbf078.png)

![image](https://user-images.githubusercontent.com/74792282/226700989-9e05aa59-d391-4002-a397-4ca8bd2db470.png)



## Getting Started

First, install the dependencies

``` bash
# install dependencies
npm install
```

Then, create an .env file and then copy the contents of the env.example file:

Then, run application:

```bash
npm start
```

## Documentation

### Folder Architecture

``` bash
├ TEST-MELI
├── build
├── node_modules
├── public
├── src
│   ├── __mocks__
│   ├── api
│   │   └── items
│   │       ├── index.ts
│   │       └── ItemsApi.ts
│   ├── assets
│   │   │── images
│   │   └── styles
│   │── components
│   │   └── Component
│   │       ├── Component.module.scss
│   │       └── index.tsx
│   ├── config
│   │   └── server
│   │       └── index.ts
│   ├── interfaces
│   ├── lib
│   │   └── client
│   │       └── index.tsx
│   ├── pages
│   │   │── Page
│   │   │   ├── Page.tsx
│   │   │   ├── Page.module.scss
│   │   │   └── Page.test.tsx
│   │   └── index.ts
│   ├── routes
│   │   └── items
│   │       ├── index.ts
│   │       └── Items.service.ts
│   ├── services
│   └── utils
├── .env /* you must create this file */
├── .gitignore
├── env.example
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```
