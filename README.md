# Nuxt3-Auth0 Web Application

Vue3でAuth0を使用して運用していたWebアプリをNuxt3へ移行する際、Auth0のNuxt用SDKはなく、非常に苦労しました。
最初は Auth0.js を使用して認証を実装しましたが、シークレットウィンドウや、ITPに対応しているsafariでログインできない問題が解決できませんでした。

このサンプルアプリでは、Vue用のSDKである auth0-vue を使用し、
Auth0のログイン、サイレント認証、アクセストークンを使用したAPI取得までを実装しています。
https://auth0.github.io/auth0-vue/index.html

誰かの助けになれば幸いです。

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
yarn install

```

Set your Auth0 account information and the domain of your API in a `.env` in the root of the project:

```bash
NUXT_PUBLIC_AUTH0_DOMAIN=**********
NUXT_PUBLIC_AUTH0_CLIENT_ID=**********
NUXT_PUBLIC_AUTH0_AUDIENCE=**********
NUXT_PUBLIC_API_HOST=**********

```

Then, replace the path below in `pages/index.vue` with your API path:

```bash
  const url = config.public.apiHost + '**********'

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev

```

## Production

Build the application for production:

```bash
yarn build

```

Locally preview production build:

```bash
yarn preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
