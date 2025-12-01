# Portfolio Website

A minimal, academic-style personal portfolio website built with React and TypeScript to showcase projects, research, and professional experience.

## Project Overview

This portfolio follows the design principles of typical PhD student portfolios: clean, typography-focused, and content-first. The design emphasizes readability and professionalism over visual complexity.

## Design Philosophy

### Minimalism

- **Single-column centered layout** (max 800px width)
- **Black, white, and gray color palette**
- **No gradients or flashy animations**
- **Typography-focused** with clear hierarchy

### Academic Structure

The portfolio includes standard academic sections:
- About & Research Interests
- Work Experience
- Education
- Research & Projects
- Technical Skills

## Technical Stack

```typescript
const techStack = {
  frontend: "React 18.3.1",
  language: "TypeScript",
  styling: "Styled Components",
  routing: "React Router v6",
  deployment: "Netlify",
  build: "Create React App"
};
```

## Key Features

### 1. Content Management via Markdown

Research projects are written in Markdown files, making it easy to:
- Write technical content with code blocks
- Include mathematical equations using KaTeX
- Format tables and lists
- No need to edit React components

Example:
```markdown
## Mathematical Equation
$$f(x) = \sigma(Wx + b)$$

## Code Block
\`\`\`python
def train_model():
    model.fit(X_train, y_train)
\`\`\`
```

### 2. Responsive Design

- Mobile-first approach
- Breakpoint at 768px
- Readable on all devices

### 3. Clean Component Architecture

```
src/
├── components/       # Reusable UI components
├── content/         # Markdown files for projects
├── data/           # JSON for structured data
└── App.tsx         # Main application
```

## Styling Approach

Using styled-components for scoped, maintainable CSS:

```typescript
const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
`;
```

## Performance

- **Bundle size**: ~91 KB (gzipped)
- **Lighthouse score**: 95+
- **Fast load times**: <1s on modern connections

## Future Enhancements

- [ ] Add blog section with Markdown support
- [ ] Implement search functionality
- [ ] Add dark mode toggle
- [ ] Integrate with CMS for easier updates
- [ ] Add publication list with BibTeX support

## Technologies

- React
- TypeScript
- Styled Components
- React Router
- React Markdown
- KaTeX (for math equations)
- Git & GitHub
- Netlify (deployment)
