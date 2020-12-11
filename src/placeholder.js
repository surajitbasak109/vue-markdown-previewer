const placeholder = `# Welcome Markdown Previewer!
---
## Sub Heading
### Heading level 3

---
**Inline Code**
\`<div></div>\`

**Block level Code**
\`\`\`
function upper(text) {
  return text.toUpperCase();
}
\`\`\`
---
**bold text**
*italic text*.
***bold and italic text***
~~line through text~~.

---
[link to freecodecamp](https://www.freecodecamp.com)

> Block Quotes!
---

Name        | Age | Profession
--------- | --- | --------------
John Doe   | 31 | Shop Supervisor
Jane Doe   | 23 | Student

---
**Lists**

---

- Unordered Parent List 1
- Unordered Parent List 2
  - Unordered Child List 1
  - Unordered Child List2
- Unordered Parent List 3
  1. Ordered Child List 1
  1. Ordered Child List 2

1. Ordered List 1
1. Oredred List 2
1. Oredred List 3

![Vue Logo w/ Text](https://cdn.iconscout.com/icon/free/png-512/vue-282497.png)
`

export default placeholder
