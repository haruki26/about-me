/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfielImport } from './routes/profiel'
import { Route as FavoriteImport } from './routes/favorite'
import { Route as ContactImport } from './routes/contact'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ProfielRoute = ProfielImport.update({
  path: '/profiel',
  getParentRoute: () => rootRoute,
} as any)

const FavoriteRoute = FavoriteImport.update({
  path: '/favorite',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/favorite': {
      id: '/favorite'
      path: '/favorite'
      fullPath: '/favorite'
      preLoaderRoute: typeof FavoriteImport
      parentRoute: typeof rootRoute
    }
    '/profiel': {
      id: '/profiel'
      path: '/profiel'
      fullPath: '/profiel'
      preLoaderRoute: typeof ProfielImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  ContactRoute,
  FavoriteRoute,
  ProfielRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/contact",
        "/favorite",
        "/profiel"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/favorite": {
      "filePath": "favorite.tsx"
    },
    "/profiel": {
      "filePath": "profiel.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
