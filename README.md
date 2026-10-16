# Norte Studio — Landing de agencia

Landing page para una agencia de diseño y branding, construida con **React**, **React Three Fiber** y **GSAP**.

## Scripts

```bash
npm install
npm run dev      # servidor de desarrollo (Vite)
npm run build    # build de producción
npm run preview  # previsualizar el build
```

## Qué hay en cada parte

- **Hero**: escena 3D con React Three Fiber (malla wireframe + partículas que siguen el puntero) y entrada de texto con GSAP.
- **Reveal al hacer scroll**: `useScrollReveal` anima con ScrollTrigger los elementos marcados con `data-reveal`.
- **Cursor y menú móvil**: componentes independientes con su propio CSS.

## Estructura

```
src/
├─ components/   Una sección = un componente + su CSS (Hero, Manifesto, Portfolio…)
├─ hooks/        useScrollReveal (GSAP + ScrollTrigger)
├─ data/         Textos, proyectos y equipo
├─ styles/       Tokens y base global
└─ App.jsx       Composición de la página
public/images/   Imágenes de proyectos y equipo
```
