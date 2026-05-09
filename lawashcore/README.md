# Savi Deck Template

Plantilla base para crear presentaciones interactivas estilo Savi a partir del deck de Frigo 100.

## Estructura

```text
savi-deck-template/
├─ index.html          # Estructura base, nav superior y carga de scripts
├─ assets/             # Imagenes, SVGs y recursos visuales
├─ data/slides.js      # Contenido editable de la presentacion
├─ scripts/deck.js     # Motor de render, navegacion y layouts
└─ styles/theme.css    # Sistema visual, tipografia, colores y componentes
```

## Crear una presentacion nueva

Desde la raiz del repo:

```bash
cp -R savi-deck-template nombre-del-nuevo-deck
```

Despues edita:

- `nombre-del-nuevo-deck/index.html`: titulo, descripcion, marca del topbar y botones de navegacion.
- `nombre-del-nuevo-deck/data/slides.js`: contenido de cada slide.
- `nombre-del-nuevo-deck/assets/`: imagenes del proyecto.
- `nombre-del-nuevo-deck/styles/theme.css`: colores, tipografia o ajustes visuales de marca.

## Como editar slides

Cada objeto en `data/slides.js` representa una slide:

```js
{
  eyebrow: "01 · Contexto",
  title: "Titulo principal",
  subtitle: "Texto de apoyo despues del titulo.",
  layout: "cards",
  cols: 3,
  items: [
    ["Titulo caja", "Texto de la caja."],
    ["Otro titulo", "Otro texto."]
  ]
}
```

Layouts disponibles en la plantilla:

- `cover`
- `agenda`
- `chapter`
- `cards`
- `channel-groups`
- `journey`
- `phone`
- `ideas`
- `poster`
- `timeline`
- `matrix`
- `dashboard`
- `bars`
- `roadmap`
- `closing`

## Temas por slide

Puedes anadir `theme` a una slide:

```js
{
  theme: "dark",
  title: "Titulo",
  layout: "chapter"
}
```

Temas base disponibles:

- `dark`
- `red`
- `blue`
- `ice`
- `lemon`

## Probar en local

Si ya tienes servidor en la raiz del repo:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Abre:

```text
http://localhost:8000/nombre-del-nuevo-deck/index.html
```

Tambien puedes abrir `index.html` directamente, porque el contenido esta en `data/slides.js` y no depende de `fetch`.

## Publicar en GitHub Pages

Cuando el nuevo deck este listo:

```bash
git add nombre-del-nuevo-deck
git commit -m "Add nombre del nuevo deck"
git push origin main
```

URL esperada:

```text
https://javierbarriusom-a11y.github.io/savi-deck-check_def1/nombre-del-nuevo-deck/
```

Usa cache-buster para revisar cambios publicados:

```text
?v=<hash-del-commit>
```

