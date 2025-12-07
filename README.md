# Simple Domain Landing Page

A minimal landing page template for displaying across multiple domains. Just configure environment variables and deploy.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FKadxy%2Fdomain-land&env=VITE_WEBSITE_LOGO_URL,VITE_WEBSITE_TITLE,VITE_WEBSITE_SUBTITLE,VITE_WEBSITE_IPC_NAME,VITE_WEBSITE_EMAIL&envDescription=Environment%20variables%20needed%20for%20the%20landing%20page%20configuration&envLink=https%3A%2F%2Fgithub.com%2FKadxy%2Fdomain-land%23environment-variables&project-name=domain-landing-page&repository-name=domain-landing-page)

## Environment Variables

| Variable                  | Required | Description                                      | Default Value  |
|---------------------------|----------|--------------------------------------------------|----------------|
| `VITE_WEBSITE_LOGO_URL`   | No       | Custom logo URL (if empty, uses default logo)    | `./logo.svg`   |
| `VITE_WEBSITE_TITLE`      | No       | Main title displayed on the page                 | `Domain Land`  |
| `VITE_WEBSITE_SUBTITLE`   | No       | Subtitle displayed below the title               | _(none)_       |
| `VITE_WEBSITE_IPC_NAME`   | No       | ICP filing number (for Chinese websites)         | _(none)_       |
| `VITE_WEBSITE_EMAIL`      | No       | Contact email address                            | _(none)_       |
