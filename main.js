!function() {
    "use strict";
    marked.setOptions({
        breaks: !0,
        highlight: function(e) {
            return Prism.highlight(e, Prism.languages.javascript, "javascript")
        }
    });
    const e = new marked.Renderer;
    e.link = function(e, t, a) {
        return `<a target="_blank" href="${e}">${a}</a>`
    }
    ;
    class t extends React.Component {
        constructor(e) {
            super(e),
            this.state = {
                markdown: r,
                editorMaximized: !1,
                previewMaximized: !1
            },
            this.handleChange = this.handleChange.bind(this),
            this.handleEditorMaximize = this.handleEditorMaximize.bind(this),
            this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this)
        }
        handleChange(e) {
            this.setState({
                markdown: e.target.value
            })
        }
        handleEditorMaximize() {
            this.setState({
                editorMaximized: !this.state.editorMaximized
            })
        }
        handlePreviewMaximize() {
            this.setState({
                previewMaximized: !this.state.previewMaximized
            })
        }
        render() {
            const e = this.state.editorMaximized ? ["editorWrap maximized", "previewWrap hide", "fa fa-compress"] : this.state.previewMaximized ? ["editorWrap hide", "previewWrap maximized", "fa fa-compress"] : ["editorWrap", "previewWrap", "fa fa-arrows-alt"];
            return React.createElement("div", null, React.createElement("div", {
                className: e[0]
            }, React.createElement(a, {
                icon: e[2],
                onClick: this.handleEditorMaximize,
                text: "Editor"
            }), React.createElement(n, {
                markdown: this.state.markdown,
                onChange: this.handleChange
            })), React.createElement("div", {
                className: "converter"
            }), React.createElement("div", {
                className: e[1]
            }, React.createElement(a, {
                icon: e[2],
                onClick: this.handlePreviewMaximize,
                text: "Previewer"
            }), React.createElement(i, {
                markdown: this.state.markdown
            })))
        }
    }
    const a = e=>React.createElement("div", {
        className: "toolbar"
    }, React.createElement("i", {
        className: "fa fa-free-code-camp",
        title: "no-stack-dub-sack"
    }), e.text, React.createElement("i", {
        className: e.icon,
        onClick: e.onClick
    }))
      , n = e=>React.createElement("textarea", {
        id: "editor",
        onChange: e.onChange,
        type: "text",
        value: e.markdown
    })
      , i = t=>React.createElement("div", {
        dangerouslySetInnerHTML: {
            __html: marked(t.markdown, {
                renderer: e
            })
        },
        id: "preview"
    })
      , r = "# Bem-vindo ao meu Visualizador de Markdown em React!\n\n## Este é um sub-título...\n### E aqui estão algumas outras coisas legais:\n\n Aqui está algum código, `<div></div>`, entre 2 crases.\n\n```\n// este é um código de várias linhas:\n\nfunction outroExemplo(primeiraLinha, ultimaLinha) {\n  if (primeiraLinha == '```' && ultimaLinha == '```') {\n    return codigoDeMultiplasLinhas;\n  }\n}\n```\n\nVocê também pode tornar o texto **negrito**... uau!\nOu _itálico_.\nOu... espera aí... **_ambos!_**\nE sinta-se à vontade para enlouquecer ~~riscando coisas~~.\n\nTambém há [links](https://www.freecodecamp.org), e\n> Citações em bloco!\n\nE se você quiser ficar realmente louco, até tabelas:\n\nCabeçalho Selvagem | Cabeçalho Maluco | Outro Cabeçalho?\n------------ | ------------- | -------------\nSeu conteúdo pode | estar aqui, e ele | pode estar aqui....\nE aqui. | Ok. | Acho que entendemos.\n\n- E, é claro, há listas.\n  - Algumas são com marcadores.\n     - Com diferentes níveis de endentação.\n        - Que se parecem com isso.\n\n\n1. E também há listas numeradas.\n1. Use apenas 1s se quiser!\n1. E por último, mas não menos importante, não vamos esquecer imagens incorporadas:\n\n![Rick rolling](https://media.tenor.com/4gPD1ccxrVgAAAAC/rick-ashley-dance.gif)\n";
    ReactDOM.render(React.createElement(t, null), document.getElementById("app"))
}();
