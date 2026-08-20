#  Workspace Customizations

This `.agents` directory is automatically discovered by AI Agent and allows you to customize the agent's behavior for this specific project.

### Directory Structure

- **`rules/`**: Place markdown files (`*.md`) here to define project rules, style guidelines, and coding standards. The agent will automatically load them when working in the project.
- **`skills/`**: Create subfolders for specific multi-step workflows or tools (e.g., `skills/deploy/SKILL.md`). The agent will use these as "cheatsheets" on demand.

### Global Fallback
If you want to create customizations that apply to *all* your projects, you can place them in ``.agents.
