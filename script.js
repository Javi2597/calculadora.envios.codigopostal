// ════════════════════════════════════════════════════════════════════════════
//  BASE DE DATOS: Códigos Postales de Argentina → coordenadas geográficas
// ════════════════════════════════════════════════════════════════════════════
const CP_DB = [
  // ── CABA ──────────────────────────────────────────────────────────────────
  { cp: 1000, ciudad: 'Buenos Aires (Microcentro)',       prov: 'CABA',                  lat: -34.6037, lng: -58.3816 },
  { cp: 1200, ciudad: 'Buenos Aires (Palermo/Recoleta)',  prov: 'CABA',                  lat: -34.5850, lng: -58.4100 },
  { cp: 1400, ciudad: 'Buenos Aires (Flores/Paternal)',   prov: 'CABA',                  lat: -34.6300, lng: -58.4500 },
  // ── GBA Norte ─────────────────────────────────────────────────────────────
  { cp: 1600, ciudad: 'General San Martín',               prov: 'Buenos Aires',           lat: -34.5667, lng: -58.5333 },
  { cp: 1630, ciudad: 'Tigre / San Fernando',             prov: 'Buenos Aires',           lat: -34.4333, lng: -58.5667 },
  { cp: 1660, ciudad: 'José León Suárez',                 prov: 'Buenos Aires',           lat: -34.5333, lng: -58.5667 },
  // ── GBA Oeste ─────────────────────────────────────────────────────────────
  { cp: 1700, ciudad: 'Ramos Mejía',                      prov: 'Buenos Aires',           lat: -34.6333, lng: -58.5667 },
  { cp: 1750, ciudad: 'San Justo',                         prov: 'Buenos Aires',           lat: -34.6667, lng: -58.5667 },
  { cp: 1770, ciudad: 'Tapiales / Villa Luzuriaga',       prov: 'Buenos Aires',           lat: -34.6833, lng: -58.5500 },
  // ── GBA Sur ───────────────────────────────────────────────────────────────
  { cp: 1800, ciudad: 'Lanús',                             prov: 'Buenos Aires',           lat: -34.7000, lng: -58.4000 },
  { cp: 1842, ciudad: 'Monte Grande',                      prov: 'Buenos Aires',           lat: -34.8167, lng: -58.4667 },
  { cp: 1870, ciudad: 'Avellaneda',                        prov: 'Buenos Aires',           lat: -34.6667, lng: -58.3667 },
  { cp: 1900, ciudad: 'La Plata',                          prov: 'Buenos Aires',           lat: -34.9215, lng: -57.9545 },
  { cp: 1980, ciudad: 'Chascomús',                         prov: 'Buenos Aires',           lat: -35.5667, lng: -58.0167 },
  // ── Santa Fe ──────────────────────────────────────────────────────────────
  { cp: 2000, ciudad: 'Rosario',                           prov: 'Santa Fe',               lat: -32.9468, lng: -60.6393 },
  { cp: 2100, ciudad: 'Cañada de Gómez',                   prov: 'Santa Fe',               lat: -32.8167, lng: -61.3833 },
  { cp: 2200, ciudad: 'San Nicolás de los Arroyos',        prov: 'Buenos Aires',           lat: -33.3333, lng: -60.2167 },
  { cp: 2300, ciudad: 'Rafaela',                           prov: 'Santa Fe',               lat: -31.2500, lng: -61.4833 },
  { cp: 2400, ciudad: 'Reconquista',                       prov: 'Santa Fe',               lat: -29.1500, lng: -59.6500 },
  { cp: 2500, ciudad: 'Pergamino',                         prov: 'Buenos Aires',           lat: -33.8833, lng: -60.5667 },
  { cp: 2600, ciudad: 'Venado Tuerto',                     prov: 'Santa Fe',               lat: -33.7333, lng: -61.9667 },
  { cp: 2700, ciudad: 'Junín',                             prov: 'Buenos Aires',           lat: -34.5833, lng: -60.9500 },
  { cp: 2800, ciudad: 'Zárate',                            prov: 'Buenos Aires',           lat: -34.1000, lng: -59.0333 },
  { cp: 2900, ciudad: 'San Pedro',                         prov: 'Buenos Aires',           lat: -33.6667, lng: -59.6667 },
  // ── Litoral ───────────────────────────────────────────────────────────────
  { cp: 3000, ciudad: 'Santa Fe',                          prov: 'Santa Fe',               lat: -31.6333, lng: -60.7000 },
  { cp: 3100, ciudad: 'Paraná',                            prov: 'Entre Ríos',             lat: -31.7333, lng: -60.5333 },
  { cp: 3200, ciudad: 'Gualeguaychú',                      prov: 'Entre Ríos',             lat: -33.0167, lng: -58.5167 },
  { cp: 3260, ciudad: 'Concordia',                         prov: 'Entre Ríos',             lat: -31.3833, lng: -58.0167 },
  { cp: 3300, ciudad: 'Posadas',                           prov: 'Misiones',               lat: -27.3621, lng: -55.8969 },
  { cp: 3360, ciudad: 'Oberá',                             prov: 'Misiones',               lat: -27.4833, lng: -55.1167 },
  { cp: 3380, ciudad: 'Puerto Iguazú',                     prov: 'Misiones',               lat: -25.5997, lng: -54.5783 },
  { cp: 3400, ciudad: 'Corrientes',                        prov: 'Corrientes',             lat: -27.4806, lng: -58.8341 },
  { cp: 3460, ciudad: 'Goya',                              prov: 'Corrientes',             lat: -29.1500, lng: -59.2667 },
  { cp: 3500, ciudad: 'Resistencia',                       prov: 'Chaco',                  lat: -27.4514, lng: -58.9867 },
  { cp: 3560, ciudad: 'Presidencia Roque Sáenz Peña',      prov: 'Chaco',                  lat: -26.7833, lng: -60.4500 },
  { cp: 3600, ciudad: 'Formosa',                           prov: 'Formosa',                lat: -26.1775, lng: -58.1781 },
  // ── NOA ───────────────────────────────────────────────────────────────────
  { cp: 4000, ciudad: 'San Miguel de Tucumán',             prov: 'Tucumán',                lat: -26.8083, lng: -65.2176 },
  { cp: 4200, ciudad: 'Santiago del Estero',               prov: 'Santiago del Estero',    lat: -27.7951, lng: -64.2615 },
  { cp: 4400, ciudad: 'Salta',                             prov: 'Salta',                  lat: -24.7859, lng: -65.4116 },
  { cp: 4530, ciudad: 'Tartagal',                          prov: 'Salta',                  lat: -22.5333, lng: -63.8000 },
  { cp: 4600, ciudad: 'San Salvador de Jujuy',             prov: 'Jujuy',                  lat: -24.1858, lng: -65.2995 },
  { cp: 4650, ciudad: 'Humahuaca',                         prov: 'Jujuy',                  lat: -23.2000, lng: -65.3500 },
  { cp: 4700, ciudad: 'San Fernando del Valle de Catamarca', prov: 'Catamarca',            lat: -28.4696, lng: -65.7852 },
  // ── Córdoba, Cuyo y La Rioja ──────────────────────────────────────────────
  { cp: 5000, ciudad: 'Córdoba',                           prov: 'Córdoba',                lat: -31.4167, lng: -64.1833 },
  { cp: 5100, ciudad: 'Villa María',                       prov: 'Córdoba',                lat: -32.4167, lng: -63.2333 },
  { cp: 5200, ciudad: 'Bell Ville',                        prov: 'Córdoba',                lat: -32.6167, lng: -62.7000 },
  { cp: 5300, ciudad: 'La Rioja',                          prov: 'La Rioja',               lat: -29.4133, lng: -66.8558 },
  { cp: 5400, ciudad: 'San Juan',                          prov: 'San Juan',               lat: -31.5375, lng: -68.5364 },
  { cp: 5500, ciudad: 'Mendoza',                           prov: 'Mendoza',                lat: -32.8908, lng: -68.8272 },
  { cp: 5600, ciudad: 'San Rafael',                        prov: 'Mendoza',                lat: -34.6178, lng: -68.3300 },
  { cp: 5700, ciudad: 'San Luis',                          prov: 'San Luis',               lat: -33.2956, lng: -66.3356 },
  { cp: 5800, ciudad: 'Río Cuarto',                        prov: 'Córdoba',                lat: -33.1232, lng: -64.3493 },
  { cp: 5900, ciudad: 'Villa Mercedes',                    prov: 'San Luis',               lat: -33.6667, lng: -65.4667 },
  // ── Buenos Aires Interior y La Pampa ─────────────────────────────────────
  { cp: 6000, ciudad: 'Mercedes',                          prov: 'Buenos Aires',           lat: -34.6500, lng: -59.4333 },
  { cp: 6100, ciudad: 'Chivilcoy',                         prov: 'Buenos Aires',           lat: -34.8833, lng: -60.0167 },
  { cp: 6200, ciudad: 'Pehuajó',                           prov: 'Buenos Aires',           lat: -35.8167, lng: -61.9000 },
  { cp: 6300, ciudad: 'Santa Rosa',                        prov: 'La Pampa',               lat: -36.6167, lng: -64.2833 },
  { cp: 6360, ciudad: 'General Pico',                      prov: 'La Pampa',               lat: -35.6556, lng: -63.7569 },
  { cp: 6400, ciudad: 'Trenque Lauquen',                   prov: 'Buenos Aires',           lat: -35.9667, lng: -62.7333 },
  { cp: 6500, ciudad: '9 de Julio',                        prov: 'Buenos Aires',           lat: -35.4500, lng: -60.8833 },
  { cp: 6700, ciudad: 'Luján',                             prov: 'Buenos Aires',           lat: -34.5667, lng: -59.1000 },
  { cp: 6800, ciudad: 'Bragado',                           prov: 'Buenos Aires',           lat: -35.1167, lng: -60.4833 },
  // ── Buenos Aires Sur / Costa Atlántica ───────────────────────────────────
  { cp: 7000, ciudad: 'Tandil',                            prov: 'Buenos Aires',           lat: -37.3167, lng: -59.1333 },
  { cp: 7100, ciudad: 'Dolores',                           prov: 'Buenos Aires',           lat: -36.3167, lng: -57.6833 },
  { cp: 7300, ciudad: 'Azul',                              prov: 'Buenos Aires',           lat: -36.7833, lng: -59.8667 },
  { cp: 7400, ciudad: 'Olavarría',                         prov: 'Buenos Aires',           lat: -36.8833, lng: -60.3167 },
  { cp: 7500, ciudad: 'Tres Arroyos',                      prov: 'Buenos Aires',           lat: -38.3667, lng: -60.2833 },
  { cp: 7600, ciudad: 'Mar del Plata',                     prov: 'Buenos Aires',           lat: -38.0000, lng: -57.5667 },
  { cp: 7700, ciudad: 'Necochea',                          prov: 'Buenos Aires',           lat: -38.5500, lng: -58.7333 },
  { cp: 7900, ciudad: 'Miramar / Gral. Alvarado',          prov: 'Buenos Aires',           lat: -38.2667, lng: -57.8333 },
  // ── Patagonia Norte ───────────────────────────────────────────────────────
  { cp: 8000, ciudad: 'Bahía Blanca',                      prov: 'Buenos Aires',           lat: -38.7183, lng: -62.2661 },
  { cp: 8100, ciudad: 'Punta Alta',                        prov: 'Buenos Aires',           lat: -38.8833, lng: -62.0667 },
  { cp: 8200, ciudad: 'Río Colorado',                      prov: 'Río Negro',              lat: -38.9833, lng: -64.1000 },
  { cp: 8300, ciudad: 'Neuquén',                           prov: 'Neuquén',                lat: -38.9516, lng: -68.0591 },
  { cp: 8370, ciudad: 'Zapala',                            prov: 'Neuquén',                lat: -38.8883, lng: -70.0625 },
  { cp: 8400, ciudad: 'San Carlos de Bariloche',           prov: 'Río Negro',              lat: -41.1335, lng: -71.3103 },
  { cp: 8430, ciudad: 'El Bolsón',                         prov: 'Río Negro',              lat: -41.9667, lng: -71.5333 },
  { cp: 8500, ciudad: 'Viedma',                            prov: 'Río Negro',              lat: -40.8135, lng: -62.9967 },
  { cp: 8520, ciudad: 'General Roca',                      prov: 'Río Negro',              lat: -39.0333, lng: -67.5833 },
  // ── Patagonia Sur ─────────────────────────────────────────────────────────
  { cp: 9000, ciudad: 'Comodoro Rivadavia',                prov: 'Chubut',                 lat: -45.8667, lng: -67.5000 },
  { cp: 9100, ciudad: 'Trelew',                            prov: 'Chubut',                 lat: -43.2500, lng: -65.3333 },
  { cp: 9105, ciudad: 'Puerto Madryn',                     prov: 'Chubut',                 lat: -42.7692, lng: -65.0385 },
  { cp: 9200, ciudad: 'Esquel',                            prov: 'Chubut',                 lat: -42.9067, lng: -71.3153 },
  { cp: 9300, ciudad: 'Rawson',                            prov: 'Chubut',                 lat: -43.3002, lng: -65.1023 },
  { cp: 9400, ciudad: 'Río Gallegos',                      prov: 'Santa Cruz',             lat: -51.6226, lng: -69.2181 },
  { cp: 9405, ciudad: 'El Calafate',                       prov: 'Santa Cruz',             lat: -50.3397, lng: -72.2653 },
  { cp: 9410, ciudad: 'Ushuaia',                           prov: 'Tierra del Fuego',       lat: -54.8019, lng: -68.3030 },
  { cp: 9420, ciudad: 'Río Grande',                        prov: 'Tierra del Fuego',       lat: -53.7878, lng: -67.7073 },
];

