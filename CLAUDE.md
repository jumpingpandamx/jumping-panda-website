# Sistema de diseño — Jumping Panda (dirección "simple")

Capa visual + de copy que se aplica a TODO el sitio. Funciona **junto con** los briefs de
contenido: los briefs definen QUÉ dice cada página; este archivo define CÓMO se ve y se
siente. Principio rector: **menos, pero mejor** — espacio, claridad, una idea por sección
y una acción principal.

Inspiración: los *principios* de Wispr Flow (aire, restricción, copy corto, un CTA), NO su
diseño. La identidad sigue siendo Jumping Panda: panda + rosa, pero **rosa como acento**,
no como bloques de fondo.

> **Estado del rollout:** el home (`index.html`) ya usa este sistema. Las 8 páginas de
> `servicios/` y `podcast/` siguen con el skin anterior (documentado en `README.md`) y se
> migran una por una tras revisión. Al terminar, actualizar el `README.md`.

---

## Decisión tomada: CTA único

- **CTA principal (mismo texto en todo el sitio):** `Agenda tu diagnóstico`
  - Destino: WhatsApp → `https://wa.me/527229313202` (`target="_blank" rel="noopener"`).
- **CTA secundario (discreto, texto o contorno):** `Tengo una pregunta` → mismo WhatsApp.
- No inventar variantes ("Agendar gratis", "Quiero platicar", "Cita diagnóstico"…). Si un
  brief trae otro texto de botón, se reemplaza por estos dos.

---

## Tokens

### Color
| Token | Valor | Uso |
|-------|-------|-----|
| Fondo | `#FBF6EE` | Fondo de TODO el sitio (crema cálido, claro y aireado) |
| Superficie | `#fff` | Tarjetas ligeras sobre el crema |
| Texto | `#141414` | Titulares y cuerpo (casi negro, nunca negro puro) |
| Texto secundario | `#55524d` | Subtítulos, descripciones |
| Texto terciario | `#8a867f` | Metadatos, pies, notas legales |
| Acento rosa | `#e45b8f` | SOLO botones principales, enlaces y detalles pequeños |
| Hairline | `rgba(20,20,20,.08)` | Bordes sutiles y separadores |

Reglas duras:
- **Prohibido** el rosa como fondo de sección a sangre completa.
- **Prohibidas** las secciones oscuras (`#141414` de fondo). El sitio es claro; se separa
  con **espacio**, no con bloques de color.
- Sombras: mínimas o ninguna. Nada de sombras duras `0 5px 0 #141414` ni elevaciones pesadas.

### Tipografía
- **Una sola familia:** Hanken Grotesk (Google Fonts), pesos 400, 600, 700, 800.
  (Bricolage Grotesque queda fuera de esta dirección.)
- Titulares: grandes y tranquilos, `font-weight:800`, `letter-spacing:-.03em`,
  `line-height:1.02–1.1`, pocas palabras.
- Cuerpo: 16–19px, `line-height:1.6`, ancho de línea cómodo (`max-width:~34em`).
- Sin mayúsculas sostenidas, sin eyebrows en uppercase, pocos tamaños.

### Espaciado y layout
- Contenedor: `max-width:1100px; margin:0 auto; padding:0 24px`.
- Ritmo entre secciones: `padding: clamp(72px,10vw,130px) 24px` — mucho aire vertical.
- El texto nunca va de borde a borde; bloques de texto centrados usan `max-width:~700px`.

### Botones
- **Principal:** sólido rosa `#e45b8f`, texto `#141414`, `font-weight:700`,
  `padding:15px 30px`, `border-radius:999px`. Hover: leve lift (`translateY(-2px)`).
  Texto: siempre `Agenda tu diagnóstico`.
- **Secundario:** enlace de texto `#141414` subrayado sutil, o contorno hairline. Nunca
  compite con el principal. Texto: `Tengo una pregunta` (o enlace contextual discreto).
- Un solo estilo de botón en todo el sitio. Nunca dos botones rosas juntos.

### Bordes, tarjetas y profundidad
- Tarjetas: fondo `#fff`, borde `1px solid rgba(20,20,20,.08)`, radio 16–20px, sin sombra.
- Separadores: hairline o, mejor, solo espacio.
- Imágenes: radio 20–24px, sin marcos gruesos, sin badges flotantes encima.

### Movimiento
- Casi nada. Se permite: el marquee lento de logos de clientes (grayscale) y transiciones
  de hover sutiles (`.2s`). Se elimina: scroll-reveals, elementos flotando/bobbing.

---

## Reglas de copy

- **Titulares = una afirmación o beneficio en ≤ 8 palabras.** No describir; afirmar.
- **Subtítulos: una sola línea.**
- Segunda persona (tú), lenguaje simple y concreto, sin jerga.
- **Una idea por sección.** Recortar muros de texto; el aire hace el resto.
- Español de México. Tono cálido con un toque de personalidad panda, con moderación.

## Patrones de sección

- **Hero:** título corto + una línea de subtítulo + UN botón principal + un enlace
  secundario discreto. Fondo claro. Imagen limpia con aire (sin overlays ni badges).
- **Secciones de contenido:** título corto + poco texto + visual opcional + CTA opcional.
  Nada de multicolumnas densas.
- **Listas / "Qué incluye":** listas aireadas o tarjetas blancas hairline; nunca tarjetas
  grises u oscuras pesadas.
- **Proceso:** pasos numerados limpios con mucho espacio (número pequeño en rosa).
- **Contacto / CTA final:** sección clara; el rosa vive SOLO en el botón.
- **Header:** sticky, crema translúcido, logo + nav sobria + botón principal.
- **Footer:** claro, separado por hairline superior, texto secundario/terciario.

## Instrucciones de implementación

- Reutilizar la estructura Design Component existente (`<x-dc>`, `support.js`, estilos
  inline, `sc-for`/`sc-if`) — no crear un sistema paralelo. Ver `README.md` para el runtime.
- Mantener la estructura de contenido de los briefs; esto cambia el look & feel y acorta
  el copy, no la información.
- Migrar página por página y **parar para revisión** después de cada una.
- Header/footer/nav están duplicados por archivo: al migrar una página, copiar el
  header/footer del `index.html` ya migrado (ajustando rutas relativas `../`).
