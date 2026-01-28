# Configuración Testing

Este proyecto necesita las siguientes dependencias para ejecutar las pruebas. 

Ejecuta como **Administrador**:

```powershell
npm install
npx playwright install chromium
```

Luego puedes ejecutar:

```bash
# Pruebas unitarias
npm test

# Pruebas E2E
npm run test:e2e
```
