# Norte Studio — Landing de agencia de diseño

Landing page para una agencia de diseño y branding, desarrollada por **Naim Galet Naieb**. La idea era que la web se comportara como el propio estudio: animaciones precisas, una portada con presencia 3D y una sección de portfolio que se revela al hacer scroll.

🔗 **Demo:** https://naim-norte.vercel.app

## Stack y por qué lo elegí

| Tecnología | Por qué la elegí |
|---|---|
| **React 19** | Mismo criterio que en el resto de proyectos: componentes pequeños, cada uno con su CSS, y datos en `src/data/`. |
| **React Three Fiber** | Quería la escena 3D de la portada dentro del árbol de React, con estado y props, en lugar de un canvas gestionado a mano. `useFrame` me permite animar la malla frame a frame de forma declarativa. |
| **GSAP + ScrollTrigger** | Para secuencias de animación con control fino (la entrada del título línea a línea y las revelaciones al hacer scroll). GSAP es más preciso que CSS para timelines con solapamientos. |
| **@gsap/react** | Su hook `useGSAP` ejecuta las animaciones dentro de un scope y las limpia al desmontar, lo que evita fugas en StrictMode. |
| **Vite** | Build rápido y configuración mínima. |

## Estructura

```
src/
├─ components/   Una sección = un componente + su CSS (Hero, Manifesto, Portfolio…)
├─ hooks/        useScrollReveal: revelado con GSAP + ScrollTrigger
├─ data/         Textos, proyectos y equipo
├─ styles/       Tokens y base global
└─ App.jsx       Composición de la página
public/images/   Imágenes de proyectos y equipo
```

## Scripts

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
```


## Lecciones técnicas

- **Scope en GSAP.** Un selector global como `'[data-reveal]'` anima elementos de todas las secciones a la vez. Limitar la búsqueda al contenedor de cada sección (`scope.current.querySelectorAll`) lo evita.
- **`useGSAP` es un hook, no un plugin.** Se importa de `@gsap/react` y se usa dentro del componente. Registrarlo con `gsap.registerPlugin` no tiene efecto.
- **Animación por frame en R3F.** `useFrame` recibe `delta`, así que las rotaciones son iguales en pantallas de distinta frecuencia de refresco.
- **Especificidad y posicionamiento.** Una regla genérica como `.hero > *` sobrescribe `position: absolute` de elementos internos. Conviene apuntar solo a los elementos que necesitan capa propia.

## Problemas resueltos

- **Título a medio animar al recargar.** Las animaciones de GSAP se pausan en pestañas en segundo plano; en una carga normal terminan correctamente.
- **Scroll de fondo con el menú abierto.** Un efecto fija `overflow: hidden` en el `body` mientras el menú está abierto y lo restaura al cerrarlo.
- **Cursor personalizado en móviles.** Se activa solo con `(hover: hover) and (pointer: fine)` para no interferir con el toque.
- **Revelados que no se disparaban.** El trigger de ScrollTrigger debe crearse cuando el elemento ya existe; el alcance se define dentro del hook.
- **Dependencia de imágenes externas.** Las imágenes se mantienen como archivos locales en `public/images`.
