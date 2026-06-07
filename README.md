# Calculadora de Envíos · Argentina

**Demo en vivo:** https://javi2597.github.io/calculadora.envios.codigopostal/

Herramienta web para estimar el costo de un envío entre dos códigos postales argentinos. Funciona completamente offline, sin APIs externas ni dependencias.

## Características

- Ingresás CP de origen y destino y obtenés el costo estimado al instante
- Preview en vivo del nombre de la ciudad mientras escribís el CP
- Tarifas configurables: base, precio por km y precio por kg
- Cálculo opcional de **peso volumétrico** (largo × ancho × alto / 5000)
- Distancia calculada con la fórmula de Haversine + factor de ruta × 1.35
- Base de datos integrada con ~80 localidades de todo el país (4 dígitos)
- Las tarifas se guardan automáticamente en `localStorage`
- Diseño responsivo, funciona en mobile

## Uso

Abrí `calculadora-envios.html` directo en el navegador. No requiere servidor ni instalación.

```
1. Configurá las tarifas (o dejá los valores por defecto)
2. Ingresá el CP de origen y destino
3. Ingresá el peso del paquete
4. (Opcional) Activá dimensiones para calcular peso volumétrico
5. Hacé clic en "Calcular Costo"
```

## Cómo funciona el cálculo

```
Costo = Tarifa base + (km por ruta × precio/km) + (peso a facturar × precio/kg)

km por ruta = distancia aérea (Haversine) × 1.35
peso a facturar = max(peso real, peso volumétrico)
```

Los CPs se resuelven al centro urbano más cercano dentro de la base de datos integrada.

## Tecnologías

HTML · CSS · JavaScript vanilla — sin frameworks ni dependencias externas.
