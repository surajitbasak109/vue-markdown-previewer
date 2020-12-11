<template>
  <div class="container-fluid">
    <div class="mt-4 row">
      <div class="col text-center">
        <h2>
          Vue JS Markdown Previewer
          <small class="text-sm">By Surajit Basak</small>
        </h2>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12" :class="{ maximized: editorMaximized, hide: previewMaximized }">
          <toolbar text="Editor" :icon="icon_class" @onClick="handleEditorMaximized" />
          <textarea id="editor" class="editor form-control p-2" v-model="md_text"></textarea>
        </div>
        <div class="col-lg-6 col-12" :class="{ maximized: previewMaximized, hide: editorMaximized }">
          <toolbar text="Previewer" :icon="icon_class" @onClick="handlePreviewMaximized" />
          <div id="preview" class="preview w-full p-2" v-html="previewText"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const projectName = 'markdown-previewer'
  localStorage.setItem('project_selector', projectName)

  import Toolbar from './components/Toolbar.vue'
  import placeholder from './placeholder.js'

  let marked = require('marked')
  const renderer = new marked.Renderer()

  renderer.link = function(href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`
  }

  marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: false,
  })

  export default {
    name: 'App',
    data() {
      return {
        projectName,
        md_text: placeholder,
        editorMaximized: false,
        previewMaximized: false,
        icon_class: '',
      }
    },
    methods: {
      applyClasses() {
        this.icon_class = this.editorMaximized
          ? 'fa fa-compress'
          : this.previewMaximized
          ? 'fa fa-compress'
          : 'fa fa-arrows-alt'
      },
      handleEditorMaximized() {
        this.editorMaximized = !this.editorMaximized
        this.applyClasses()
      },
      handlePreviewMaximized() {
        this.previewMaximized = !this.previewMaximized
        this.applyClasses()
      },
    },
    components: {
      toolbar: Toolbar,
    },
    computed: {
      previewText() {
        return marked(this.md_text, { renderer: renderer })
      },
    },
    mounted() {
      this.applyClasses()
    },
  }
</script>

<style scoped>
  .editor {
    border: 1px solid black;
    resize: none;
    height: 80vh;
    border-radius: 0;
    outline: none;
  }
  .editor:focus,
  .editor:active {
    outline: none;
    border: 1px solid black;
    box-shadow: none;
  }
  .preview {
    border: 1px solid black;
    height: 80vh;
    overflow: auto;
    background: white;
  }

  .maximized {
    width: 100%;
    min-height: 100vh;
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.8);
  }

  .maximized .editor {
    height: 100vh;
  }

  .maximized .preview {
    height: 100vh;
  }

  .hide {
    display: none;
  }

  h2 .text-sm {
    color: #125869;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    .previewer {
      position: relative;
      top: -4px;
    }
  }
  @media (max-width: 768px) {
    .editor {
      height: 40vh;
    }
    .previewer {
      height: 40vh;
    }
  }
</style>
