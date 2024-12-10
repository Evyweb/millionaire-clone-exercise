/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      severity: 'warn',
      comment:
        'This dependency is part of a circular relationship. You might want to revise ' +
        'your solution (i.e. use dependency inversion, make sure the modules have a single responsibility) ',
      from: {},
      to: {
        circular: true
      }
    },
    {
      name: 'no-cross-boundary-client-server',
      severity: 'error',
      comment: 'Client modules should not directly depend on server modules and vice versa.',
      from: {
        path: '^src/client',
      },
      to: {
        path: '^src/server',
      },
    },
    {
      name: 'no-infrastructure-in-domain',
      severity: 'error',
      comment: 'Domain modules should not directly depend on infrastructure modules.',
      from: {
        path: '^src/(client|server)/domain',
      },
      to: {
        path: '^src/(client|server)/infrastructure',
      },
    },
    {
      name: 'no-application-in-domain',
      severity: 'error',
      comment: 'Domain modules should not directly depend on application modules.',
      from: {
        path: '^src/(client|server)/domain',
      },
      to: {
        path: '^src/(client|server)/application',
      },
    },
    {
      name: 'no-presentation-in-domain',
      severity: 'error',
      comment: 'Domain modules should not directly depend on presentation modules.',
      from: {
        path: '^src/(client|server)/domain',
      },
      to: {
        path: '^src/(client|server)/presentation',
      },
    },
    {
      name: 'no-infrastructure-in-application',
      severity: 'error',
      comment: 'Application modules should not directly depend on infrastructure modules.',
      from: {
        path: '^src/(client|server)/application',
      },
      to: {
        path: '^src/(client|server)/infrastructure',
      },
    },
  ],
  options: {

    baseDir: './',

    /* Which modules not to follow further when encountered */
    doNotFollow: {
      /* path: an array of regular expressions in strings to match against */
      path: ['node_modules', 'spec']
    },

    /* Which modules to exclude */
    // exclude : {
    //   /* path: an array of regular expressions in strings to match against */
    //   path: '',
    // },

    /* Which modules to exclusively include (array of regular expressions in strings)
       dependency-cruiser will skip everything not matching this pattern
    */
    // includeOnly : [''],

    /* List of module systems to cruise.
       When left out dependency-cruiser will fall back to the list of _all_
       module systems it knows of. It's the default because it's the safe option
       It might come at a performance penalty, though.
       moduleSystems: ['amd', 'cjs', 'es6', 'tsd']

       As in practice only commonjs ('cjs') and ecmascript modules ('es6')
       are widely used, you can limit the moduleSystems to those.
     */

    // moduleSystems: ['cjs', 'es6'],

    /* prefix for links in html and svg output (e.g. 'https://github.com/you/yourrepo/blob/main/'
       to open it on your online repo or `vscode://file/${process.cwd()}/` to
       open it in visual studio code),
     */
    // prefix: `vscode://file/${process.cwd()}/`,

    /* false (the default): ignore dependencies that only exist before typescript-to-javascript compilation
       true: also detect dependencies that only exist before typescript-to-javascript compilation
       "specify": for each dependency identify whether it only exists before compilation or also after
     */
    tsPreCompilationDeps: true,

    /* list of extensions to scan that aren't javascript or compile-to-javascript.
       Empty by default. Only put extensions in here that you want to take into
       account that are _not_ parsable.
    */
    // extraExtensionsToScan: [".json", ".jpg", ".png", ".svg", ".webp"],

    /* if true combines the package.jsons found from the module up to the base
       folder the cruise is initiated from. Useful for how (some) mono-repos
       manage dependencies & dependency definitions.
     */
    // combinedDependencies: false,

    /* if true leave symlinks untouched, otherwise use the realpath */
    // preserveSymlinks: false,

    /* TypeScript project file ('tsconfig.json') to use for
       (1) compilation and
       (2) resolution (e.g. with the paths property)

       The (optional) fileName attribute specifies which file to take (relative to
       dependency-cruiser's current working directory). When not provided
       defaults to './tsconfig.json'.
     */
    tsConfig: {
      fileName: 'tsconfig.json'
    },

    /* Webpack configuration to use to get resolve options from.

       The (optional) fileName attribute specifies which file to take (relative
       to dependency-cruiser's current working directory. When not provided defaults
       to './webpack.conf.js'.

       The (optional) `env` and `arguments` attributes contain the parameters
       to be passed if your webpack config is a function and takes them (see
        webpack documentation for details)
     */
    // webpackConfig: {
    //  fileName: 'webpack.config.js',
    //  env: {},
    //  arguments: {}
    // },

    /* Babel config ('.babelrc', '.babelrc.json', '.babelrc.json5', ...) to use
      for compilation
     */
    // babelConfig: {
    //   fileName: '.babelrc',
    // },

    /* List of strings you have in use in addition to cjs/ es6 requires
       & imports to declare module dependencies. Use this e.g. if you've
       re-declared require, use a require-wrapper or use window.require as
       a hack.
    */
    // exoticRequireStrings: [],

    /* options to pass on to enhanced-resolve, the package dependency-cruiser
       uses to resolve module references to disk. The values below should be
       suitable for most situations

       If you use webpack: you can also set these in webpack.conf.js. The set
       there will override the ones specified here.
     */
    enhancedResolveOptions: {
      /* What to consider as an 'exports' field in package.jsons */
      exportsFields: ["exports"],
      /* List of conditions to check for in the exports field.
         Only works when the 'exportsFields' array is non-empty.
      */
      conditionNames: ["import", "require", "node", "default", "types"],
      /*
         The extensions, by default are the same as the ones dependency-cruiser
         can access (run `npx depcruise --info` to see which ones that are in
         _your_ environment). If that list is larger than you need you can pass
         the extensions you actually use (e.g. [".js", ".jsx"]). This can speed
         up module resolution, which is the most expensive step.
       */
      // extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      /* What to consider a 'main' field in package.json */

      // if you migrate to ESM (or are in an ESM environment already) you will want to
      // have "module" in the list of mainFields, like so:
      // mainFields: ["module", "main", "types", "typings"],
      mainFields: ["main", "types", "typings"],
      /*
         A list of alias fields in package.jsons
         See [this specification](https://github.com/defunctzombie/package-browser-field-spec) and
         the webpack [resolve.alias](https://webpack.js.org/configuration/resolve/#resolvealiasfields)
         documentation

         Defaults to an empty array (= don't use alias fields).
       */
      // aliasFields: ["browser"],
    },
    reporterOptions: {
      dot: {
        /* pattern of modules that can be consolidated in the detailed
           graphical dependency graph. The default pattern in this configuration
           collapses everything in node_modules to one folder deep so you see
           the external modules, but their innards.
         */
        collapsePattern: 'node_modules/(?:@[^/]+/[^/]+|[^/]+)',


        /* Options to tweak the appearance of your graph.See
           https://github.com/sverweij/dependency-cruiser/blob/main/doc/options-reference.md#reporteroptions
           for details and some examples. If you don't specify a theme
           dependency-cruiser falls back to a built-in one.
        */
        theme: {
          modules: [
            {
              criteria: { source: '^src/client/domain' },
              attributes: {
                fillcolor: '#fa9f36',
                fontcolor: 'black',
                style: 'filled',
              },
            },
            {
              criteria: { source: '^src/client/application' },
              attributes: {
                fillcolor: '#fb6969',
                fontcolor: 'black',
                style: 'filled',
              },
            },
            {
              criteria: { source: '^src/client/infrastructure' },
              attributes: {
                fillcolor: '#6cbaff', // Bleu
                fontcolor: 'black',
                style: 'filled',
              },
            },
            {
              criteria: { source: '^src/client/presentation' },
              attributes: {
                fillcolor: '#9fff9f',
                fontcolor: 'black',
                style: 'filled',
              },
            },
            {
              criteria: { source: '^src/server/domain' },
              attributes: {
                fillcolor: '#dc6b0d',
                fontcolor: 'white',
                style: 'filled',
              },
            },
            {
              criteria: { source: '^src/server/application' },
              attributes: {
                fillcolor: '#dd1c1c',
                fontcolor: 'white',
                style: 'filled',
              },
            },
            {
              criteria: { source: '^src/server/infrastructure' },
              attributes: {
                fillcolor: '#248cea',
                fontcolor: 'white',
                style: 'filled',
              },
            },
            {
              criteria: { source: '^src/server/presentation' },
              attributes: {
                fillcolor: '#20b520',
                fontcolor: 'white',
                style: 'filled',
              },
            },
          ]
        }
      },
      archi: {
        /* pattern of modules that can be consolidated in the high level
          graphical dependency graph. If you use the high level graphical
          dependency graph reporter (`archi`) you probably want to tweak
          this collapsePattern to your situation.
        */
        collapsePattern: '^(?:packages|src|lib(s?)|app(s?)|bin|test(s?)|spec(s?))/[^/]+|node_modules/(?:@[^/]+/[^/]+|[^/]+)',

        /* Options to tweak the appearance of your graph. If you don't specify a
           theme for 'archi' dependency-cruiser will use the one specified in the
           dot section above and otherwise use the default one.
         */
      },
      "text": {
        "highlightFocused": true
      },
    }
  }
};
// generated: dependency-cruiser@16.6.0 on 2024-11-21T10:02:24.873Z
