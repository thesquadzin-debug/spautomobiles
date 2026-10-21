# SP Automobiles website - how to edit

Keep all five files in the same folder:

| File | What it is | Do you edit it? |
|---|---|---|
| `config.js` | Phone, WhatsApp number, address, hours, slider, filter tabs, all models | Yes, this is the main one |
| `index.html` | Page structure and fixed text (menu names, offers, services) | Sometimes |
| `style.css` | Colours, fonts, spacing | Rarely |
| `script.js` | Page behaviour (slider, filters, WhatsApp button) | Almost never |
| `README.md` | This guide | No |

## Common changes

**Change phone, WhatsApp, address, opening hours**
Open `config.js`, section 1 (SHOP DETAILS). Save the file and refresh the page.
The WhatsApp number needs the country code and no `+` or spaces, for example `919876543210`.

**Add a new bike or scooter**
In `config.js`, section 5 (MODELS), copy one `{ ... },` block, paste it under the last one and change the values.
Set `groups` to the tabs where it should appear, for example `["New Launch", "Premium"]`.

**Remove a model**
Delete its whole `{ ... },` block in `config.js`. If it is in `heroSlides`, delete its name there too.

**Change the big slider**
In `config.js`, section 2: edit `heroSlides` (model names, they must match a model name exactly) and `slideSeconds` (time per slide).

**Add or rename a filter tab**
Edit `tabs` in section 3, and use the same name in the `groups` of the models that belong to it.

**Change the dropdown choices in the enquiry form**
Edit `requests` in section 4 of `config.js`.

**Change the colours**
Open `style.css` and edit the first `:root { ... }` block. `--acc` is the main red.

**Change the menu, offers or services text**
Open `index.html`. Each part has a comment such as `<!-- ===== EXPLORE ===== -->` above it.

## Tips
- Edit with Notepad, VS Code or any plain text editor. Do not use Word.
- Keep a copy of the folder before big changes.
- If the page looks broken after an edit, you most likely deleted a quote `"`, a comma `,` or a bracket in `config.js`. Undo the last change.
- When you upload to your host, upload all the files together.
