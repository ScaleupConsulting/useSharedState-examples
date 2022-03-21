This project serves as a demo of the use of a simple hook that can be used to share state between multiple React components.

It relies on EventTarget, and as such is only currently supported in browsers.  There is a line of code to disable it for SSR environments.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can watch a demo for this on our Youtube channel here: https://youtu.be/UmwZa0N53cY

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  It should look the same as https://ScaleupConsulting.github.io/useSharedState

You can see two examples of multiple components which share state.

The first example shows two text fields which change together.

The second example shows pairs of checkboxes which change together.  This example is provided for working with an array, and is not a special case of the hook.
