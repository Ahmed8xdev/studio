# Sanad Portfolio

A responsive portfolio application built with **Next.js, React and TypeScript**, featuring animated sections, reusable interface components, a project gallery, testimonials, theme controls and a contact form demonstration.

This repository is a **portfolio application and UI demonstration**. Its sample project cards and testimonials should not be interpreted as independently verified production client work.

## Features

- Responsive homepage with animated hero and service sections
- Project showcase and reusable cards
- Testimonials carousel and contact interface
- Dark and light theme support
- Tailwind CSS and Radix UI based components
- Firebase configuration and Google AI Genkit integration scaffolding
- Accessible forms with Zod and React Hook Form validation

The page structure is implemented in [src/app/page.tsx](./src/app/page.tsx), with feature sections inside [src/components](./src/components).

## Run locally

Use a recent Node.js version supported by Next.js 15 (Node.js 20 or newer is a reasonable choice).

```bash
git clone https://github.com/Ahmed8xdev/studio.git
cd studio
npm ci
npm run dev
```

Open [http://localhost:9002](http://localhost:9002). The dev script uses the Turbopack development server on port 9002.

Other available scripts:

```bash
npm run typecheck
npm run build
npm run start
npm run genkit:dev
```

The Genkit development commands rely on the Google AI plugin configuration in [src/ai/genkit.ts](./src/ai/genkit.ts). If you activate paid or authenticated integrations, provide credentials through your own environment and keep them out of version control.

## Tech stack

| Layer | Technologies |
| :--- | :--- |
| Application | Next.js 15, React 18, TypeScript |
| Styling and UI | Tailwind CSS, Radix UI, Lucide icons, Framer Motion |
| Forms | React Hook Form, Zod |
| Supporting integrations | Firebase, Genkit, Google AI plugin |
| Deployment configuration | Firebase App Hosting YAML |

## Contact form status

**The contact form is a demo.** Inputs are validated, but there is no configured email service, message delivery or persistent lead storage. After a valid submission the interface tells the user it is a demo preview; it must not claim that a message reached a real inbox.

Before production use, connect a real delivery provider or secure backend, add rate limiting and abuse protection, and test both successful and failed deliveries.

## Production readiness

The existing [next.config.ts](./next.config.ts) currently allows builds to bypass TypeScript and ESLint build errors. Treat this as development configuration, not proof of production quality. Run `npm run typecheck`, resolve reported errors and restore strict build checks before production deployment.

Review the sample portfolio entries, project links, testimonial text, contact destination, social links and environment variables before publishing them under a professional identity.

The original feature and design outline is available in [docs/blueprint.md](./docs/blueprint.md).

## Contributing

Small, focused changes are welcome. Open an issue describing reproducible bugs or improvement ideas. Test responsive layouts, keyboard navigation, dark and light themes, and the contact demo messaging before proposing changes. Avoid committing secrets or identifying details from real customers.

## Ownership

Source repository: [Ahmed8xdev/studio](https://github.com/Ahmed8xdev/studio).