const FACTOR_RUTA = 1.35;
const LS_KEY = 'cp-calc-tarifas';

// ════════════════════════════════════════════════════════════════════════════
//  HAVERSINE
// ════════════════════════════════════════════════════════════════════════════
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = x => x * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2
          + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2))
          * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ════════════════════════════════════════════════════════════════════════════
//  BUSCAR CP
// ════════════════════════════════════════════════════════════════════════════
function buscarCP(str) {
  const num = parseInt(str.trim().replace(/\D/g, ''));
  if (isNaN(num) || num < 1000 || num > 9999) return null;

  return CP_DB.reduce((mejor, ref) => {
    const diff = Math.abs(ref.cp - num);
    return diff < Math.abs(mejor.cp - num) ? ref : mejor;
  });
}

// ════════════════════════════════════════════════════════════════════════════
//  FORMATO MONEDA
// ════════════════════════════════════════════════════════════════════════════
function ars(n) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency', currency: 'ARS',
    minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(n);
}

// ════════════════════════════════════════════════════════════════════════════
//  LOCALSTORAGE — guardar y cargar tarifas
// ════════════════════════════════════════════════════════════════════════════
function saveTarifas() {
  localStorage.setItem(LS_KEY, JSON.stringify({
    tarifaBase:  document.getElementById('tarifaBase').value,
    precioPorKm: document.getElementById('precioPorKm').value,
    precioPorKg: document.getElementById('precioPorKg').value,
  }));
}

