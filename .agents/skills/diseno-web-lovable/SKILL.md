---
name: diseno-web-lovable
description: Genera interfaces web con la misma calidad visual que produce Lovable — sistema de tokens de diseño semánticos, gradientes y sombras de marca, variantes de componentes, modo claro/oscuro correcto y tipografía cuidada. Úsala SIEMPRE que el usuario pida crear o mejorar una landing page, dashboard, componente de React, pantalla nueva, o diga cosas como "que se vea bonito", "dale un diseño profesional", "hazlo como Lovable/v0", incluso si no menciona la palabra "diseño" explícitamente. Aplica a proyectos Vite + React + TypeScript + Tailwind CSS, con lucide-react o tabler-icons.
---

# Diseño Web estilo Lovable

Skill para producir UI con la calidad "wow" que entregan herramientas como Lovable: no por magia, sino por seguir disciplinadamente un **sistema de tokens de diseño** en vez de estilos sueltos por componente.

Stack objetivo: Vite + React + TypeScript (.tsx) + Tailwind CSS + lucide-react / tabler-icons. Si el proyecto usa shadcn/ui, mejor todavía (ver sección 5); si no, el mismo patrón funciona con componentes propios.

## Regla de oro

**Nunca escribas un color, sombra o gradiente "a mano" dentro de un componente.** Todo color vive como variable en `index.css`, se expone en `tailwind.config.ts`, y se consume por nombre semántico (`bg-primary`, `text-foreground`, `shadow-elegant`...).

Prohibido en cualquier `className`: `bg-white`, `bg-black`, `text-white`, `text-black`, `#hexcode` directo, `rgb(...)` directo. Si necesitas ese color, primero conviértelo en token.

## Flujo de trabajo (en este orden)

### 1. Definir la paleta antes de tocar componentes

Antes de escribir un solo componente, pregúntate (o pregúntale al usuario si no está claro):
- ¿Qué sensación busca la marca/producto? (serio/corporativo, playful, premium/oscuro, minimalista, cálido...)
- ¿Color primario y un color de acento que contraste bien?
- ¿Habrá modo oscuro desde el día uno, o se agrega después?

### 2. Escribir los tokens en `src/index.css`

Usar **HSL** para todos los colores (facilita generar variantes claras/oscuras del mismo tono con solo cambiar el % de luminosidad).

```css
:root {
  /* Base */
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;

  /* Marca */
  --primary: 222 89% 55%;
  --primary-foreground: 0 0% 100%;
  --primary-glow: 222 89% 70%;

  --secondary: 210 40% 96%;
  --secondary-foreground: 222 47% 11%;

  --accent: 280 65% 60%;
  --accent-foreground: 0 0% 100%;

  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;

  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;

  --border: 214 32% 91%;

  /* Gradientes (siempre a partir de los tokens de arriba) */
  --gradient-primary: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)));
  --gradient-subtle: linear-gradient(180deg, hsl(var(--background)), hsl(var(--secondary)));

  /* Sombras con tinte de marca (no grises genéricos) */
  --shadow-elegant: 0 10px 30px -10px hsl(var(--primary) / 0.3);
  --shadow-glow: 0 0 40px hsl(var(--primary-glow) / 0.4);

  /* Movimiento */
  --transition-smooth: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  --radius: 0.75rem;
}

.dark {
  --background: 222 47% 8%;
  --foreground: 210 40% 98%;
  --primary: 222 89% 65%;
  --primary-foreground: 222 47% 8%;
  --secondary: 217 33% 17%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217 33% 17%;
  --muted-foreground: 215 20% 65%;
  --border: 217 33% 20%;
  /* recalcular gradientes/sombras si el tono de --primary cambió mucho */
}
```

⚠️ Trampa típica: si mezclas variables en HSL con una definición en `rgb()` en algún lado del CSS, y luego las envuelves en `hsl(var(--x))` en Tailwind, obtienes colores rotos. Sé consistente: **todo HSL**.

### 3. Conectar `tailwind.config.ts`

