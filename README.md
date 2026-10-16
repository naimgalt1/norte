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

## Qué aprendí

- **Scope en GSAP.** Un selector global como `'[data-reveal]'` anima elementos de todas las secciones a la vez. Limitar la búsqueda al contenedor de cada sección (`scope.current.querySelectorAll`) lo arregló.
- **Un plugin no es un hook.** `useGSAP` se importa de `@gsap/react` y se usa dentro del componente; registrarlo con `gsap.registerPlugin` es un error que cometí y tuve que corregir.
- **Escena de R3F con movimiento.** `useFrame` recibe `delta`, así que las rotaciones quedan igual de suaves en pantallas de distinta frecuencia.
- **Z-index y posicionamiento.** Una regla de alta especificidad (`.hero > *`) sobrescribía el `position: absolute` del indicador de scroll. Aprendí a apuntar solo a los elementos que necesitan capa propia.

## Retos

- **Título de la portada a medio animar.** Al recargar en móvil mientras la pestaña no estaba en primer plano, las líneas del título se quedaban desplazadas. En una carga limpia la animación termina bien; el problema era del entorno de prueba, no de la web.
- **Menú móvil con scroll de fondo.** Mientras el menú está abierto, el `body` no debe desplazarse. Lo resolví con un efecto que fija `overflow: hidden` y lo restaura al cerrar.
- **Cursor personalizado.** Solo tiene sentido con ratón. Lo activo únicamente con `(hover: hover) and (pointer: fine)` para que no interfiera en móviles.
- **Revelados que no se disparaban.** Con `scrollTrigger` y `once: true` hay que asegurarse de que el elemento existe cuando se crea el trigger; la solución fue definir el alcance dentro del hook.
- **Imágenes externas.** Las rutas originales apuntaban a un servicio ajeno. Las mantengo como archivos locales en `public/images`.
