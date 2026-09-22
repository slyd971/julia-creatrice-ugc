# Julia — Presskit

Presskit Next.js de Julia, créatrice de contenu & UGC (beauté, mode, lifestyle,
food, voyage). Structure directement inspirée du presskit Sophie Beauty.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Modifier le contenu

Tous les textes, chiffres et chemins d'images/vidéos sont centralisés dans
[`content/site.ts`](content/site.ts). Il suffit de modifier ce fichier — aucun
besoin de toucher aux composants React dans `components/`.

### ⚠️ À compléter

- **Légendes des vidéos portfolio** (`portfolio.items[].alt` dans
  `content/site.ts`) — à préciser si tu veux mentionner la marque/le contexte
  de chaque extrait.
- **Logos des marques** (section Références, `components/Brands.tsx`) —
  affichés en typographie faute de fichiers logo fournis. Pour passer aux
  vrais logos : déposer les fichiers (idéalement SVG/PNG transparent, fournis
  par les marques ou leurs brand kits officiels) dans `public/assets/brands/`,
  ajouter un champ `logo` à chaque entrée de `brands.items` dans
  `content/site.ts`, puis remplacer le texte par une balise `<Image>` dans
  `components/Brands.tsx`.

Il n'y a pas de section **Témoignages** : aucun retour de marque n'a été
fourni, donc rien n'a été inventé. Ajoute une section quand tu auras de vrais
témoignages (le composant `Testimonials` de Sophie Beauty peut servir de
modèle).

## Structure

- `app/` — layout, page d'accueil et styles globaux (`globals.css`)
- `components/` — un composant par section (Hero, Stats, Bio, Univers,
  Portfolio, Contact…)
- `content/site.ts` — contenu éditable (textes, chiffres, liens)
- `public/assets/` — photos et vidéos compressées pour le web
- `source-media/` — photothèque/vidéothèque source brute (non utilisée
  directement par le site)

> Note : `public/` (dossier Next.js) et `source-media/` sont volontairement
> deux dossiers distincts, même si macOS ne fait pas la différence entre
> majuscules et minuscules — sur un serveur Linux (Vercel, CI…) `public` et
> `Public` seraient deux dossiers différents, ce qui casserait le site en
> production.

## SEO

- Copier `.env.local.example` en `.env.local` et renseigner
  `NEXT_PUBLIC_SITE_URL` avec le vrai domaine une fois le site déployé
  (utilisé pour l'URL canonique, le sitemap, `robots.txt` et l'image de
  partage Open Graph). Sans cette variable, tout pointe vers
  `http://localhost:3000`.
  **Sur Vercel, `.env.local` n'est pas déployé** : il faut ajouter
  `NEXT_PUBLIC_SITE_URL` dans Project Settings → Environment Variables, puis
  redéployer pour que le build la prenne en compte.
- Métadonnées (titre, description, Open Graph, Twitter Card), favicon et
  image de partage sont générés automatiquement (`app/layout.tsx`,
  `app/icon.tsx`, `app/opengraph-image.tsx`) à partir de `content/site.ts`.
- `app/sitemap.ts` et `app/robots.ts` génèrent `/sitemap.xml` et
  `/robots.txt`.
- Données structurées (`schema.org/Person`) injectées via
  `components/StructuredData.tsx`.

## Build production

```bash
npm run build
npm start
```
