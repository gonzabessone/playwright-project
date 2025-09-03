# Playwright Tests 🚀

Este repositorio tiene mis primeros **tests automatizados con Playwright + TypeScript**.  
La idea es practicar lo básico de QA Automation y dejar registrado lo que voy aprendiendo.

En el repo vas a encontrar los tests organizados en `tests/`.  
Son casos para practicar: validación de títulos, clicks en botones, manejo de scrollbars, delays y elementos ocultos.

Todo está hecho en base a la pagina web http://www.uitestingplayground.com

---

## ⚙️ Instalación y ejecucion (pasos seguidos)

Clonar el repositorio y ejecutar los comandos uno por uno en la terminal:

```bash
# 1) Clonar el repo y entrar en la carpeta
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

# 2) Instalar dependencias del proyecto
npm install

# 3) Instalar los navegadores que usa Playwright
npx playwright install

# 4) Ejecutar todos los tests:
npx playwright test

# 5) Para correr un test especifico:
npx playwright test tests/test-class-atribute.spec.ts

# 6) Para verlo en modo con el navegador visible
npx playwright test --headed