function loadTarifas() {
  try {
    const stored = JSON.parse(localStorage.getItem(LS_KEY));
    if (!stored) return;
    if (stored.tarifaBase  != null) document.getElementById('tarifaBase').value  = stored.tarifaBase;
    if (stored.precioPorKm != null) document.getElementById('precioPorKm').value = stored.precioPorKm;
    if (stored.precioPorKg != null) document.getElementById('precioPorKg').value = stored.precioPorKg;
  } catch {}
}

// ════════════════════════════════════════════════════════════════════════════
//  PREVIEW EN VIVO DE CP
// ════════════════════════════════════════════════════════════════════════════
function updatePreview(inputId, previewId) {
  const ref = buscarCP(document.getElementById(inputId).value);
  document.getElementById(previewId).textContent = ref ? `→ ${ref.ciudad}, ${ref.prov}` : '';
}

// ════════════════════════════════════════════════════════════════════════════
//  CALCULAR
// ════════════════════════════════════════════════════════════════════════════
function calcular() {
  const elOrig  = document.getElementById('cpOrigen');
  const elDest  = document.getElementById('cpDestino');
  const errOrig = document.getElementById('errOrigen');
  const errDest = document.getElementById('errDestino');

  [elOrig, elDest].forEach(el => el.classList.remove('invalid'));
  [errOrig, errDest].forEach(el => { el.textContent = ''; el.classList.remove('show'); });

  let ok = true;
  if (!elOrig.value.trim()) {
    setError(elOrig, errOrig, 'Ingresá el código postal de origen.');
    ok = false;
  }
  if (!elDest.value.trim()) {
    setError(elDest, errDest, 'Ingresá el código postal de destino.');
    ok = false;
  }
  if (!ok) return;

  const origen  = buscarCP(elOrig.value);
  const destino = buscarCP(elDest.value);

  if (!origen) {
    setError(elOrig, errOrig, 'CP inválido. Usá 4 dígitos (ej: 1000).');
    ok = false;
  }
  if (!destino) {
    setError(elDest, errDest, 'CP inválido. Usá 4 dígitos (ej: 5000).');
    ok = false;
  }
  if (!ok) return;

  const tarifaBase  = Math.max(0, parseFloat(document.getElementById('tarifaBase').value)  || 0);
  const precioPorKm = Math.max(0, parseFloat(document.getElementById('precioPorKm').value) || 0);
  const precioPorKg = Math.max(0, parseFloat(document.getElementById('precioPorKg').value) || 0);
  const pesoReal    = Math.max(0, parseFloat(document.getElementById('pesoKg').value)      || 0);

  const pesoVol       = calcularPesoVol();
  const usaVol        = pesoVol !== null && pesoVol > pesoReal;
  const pesoFacturado = pesoVol !== null ? Math.max(pesoReal, pesoVol) : pesoReal;

  const kmAereo = haversine(origen.lat, origen.lng, destino.lat, destino.lng);
  const kmRuta  = kmAereo * FACTOR_RUTA;
  const costo   = tarifaBase + precioPorKm * kmRuta + precioPorKg * pesoFacturado;

  const card = document.getElementById('resultCard');
  card.classList.remove('show');
  void card.offsetWidth;
  card.classList.add('show');

  document.getElementById('resRoute').innerHTML =
    `<span>📍 <strong>${origen.ciudad}</strong> (CP ${elOrig.value.trim()}) · ${origen.prov}</span>
     <span class="arrow">→</span>
     <span>📍 <strong>${destino.ciudad}</strong> (CP ${elDest.value.trim()}) · ${destino.prov}</span>`;

  document.getElementById('distAerea').textContent = `${Math.round(kmAereo)} km`;
  document.getElementById('distRuta').textContent  = `${Math.round(kmRuta)} km`;
  const pesoLabel = usaVol
    ? `${pesoFacturado.toFixed(2)} kg (vol.)`
    : `${pesoFacturado} kg`;
  document.getElementById('chipPeso').textContent  = pesoLabel;
  document.getElementById('costoTotal').textContent = ars(costo);

  let breakdown = `Base ${ars(tarifaBase)} + ${Math.round(kmRuta)} km × ${ars(precioPorKm)}/km + ${pesoFacturado.toFixed(2)} kg × ${ars(precioPorKg)}/kg`;
  if (pesoVol !== null) {
    breakdown += ` · real ${pesoReal} kg / vol. ${pesoVol.toFixed(2)} kg`;
  }
  document.getElementById('costoBreakdown').textContent = breakdown;

  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ════════════════════════════════════════════════════════════════════════════
//  PESO VOLUMÉTRICO
// ════════════════════════════════════════════════════════════════════════════
function calcularPesoVol() {
  if (!document.getElementById('usarVolumen').checked) return null;
  const l = parseFloat(document.getElementById('largo').value) || 0;
  const w = parseFloat(document.getElementById('ancho').value) || 0;
  const h = parseFloat(document.getElementById('alto').value) || 0;
  if (l <= 0 || w <= 0 || h <= 0) return null;
  return (l * w * h) / 5000;
}

function toggleVolumen() {
  const checked = document.getElementById('usarVolumen').checked;
  document.getElementById('volumenSection').style.display = checked ? 'block' : 'none';
  if (!checked) document.getElementById('volPreview').textContent = '';
  else updateVolPreview();
}

function updateVolPreview() {
  const l  = parseFloat(document.getElementById('largo').value) || 0;
  const w  = parseFloat(document.getElementById('ancho').value) || 0;
  const h  = parseFloat(document.getElementById('alto').value) || 0;
  const el = document.getElementById('volPreview');
  if (l > 0 && w > 0 && h > 0) {
    const vol  = (l * w * h / 5000).toFixed(2);
    const real = parseFloat(document.getElementById('pesoKg').value) || 0;
    const fact = Math.max(real, parseFloat(vol)).toFixed(2);
    el.textContent = `Peso volumétrico: ${vol} kg · Peso a facturar: ${fact} kg`;
  } else {
    el.textContent = '';
  }
}

// ════════════════════════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════════════════════════
function setError(input, span, msg) {
  input.classList.add('invalid');
  span.textContent = msg;
  span.classList.add('show');
}

// ════════════════════════════════════════════════════════════════════════════
//  INIT — event listeners
// ════════════════════════════════════════════════════════════════════════════
loadTarifas();

['cpOrigen', 'cpDestino'].forEach(id => {
  const previewId = id === 'cpOrigen' ? 'previewOrigen' : 'previewDestino';
  document.getElementById(id).addEventListener('input', () => updatePreview(id, previewId));
  document.getElementById(id).addEventListener('keydown', e => {
    if (e.key === 'Enter') calcular();
  });
});

['tarifaBase', 'precioPorKm', 'precioPorKg'].forEach(id => {
  document.getElementById(id).addEventListener('change', saveTarifas);
});

['largo', 'ancho', 'alto', 'pesoKg'].forEach(id => {
  document.getElementById(id).addEventListener('input', updateVolPreview);
});
