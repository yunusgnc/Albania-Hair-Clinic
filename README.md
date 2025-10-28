# Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui

Bu proje Next.js 15, TypeScript, Tailwind CSS ve shadcn/ui ile oluşturulmuştur.

## Başlangıç

Öncelikle bağımlılıkları yükleyin:

```bash
npm install
# veya
yarn install
# veya
pnpm install
# veya
bun install
```

Ardından geliştirme sunucusunu başlatın:

```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
# veya
bun dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Özellikler

- ⚡️ Next.js 15 (Turbopack ile)
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🧩 shadcn/ui bileşenleri
- 🔍 ESLint
- ✨ Biome (formatter)

## Scriptler

- `npm run dev` - Geliştirme sunucusunu başlatır (Turbopack ile)
- `npm run build` - Üretime yönelik build alır
- `npm run start` - Üretim sunucusunu başlatır
- `npm run lint` - TypeScript ve ESLint kontrolü yapar
- `npm run format` - Biome ile kod formatlama yapar

## Proje Yapısı

```
├── app/                # Next.js App Router
│   ├── globals.css     # Global CSS
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Ana sayfa
├── components/         # React bileşenleri
├── lib/                # Yardımcı fonksiyonlar
│   └── utils.ts        # cn() fonksiyonu (shadcn)
├── public/             # Static dosyalar
├── biome.json          # Biome konfigürasyonu
├── eslint.config.mjs   # ESLint konfigürasyonu
├── next.config.ts      # Next.js konfigürasyonu
├── tailwind.config.ts  # Tailwind CSS konfigürasyonu
└── tsconfig.json       # TypeScript konfigürasyonu
```

## shadcn/ui Kullanımı

shadcn/ui bileşenlerini eklemek için:

```bash
npx shadcn@latest add button
```

Daha fazla bilgi için: [shadcn/ui Documentation](https://ui.shadcn.com)