```ts
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-subtle": "var(--gradient-subtle)",
      },
      boxShadow: {
        elegant: "var(--shadow-elegant)",
        glow: "var(--shadow-glow)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
} satisfies import("tailwindcss").Config;
```

Ahora en cualquier componente usas `bg-primary`, `text-primary-foreground`, `shadow-elegant`, `bg-gradient-primary` — nunca un color suelto.

### 4. Crear variantes reutilizables, no overrides sueltos

Cuando necesites un estilo especial para un botón/card/badge, **no** lo resuelvas con clases ad-hoc en el JSX. Créalo como variante, usando `class-variance-authority` (cva) si el proyecto ya lo tiene, o un objeto simple de clases si no.

```tsx
// ❌ Mal — override suelto, no reutilizable, rompe consistencia
<button className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
  Comprar
</button>

// ✅ Bien — variante del sistema, reutilizable en toda la app
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-smooth",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        hero: "bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow",
        outline: "border border-border bg-transparent hover:bg-secondary",
        ghost: "hover:bg-secondary text-foreground",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);
```

### 5. Si el proyecto usa shadcn/ui

No reescribas los componentes de shadcn desde cero: personalízalos. Ya vienen con `cva` integrado — edita su archivo (`src/components/ui/button.tsx`, etc.) y agrega tus propias entradas en `variants`, apuntando siempre a los tokens del paso 3. Esto es lo que hace que un botón de shadcn se vea "de marca" en vez de genérico.

### 6. Iconografía consistente

Elegir **una sola** librería de iconos por vista (no mezclar `lucide-react` y `@tabler/icons-react` en la misma pantalla). Tamaño y grosor de trazo consistentes:

```tsx
import { ArrowRight } from "lucide-react";
<ArrowRight className="w-4 h-4" strokeWidth={2} />
```

### 7. Responsive e interacción

- Mobile-first: escribe las clases base pensando en mobile, agrega `sm:` `md:` `lg:` para escalar. No inventes breakpoints custom salvo que el usuario lo pida.
- Todo elemento interactivo necesita estado `hover:` y, si aplica, `focus-visible:` — nunca dejar un botón "muerto" visualmente.
- Usa `transition-smooth` (token del paso 2) en vez de `transition-all duration-300` repetido por todos lados.
- Prioriza layouts en `flex`/`grid` con `gap-*` sobre márgenes sueltos entre hermanos.

## Checklist final antes de dar por terminado un componente/pantalla

- [ ] Cero colores literales (`bg-white`, `#fff`, `rgb(...)`) en el JSX — todo pasa por tokens.
- [ ] Contraste correcto en modo claro **y** oscuro (el error clásico: texto claro sobre fondo claro al cambiar de modo).
- [ ] Cualquier estilo repetido 2+ veces se convirtió en variante o clase de utilidad reusable.
- [ ] Responsive verificado en mobile, tablet, desktop.
- [ ] Una sola librería de iconos por vista, tamaños consistentes.
- [ ] Estados hover/focus definidos en todo elemento clickeable.
- [ ] Nada de placeholders genéricos tipo "Lorem ipsum" o cajas grises sin resolver — si falta una imagen, generarla o buscar una real.

## Errores comunes a evitar

| Error | Por qué pasa | Solución |
|---|---|---|
| Texto invisible en modo oscuro | Se usó `text-black` fijo en vez de `text-foreground` | Usar siempre tokens semánticos, nunca color fijo |
| Colores "lavados"/raros | Se mezcló HSL y RGB en la misma variable | Mantener un solo formato de color en todo el CSS |
| UI "genérica" a pesar de shadcn | Se usaron los componentes shadcn sin tocar sus variantes | Personalizar `variants` en cada componente ui/ |
| Botón outline con texto invisible | shadcn `outline` no es transparente por defecto, y se le puso texto blanco | Definir explícitamente los colores del variant outline en el sistema |
| Diseño inconsistente entre páginas | Cada página define sus propios colores sueltos | Centralizar todo en `index.css` + `tailwind.config.ts` desde el inicio del proyecto |


